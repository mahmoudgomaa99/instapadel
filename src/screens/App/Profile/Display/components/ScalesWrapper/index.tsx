import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {keys} from './data';
import Svg from 'atoms/Svg';
import COLORS from 'values/colors';

const ScalesWrapper = ({profile}: any) => {
  return (
    <View style={styles.container}>
      {keys.map((item, index) => (
        <View key={index} style={styles.scaleWrapper}>
          <Svg
            name={item.key}
            bgColor={COLORS.secButtonBG}
            size={item.key === 'weight' ? 30 : 20}
          />
          <Text style={styles.scale_value}>{profile[item.key]}</Text>
          <Text style={styles.mesuring_unit}>{item.mesuringUnit}</Text>
        </View>
      ))}
    </View>
  );
};

export default ScalesWrapper;
