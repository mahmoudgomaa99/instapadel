import {StyleSheet} from 'react-native';
import COLORS from 'values/colors';
import {MarginsAndPaddings} from 'values/Dimensions';

export const styles = StyleSheet.create({
  cameraWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: MarginsAndPaddings.l,
    marginTop: -20,
  },
  cameraCircleWrapper: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: COLORS.cameraBackGround,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
