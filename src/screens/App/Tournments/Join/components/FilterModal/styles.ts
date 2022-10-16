import { StyleSheet } from "react-native";
import COLORS from "values/colors";

export const styles = StyleSheet.create({
  modalInnerWrapper: {
    marginHorizontal: 15,
    marginVertical: 20,
    padding: 10,
    borderColor: COLORS.secondery,
    backgroundColor: COLORS.cardBg,
    borderWidth: 1,
    borderRadius: 15,
  },
  greenText: {
    color: COLORS.secButtonBG,
    fontSize: 22,
  },
  itemWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
});