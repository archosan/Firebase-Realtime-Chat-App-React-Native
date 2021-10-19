import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './FloatingButton.style';
const FloatingButton = ({size, name, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Icon name={name} size={size} color="white" />
    </TouchableOpacity>
  );
};

export default FloatingButton;
