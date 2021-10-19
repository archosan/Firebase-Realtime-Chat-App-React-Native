import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './ChatBox.style';
import auth from '@react-native-firebase/auth';
import {parseISO, formatDistance} from 'date-fns';
import {tr} from 'date-fns/locale';
const ChatBox = ({message}) => {
  const formattedDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });
  const userSession = auth().currentUser.email.split('@')[0];
  const theme = message.username === userSession ? 'primary' : 'secondary';

  return (
    <View style={styles[theme].container}>
      <Text style={styles[theme].content}>{message.message}</Text>

      <View style={styles[theme].innerContainer}>
        <Text style={styles[theme].name}>{message.username}</Text>
        <Text style={styles[theme].date}>{formattedDate}</Text>
      </View>
    </View>
  );
};

export default ChatBox;
