import {Dimensions, StyleSheet} from 'react-native';
import COLORS from 'values/colors';
import {MarginsAndPaddings} from 'values/Dimensions';
import Fonts from 'values/fonts';

export const styles = StyleSheet.create({
  container: {},
  privacyContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 50,
  },
  privacyTxt1: {
    fontSize: 12,
    color: COLORS.white,
  },
  privacyTxt2: {
    fontSize: 30,
    color: COLORS.white,
    fontFamily: Fonts.RobotoRegular,
    fontWeight: '500',
  },
  level_touchable: {
    borderColor: COLORS.secondery,
    borderWidth: 1,
    padding: 15,
    height: 60,
    marginTop: 5,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: COLORS.white,
    backgroundColor: COLORS.backGround,
    marginHorizontal: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
    marginLeft: 15,
    fontFamily: Fonts.RobotoBold,
    fontSize: 16,
  },
  prizeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    width: Dimensions.get('window').width * 0.5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  description_input: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 10,
    marginTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  inputTitle: {marginLeft: 18, color: COLORS.white, fontWeight: '800'},
  mainInputContainer: {
    borderWidth: 1,
    borderRadius: 12,
    height: 55,
    lineHeight: 24,
    backgroundColor: COLORS.backGround,
    borderColor: COLORS.secondery,
    fontSize: 12,
    paddingHorizontal: 10,
  },
  mainDesInputContainer: {
    borderWidth: 1,
    borderRadius: 12,
    height: 80,
    lineHeight: 12,
    backgroundColor: COLORS.backGround,
    borderColor: COLORS.secondery,
    fontSize: 12,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
});
