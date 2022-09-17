import {Dimensions, StyleSheet} from 'react-native';
import COLORS from 'values/colors';
import {MarginsAndPaddings} from 'values/Dimensions';
import Fonts from 'values/fonts';

export const styles = StyleSheet.create({
  container: {},
  tournmentContainer: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    justifyContent: 'flex-start',
  },
  joinTournment: {
    backgroundColor: COLORS.openGreen,
    width: Dimensions.get('window').width * 0.45,
    height: 150,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    display: 'flex',
  },
  createTournment: {
    backgroundColor: COLORS.secondery,
    width: Dimensions.get('window').width * 0.45,
    height: 150,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    display: 'flex',
  },
  join_tournment_text: {
    marginTop: 10,
    maxWidth: 120,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: Fonts.RobotoRegular,
  },
  create_tournment_text: {
    color: COLORS.white,
    marginTop: 10,
    maxWidth: 120,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: Fonts.RobotoRegular,
  },
});
