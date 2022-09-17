import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bottomItemWrapper: {
    paddingHorizontal: 15,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {width: Dimensions.get('window').width * 1, marginTop: 35},
});
