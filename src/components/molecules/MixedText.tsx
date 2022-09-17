import {StyleSheet, Text} from 'react-native';
import React from 'react';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

type TProps = {
  title: string;
  required: boolean;
};

const MixedText = ({title, required}: TProps) => {
  return (
    <Text style={styles.title}>
      {title}
      <Text style={{fontSize: 10, color: COLORS.grey}}>
        {required ? '    *Required' : '    *Optional'}
      </Text>
    </Text>
  );
};

export default MixedText;

const styles = StyleSheet.create({
  title: {
    color: COLORS.white,
    marginLeft: 5,
    fontFamily: Fonts.RobotoBold,
    fontSize: 16,
  },
});
