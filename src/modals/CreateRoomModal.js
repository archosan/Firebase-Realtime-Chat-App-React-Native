import React, {useState} from 'react';
import {Text, StyleSheet, Dimensions, View, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import Button from '../components/Button';

const CreateRoomModal = ({isModalVisible, onClose, handlePress}) => {
  const [text, setText] = useState('');

  const onSubmitRoom = () => {
    if (!text) {
      return;
    }
    handlePress(text);
    setText('');
  };

  return (
    <Modal
      onBackButtonPress={onClose}
      isVisible={isModalVisible}
      onBackdropPress={onClose}
      swipeDirection="up"
      onSwipeComplete={onClose}
      style={styles.modal}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Bir oda ekle"
          value={text}
          multiline={true}
          onChangeText={setText}
        />
        <Button text="Ekle" onPress={onSubmitRoom} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {},
  container: {
    height: Dimensions.get('screen').height / 3,
    backgroundColor: '#FF6F00',
    borderRadius: 10,
  },
  input: {
    backgroundColor: 'white',
    flex: 1,
    textAlignVertical: 'top',
    borderRadius: 10,
    borderColor: '#FF6F00',
    borderLeftWidth: 4,
    borderTopWidth: 4,
    borderRightWidth: 4,
    padding: 10,
  },
});

export default CreateRoomModal;
