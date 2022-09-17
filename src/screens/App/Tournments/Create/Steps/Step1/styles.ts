import {Dimensions, StyleSheet} from 'react-native';
import COLORS from 'values/colors';
import {MarginsAndPaddings} from 'values/Dimensions';
import Fonts from 'values/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  stepsPaginatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  stepPaginatorContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.darkBlue,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
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
  multiRoundContainer: {
    width: 361,
    height: 210,
    borderRadius: 150,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: COLORS.openGreen,
    marginTop: 25,
    borderTopWidth: 0,
    borderLeftWidth: 0,
  },
  multiRoundWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 30,
  },
  legueWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 30,
  },
  multiRoundText: {
    color: COLORS.white,
    fontSize: 30,
    fontFamily: Fonts.RobotoBold,
  },
  formatText: {
    color: COLORS.openGreen,
    fontSize: 20,
    fontFamily: Fonts.RobotoBold,
  },
});
