import {Dimensions, StyleSheet} from 'react-native';
import COLORS from 'values/colors';
import {MarginsAndPaddings} from 'values/Dimensions';
import Fonts from 'values/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.cardBg,
    borderWidth: 1,
    borderColor: COLORS.secondery,
    borderRadius: 20,
    height: 240,
    margin: 10,
    marginTop: 20,
    padding: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: COLORS.white,
    fontSize: 22,
    fontFamily: Fonts.RobotoRegular,
    maxWidth:"80%"
  },
  detailsContainer: {
    marginTop: 20,
  },
  sub_detailContainer: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5,
  },
  detail_text: {
    color: COLORS.white,
    marginLeft: 5,
    fontSize: 14,
  },
  greenText: {
    color: COLORS.secButtonBG,
    fontSize: 22,
  },
  userWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImg: {
    width: 40,
    height: 40,
  },
});
