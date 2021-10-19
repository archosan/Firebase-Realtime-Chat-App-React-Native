import React, {useLayoutEffect, useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RoomCard from '../../components/RoomCard';
import CreateRoomModal from '../../modals/CreateRoomModal';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import styles from './Rooms.styles';
import parseContentData from '../../utils/parseContentData';
import {showMessage} from 'react-native-flash-message';
const Rooms = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const onRoomsChange = database()
      .ref('rooms/')
      .on('value', snapshot => {
        const response = snapshot.val();

        setRooms(parseContentData(response) || {});
      });

    return () => {
      database().ref('rooms/').off('value', onRoomsChange);
    };
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => auth().signOut()}>
          <Icon name="logout" size={25} color="#FFA040" />
        </TouchableOpacity>
      ),
      headerTitleStyle: {
        color: '#FFA040',
      },
    });
  }, []);

  const handleRoomToogle = () => {
    setIsVisible(!isVisible);
  };

  const handleRoomSubmit = roomName => {
    handleRoomToogle();
    sendRoom(roomName);
  };
  const sendRoom = roomName => {
    const room = {
      name: roomName,

      createdAt: new Date().toISOString(),
    };
    database().ref('rooms/').push(room);
  };
  const handleChatRoom = (roomName, roomId) => {
    navigation.navigate('Mesajlar', {roomId, roomName});
  };

  const handleRemoveRoom = async (id, name) => {
    try {
      await database().ref(`/rooms/${id}`).remove();
      showMessage({
        type: 'success',
        message: `${name} odası silindi`,
      });
    } catch (error) {
      showMessage({
        type: 'danger',
        message: `${name} odası silinemedi`,
      });
    }
  };
  const renderRooms = ({item}) => {
    return (
      <RoomCard
        key={item.key}
        room={item}
        handleChatRoom={() => handleChatRoom(item.name, item.id)}
        handleRemoveRoom={() => handleRemoveRoom(item.id, item.name)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <CreateRoomModal
        isModalVisible={isVisible}
        onClose={handleRoomToogle}
        handlePress={handleRoomSubmit}
      />
      <FloatingButton name="plus" size={25} handlePress={handleRoomToogle} />
      <FlatList numColumns={2} data={rooms} renderItem={renderRooms} />
    </View>
  );
};

export default Rooms;
