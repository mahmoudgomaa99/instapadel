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
    marginTop: 30,
  },
  stepPaginatorContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.darkBlue,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 30,
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
  multiRoundContainer: {},
  cameraWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: MarginsAndPaddings.l,
    marginVertical: 30,
  },
  cameraCircleWrapper: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: COLORS.secondery,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 10,
    height: 40,
  },
  inputTitle: {marginLeft: 18, color: COLORS.white},
});
