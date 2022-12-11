import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#D9D9D9',
    fontSize: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    flexDirection: 'row',
    position: 'relative',
  },
  title: {
    color: '#FFFFFF',
  },
  iconContainer: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
});
