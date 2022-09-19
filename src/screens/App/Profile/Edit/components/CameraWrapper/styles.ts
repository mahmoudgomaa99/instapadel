import {Dimensions, StyleSheet} from 'react-native';
import COLORS from 'values/colors';
import {MarginsAndPaddings} from 'values/Dimensions';
import Fonts from 'values/fonts';

export const styles = StyleSheet.create({
  container: {},
  cameraCircleWrapper: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: COLORS.secondery,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: MarginsAndPaddings.l,
    marginVertical: 20,
  },
});
