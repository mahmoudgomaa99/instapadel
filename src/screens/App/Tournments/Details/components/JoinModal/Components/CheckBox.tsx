import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CheckBox, Icon} from 'react-native-elements';
import COLORS from 'values/colors';

const CircledCheckBox = ({checked, name, setChecked, ...props}: any) => {
  return (
    <CheckBox
      {...props}
      containerStyle={{
        backgroundColor: 'transparent',
        borderWidth: 0,
      }}
      textStyle={{color: COLORS.white}}
      checkedIcon={
        <Icon
          name="radio-button-checked"
          type="material"
          color={COLORS.secButtonBG}
          size={30}
          iconStyle={{marginRight: 10}}
          tvParallaxProperties={undefined}
        />
      }
      uncheckedIcon={
        <Icon
          name="radio-button-unchecked"
          type="material"
          color={COLORS.secondery}
          size={30}
          iconStyle={{marginRight: 10}}
          tvParallaxProperties={undefined}
        />
      }
      checked={checked === props.title}
      onPress={() => setChecked(props.title)}
    />
  );
};

export default CircledCheckBox;
