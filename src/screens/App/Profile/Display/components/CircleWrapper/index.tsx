import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {TName} from 'atoms/Svg';
import {styles} from './styles';

const CircleWrapper = ({
  svgName,
  svgSize,
  bgColor,
}: {
  svgName: TName;
  svgSize: number;
  bgColor: string;
}) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: bgColor,
      }}>
      <Svg name={svgName} size={svgSize} />
    </View>
  );
};

export default CircleWrapper;
