import {StyleSheet, Dimensions} from 'react-native';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    justifyContent: 'space-between',
  },
  scaleWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    marginTop: 20,
  },
  scale_value: {
    color: COLORS.white,
    fontSize: 45,
    marginLeft: 10,
  },
  mesuring_unit: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
  },
});
