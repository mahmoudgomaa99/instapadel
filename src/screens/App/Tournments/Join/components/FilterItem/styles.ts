import {Dimensions, StyleSheet} from 'react-native';
import COLORS from 'values/colors';
import {MarginsAndPaddings} from 'values/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    height: 55,
    backgroundColor: COLORS.secondery,
    borderWidth: 0.5,
    borderColor: COLORS.openSecondery,
    margin: 10,
    padding: 10,
    borderRadius: 15,
  },
  title: {
    color: COLORS.white,
    opacity: 0.8,
    fontSize: 14,
  },
});
