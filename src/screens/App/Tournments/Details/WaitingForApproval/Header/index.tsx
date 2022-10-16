import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Svg from 'atoms/Svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const WaitingHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Svg name="left_arrow" size={12} />
        </TouchableOpacity>
    </View>
  );
};

export default WaitingHeader;
