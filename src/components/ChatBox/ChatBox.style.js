import {StyleSheet} from 'react-native';

const baseStyle = StyleSheet.create({
  container: {
    position: 'relative',
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    maxWidth: '70%',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },

  content: {
    padding: 10,
  },
  name: {fontSize: 11, fontWeight: '400', marginRight: 15},
  date: {
    fontSize: 10,
    fontStyle: 'italic',
  },
});

export default {
  ...baseStyle,
  primary: {
    container: {
      ...baseStyle.container,
      right: 0,
      backgroundColor: '#F78B40',
      borderColor: 'transparent',
      marginLeft: 'auto',
    },

    content: {
      ...baseStyle.content,
      color: 'white',
    },

    innerContainer: {
      ...baseStyle.innerContainer,
    },
    name: {
      ...baseStyle.name,
      color: 'white',
    },
    date: {
      ...baseStyle.date,
      color: 'white',
    },
  },
  secondary: {
    container: {
      ...baseStyle.container,
      alignItems: 'flex-start',
      borderColor: 'transparent',
      backgroundColor: 'white',
      marginRight: 'auto',
    },
    contentContainer: {
      ...baseStyle.contentContainer,
    },
    content: {
      ...baseStyle.content,
    },

    innerContainer: {
      ...baseStyle.innerContainer,
    },
    name: {
      ...baseStyle.name,
    },
    date: {
      ...baseStyle.date,
    },
  },
};
