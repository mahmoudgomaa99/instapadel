import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React from 'react';
import COLORS from 'values/colors';
import {MarginsAndPaddings} from 'values/Dimensions';
import Svg from 'atoms/Svg';

type TType = 'Facebok' | 'Google' | 'Apple';

type TProps = {
  type: TType;
  stylingProps?: any;
};

const SocialButton = ({
  type,
  stylingProps,
  ...props
}: TouchableOpacityProps & TProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={{...styles.socialContainer, ...stylingProps}}>
      <Svg size={24} name={type} />
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  socialContainer: {
    height: 50,
    backgroundColor: COLORS.socialBG,
    margin: MarginsAndPaddings.xxl,
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    marginLeft: MarginsAndPaddings.l,
    color: COLORS.secondery,
    fontWeight: '600',
  },
});
