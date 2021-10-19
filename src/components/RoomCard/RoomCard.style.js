import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 15,
    height: Dimensions.get('screen').height / 4,
    width: Dimensions.get('screen').width / 3,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  iconContainer: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFA040',
  },
});
