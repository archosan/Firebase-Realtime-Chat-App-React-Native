import React, {useLayoutEffect, useState, useEffect} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ChatBox from '../../components/ChatBox/ChatBox';
import ChatInput from '../../components/ChatInput';
import styles from './Chat.style';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import parseContentData from '../../utils/parseContentData';
const Chat = ({navigation, route}) => {
  const [messages, setMessages] = useState([]);
  const roomID = route.params.roomId;

  useEffect(() => {
    const onValueChange = database()
      .ref(`rooms/${roomID}/messages`)
      .on('value', snapshot => {
        setMessages(parseContentData(snapshot.val() || {}));
      });
    return () => {
      database().ref(`rooms/${roomID}/messages`).off('value', onValueChange);
    };
  }, [roomID]);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.roomName,
      headerLeft: () => (
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={25} color="#FFA040" />
          <Text style={{color: '#FFA040'}}>Odalar</Text>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => auth().signOut()}>
          <Icon name="logout" size={25} color="#FFA040" />
        </TouchableOpacity>
      ),

      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: '#FFA040',
      },
      headerTintColor: '#FFA040',
    });
  }, []);

  const handleMessage = message => {
    const {roomId} = route.params;
    const userMail = auth().currentUser.email;

    const messageContent = {
      message: message,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
    };
    database().ref(`rooms/${roomId}/messages`).push(messageContent);
  };
  const renderMessages = ({item, index}) => {
    return <ChatBox key={index} message={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList data={messages} renderItem={renderMessages} />
      <ChatInput handleMessage={handleMessage} />
    </View>
  );
};

export default Chat;
