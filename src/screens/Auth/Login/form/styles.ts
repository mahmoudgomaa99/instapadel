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
  inputTitle: {marginLeft: 18, color: COLORS.white},
  forgetText: {
    color: COLORS.white,
    fontWeight: '700',
  },
  forgetTextWrfapper: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: MarginsAndPaddings.xxl,
  },
  RegisterText: {
    color: COLORS.white,
    fontWeight: '700',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    fontSize: 16,
  },
  RegisterTextWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: MarginsAndPaddings.xxl,
  },
});
