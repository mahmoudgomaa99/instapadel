import {Dimensions, StyleSheet} from 'react-native';
import COLORS from 'values/colors';
import {MarginsAndPaddings} from 'values/Dimensions';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 30,
  },
  title: {
    color: COLORS.white,
    fontSize: 13,
  },
  greenText: {
    color: COLORS.secButtonBG,
    fontSize: 17,
    fontWeight: '700',
  },
  shareContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.secButtonBG,
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
