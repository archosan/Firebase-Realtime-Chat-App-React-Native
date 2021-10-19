import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    bottom: 0,
    height: 50,
    width: Dimensions.get('screen').width,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#FFA040',
    padding: 5,
  },
  input: {
    color: 'white',
    flex: 1,
  },
  icon: {
    padding: 5,
    color: 'white',
  },
});
