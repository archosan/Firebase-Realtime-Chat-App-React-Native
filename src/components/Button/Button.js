import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';

const Button = ({text, type = 'primary', onPress, access}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles[type].container}
      accessible={access}>
      <Text style={styles[type].buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
