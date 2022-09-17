import {Dimensions, StyleSheet} from 'react-native';
import { fonts } from 'react-native-elements/dist/config';
import COLORS from 'values/colors';
import {MarginsAndPaddings} from 'values/Dimensions';
import Fonts from 'values/fonts';

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  lockWrapper: {
    backgroundColor: COLORS.cameraBackGround,
    borderRadius: 100,
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    padding: MarginsAndPaddings.l,
    marginBottom: MarginsAndPaddings.xxl,
  },
  lockImage: {
    width: 140,
    height: 140,
  },
  checkYourPhoneText: {
    color: COLORS.white,
    fontFamily: Fonts.RobotoBold,
    marginTop: 20,
    fontSize: 25,
    fontWeight: '600',
  },
  sentText: {
    color: COLORS.grey,
    marginTop: 30,
  },
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', justifyContent: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 80,
    height: 100,
    borderRadius: 10,
    lineHeight: 38,
    fontSize: 30,
    borderWidth: 1,
    borderColor: COLORS.secondery,
    color: '#fff',
    paddingTop: 30,
    marginRight: 12,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusCell: {
    borderColor: '#fff',
  },
  counterWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    flexDirection: 'row',
  },
  counterText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
    letterSpacing: 0.25,
  },
  bottomWrapper: {
    justifyContent: 'flex-end',
    height: '25%',
    alignItems: 'center',
  },
  resendText: {
    color: COLORS.white,
    marginBottom: MarginsAndPaddings.l,
    textDecorationColor: COLORS.white,
    fontSize: 16,
    fontFamily: Fonts.RobotoBold,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    fontWeight:"700"
  },
  button: {width: Dimensions.get('window').width * 0.95},
});
