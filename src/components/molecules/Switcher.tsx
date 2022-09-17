import {StyleSheet, Switch, SwitchProps} from 'react-native';
import React from 'react';
import COLORS from 'values/colors';

const Switcher = ({...props}: SwitchProps) => {
  return (
    <Switch
      {...props}
      trackColor={{
        false: COLORS.darkBlue,
        true: COLORS.darkBlue,
      }}
      ios_backgroundColor={COLORS.darkBlue}
    />
  );
};

export default Switcher;

const styles = StyleSheet.create({});
