import {StyleSheet, Dimensions} from 'react-native';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 30,
  },
  title: {
    color: COLORS.white,
    fontSize: 20,
    marginLeft: 20,
    fontWeight: '700',
  },
});
