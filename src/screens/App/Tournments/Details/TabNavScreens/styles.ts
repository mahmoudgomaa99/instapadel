import {Dimensions, StyleSheet} from 'react-native';
import COLORS from 'values/colors';
import {MarginsAndPaddings} from 'values/Dimensions';

export const styles = StyleSheet.create({
  descriptionWrapper: {
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  description: {
    color: COLORS.white,
    fontSize: 14,
    opacity: 0.9,
  },
  greenText: {
    color: COLORS.secButtonBG,
    fontSize: 19,
    fontWeight: '700',
    marginTop: 30,
  },
  organizer_container: {
    height: 40,
    // width: '60%',
    minWidth:"40%",
    backgroundColor: COLORS.secondery,
    borderRadius: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  userImg: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  detail_text: {
    color:COLORS.white,
    fontSize:15
  },
});
