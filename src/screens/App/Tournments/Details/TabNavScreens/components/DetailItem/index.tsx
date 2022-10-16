import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {TName} from 'atoms/Svg';
import COLORS from 'values/colors';

const DetailItem = ({
  svg_name,
  svg_size,
  title,
  value,
  svg_bg,
}: {
  svg_name: TName;
  svg_size: number;
  title: string;
  value: any;
  svg_bg?: any;
}) => {
  return (
    <View style={styles.itemContainer}>
      <Svg name={svg_name} size={svg_size} bgColor={svg_bg} />
      <View style={{marginLeft: 10}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.greenText}>{value}</Text>
      </View>
    </View>
  );
};

export default DetailItem;

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 30,
  },
  title: {
    color: COLORS.white,
    fontSize: 13,
  },
  greenText: {
    color: COLORS.secButtonBG,
    fontSize: 19,
    fontWeight: '700',
  },
});
