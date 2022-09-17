import {Dimensions, StyleSheet} from 'react-native';
import COLORS from 'values/colors';
import {MarginsAndPaddings} from 'values/Dimensions';

const w = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: Dimensions.get('window').height * 0.1,
  },
  input: {
    width: w,
    paddingHorizontal: 10,
  },
  rawInput: {
    paddingHorizontal: 10,
    width: w*0.5
  },
  rowWraper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputTitle: {marginLeft: 18, color: COLORS.white},
});
