import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Svg from 'atoms/Svg';

const FilterComponent = ({
  title,
  ...props
}: {title: string} & TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text style={styles.title}>{title}</Text>
      <Svg name="small_right_arrow" size={8} />
    </TouchableOpacity>
  );
};

export default FilterComponent;
