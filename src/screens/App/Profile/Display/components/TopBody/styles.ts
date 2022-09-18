import {StyleSheet, Dimensions} from 'react-native';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  top_body_main_wrapper: {
    width: Dimensions.get('window').width * 0.95,
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.secondery,
    borderWidth: 1,
    borderColor: COLORS.secButtonBG,
    borderRadius: 15,
  },
  top_body_main_wrapper_inner_wrapper: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  top_body_main_wrapper_inner_wrapper_image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  username: {
    marginLeft: 5,
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
  },
  frequencyWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  frequency_title: {
    color: COLORS.white,
    fontSize: 11,
    fontWeight: '500',
  },
  frequency_value: {
    color: COLORS.secButtonBG,
    fontSize: 21,
    fontWeight: '700',
    marginTop: 5,
  },
  top_body_secondry_wrapper: {
    width: Dimensions.get('window').width * 0.95,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  top_body_secondry_wrapper_inner_wrapper: {
    backgroundColor: COLORS.secondery,
    borderWidth: 1,
    borderColor: COLORS.secButtonBG,
    borderRadius: 15,
    height: 90,
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
