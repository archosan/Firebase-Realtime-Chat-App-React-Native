import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './RoomCard.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const RoomCard = ({room, handleChatRoom, handleRemoveRoom}) => {
  return (
    <TouchableOpacity onPress={handleChatRoom} style={styles.container}>
      <TouchableOpacity onPress={handleRemoveRoom} style={styles.iconContainer}>
        <Icon name="chat-remove-outline" size={20} color={'red'} />
      </TouchableOpacity>
      <Text style={styles.text}>{room.name}</Text>
    </TouchableOpacity>
  );
};

export default RoomCard;
