import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Svg from 'atoms/Svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from 'redux/store';
import Tournment from 'redux/tournment';

const TournmentHeader = ({title}: any) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
          dispatch(Tournment.resetStep2());
        }}>
        <Svg name="left_arrow" size={12} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default TournmentHeader;
