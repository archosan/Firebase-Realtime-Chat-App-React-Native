import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './ChatInput.style';

const ChatInput = ({handleMessage}) => {
  const [message, setMessage] = useState('');

  function handleSendButton() {
    handleMessage(message);
    setMessage('');
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholderTextColor="white"
          style={styles.input}
          placeholder="Bir şeyler yazın..."
          autoFocus
          multiline
          scrollEnabled
        />
        <TouchableOpacity onPress={handleSendButton}>
          <Icon style={styles.icon} name={'send'} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatInput;
