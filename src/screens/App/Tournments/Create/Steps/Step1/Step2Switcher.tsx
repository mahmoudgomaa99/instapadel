import {StyleSheet, Switch, Text, View} from 'react-native';
import React from 'react';
import COLORS from 'values/colors';
import Switcher from 'components/molecules/Switcher';

const Step2Switcher = ({props}: any) => {
  return (
    <Switcher
      thumbColor={
        props.values.is_public !== 1 ? COLORS.openGreen : COLORS.secondery
      }
      onValueChange={() =>
        props.setFieldValue('is_public', props.values.is_public === 1 ? 0 : 1)
      }
      value={props.values.is_public !== 1}
      style={{
        borderColor: COLORS.openGreen,
        borderWidth: props.values.is_public !== 1 ? 0.5 : 0,
      }}
    />
  );
};

export default Step2Switcher;
