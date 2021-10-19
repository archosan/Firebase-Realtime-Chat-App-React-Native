import {StyleSheet} from 'react-native';

const baseStyle = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default {
  primary: {
    container: {
      ...baseStyle.container,
      backgroundColor: '#FFA040',
    },
    buttonText: {
      ...baseStyle.buttonText,
      color: 'white',
    },
  },
  secondary: {
    container: {
      ...baseStyle.container,
      backgroundColor: 'white',
    },
    buttonText: {
      ...baseStyle.buttonText,
      color: '#FF6F00',
    },
  },
};
