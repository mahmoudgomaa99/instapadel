import {Dimensions, StyleSheet} from 'react-native';
import COLORS from 'values/colors';
import {MarginsAndPaddings} from 'values/Dimensions';
import Fonts from 'values/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  cameraCircleWrapper: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: COLORS.secondery,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 10,
    height: 40,
  },
  inputTitle: {marginLeft: 18, color: COLORS.white},
  cameraWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: MarginsAndPaddings.l,
    marginVertical: 20,
  },
});
