import {Dimensions, StyleSheet} from 'react-native';
import COLORS from 'values/colors';
import {MarginsAndPaddings} from 'values/Dimensions';
import Fonts from 'values/fonts';

export const styles = StyleSheet.create({
  wrapper: {},
  enterYourNumText: {
    color: COLORS.white,
    fontSize: 24,
    fontFamily: Fonts.RobotoBold,
    marginTop: Dimensions.get('window').height * 0.1,
    marginHorizontal: MarginsAndPaddings.xl,
  },
  line: {
    backgroundColor: COLORS.secondery,
    width: 60,
    height: 2,
    marginTop: 10,
    marginHorizontal: MarginsAndPaddings.xl,
  },
  input: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 10,
  },
  inputTitle: {marginLeft: 18, color: COLORS.white, marginTop: 50},
  bottomWrapper: {
    justifyContent: 'flex-end',
    height: '60%',
    alignItems: 'center',
    paddingBottom: 10,
  },
  button: {width: Dimensions.get('window').width * 0.95},
});
