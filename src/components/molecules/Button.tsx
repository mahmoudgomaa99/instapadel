import {
  ActivityIndicator,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React from 'react';
import {BorderRadius, MarginsAndPaddings} from 'values/Dimensions';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

type TType = 'primary' | 'secondry' | 'ticket_type' | 'warning';

type TButton = {
  isLoading?: boolean;
  type: TType;
  label: string;
};

const Button = ({
  isLoading,
  type,
  label,
  ...props
}: TouchableOpacityProps & TButton) => {
  return (
    <TouchableOpacity {...props}>
      <View style={styles[type] || styles.primary}>
        {isLoading ? (
          <ActivityIndicator color={COLORS.secondery} />
        ) : (
          <Text style={styles[`txt_${type}`] || styles.txt_primary}>
            {label}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  primary: {
    padding: MarginsAndPaddings.l,
    backgroundColor: COLORS.primary,
    paddingHorizontal: MarginsAndPaddings.xxl,
    margin: MarginsAndPaddings.m,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BorderRadius.s,
    marginHorizontal: MarginsAndPaddings.ml,
    marginBottom:
      Platform.OS === 'ios' ? MarginsAndPaddings.ml : MarginsAndPaddings.m,
  },
  secondry: {
    backgroundColor: COLORS.secButtonBG,
    paddingHorizontal: MarginsAndPaddings.ml + 15,
    padding: MarginsAndPaddings.xxl,
    marginHorizontal: MarginsAndPaddings.xl,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 10,
  },
  ticket_type: {
    backgroundColor: '#F8F8F8',
    padding: MarginsAndPaddings.ml - 3,
    borderRadius: 15,
    margin: MarginsAndPaddings.xxl,
    marginTop: MarginsAndPaddings.ml,
  },
  txt_primary: {
    color: COLORS.white,
    fontFamily: Fonts.RobotoBold,
  },
  txt_secondry: {
    color: COLORS.secondery,
    fontWeight: '700',
  },
  txt_ticket_type: {color: COLORS.primary, fontWeight: '700', fontSize: 17},
  warning: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: '100%',
    backgroundColor: COLORS.warning,
    paddingHorizontal: 10,
    borderRadius: BorderRadius.s,
  },
  txt_warning: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '500',
  },
});
