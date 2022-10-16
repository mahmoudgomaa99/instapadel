import {Dimensions, StyleSheet} from 'react-native';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

export const styles = StyleSheet.create({
  modalInnerWrapper: {
    marginHorizontal: 15,
    marginVertical: 20,
    paddingVertical: 15,
    borderColor: COLORS.secondery,
    backgroundColor: COLORS.cardBg,
    borderWidth: 1,
    borderRadius: 15,
  },
  greenText: {
    color: COLORS.secButtonBG,
    fontSize: 22,
    marginHorizontal: 15,
  },
  itemWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  textInputStyle: {
    borderWidth: 1,
    borderRadius: 12,
    height: 45,
    paddingLeft: Dimensions.get('window').width * 0.03,
    fontFamily: Fonts.RobotoRegular,
    lineHeight: 24,
    backgroundColor: COLORS.secondery,
    borderColor: COLORS.secondery,
    fontSize: 12,
    marginHorizontal: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
