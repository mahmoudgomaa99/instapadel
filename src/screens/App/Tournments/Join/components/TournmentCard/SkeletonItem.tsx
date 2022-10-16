import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {styles} from './styles';
import COLORS from 'values/colors';

const SkeletonItem = () => {
  return (
    <SkeletonPlaceholder backgroundColor={'#c8c8c8'} borderRadius={4}>
      <SkeletonPlaceholder.Item style={{}}>
        <View style={{...styles.container, backgroundColor: 'transparent'}} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SkeletonItem;
