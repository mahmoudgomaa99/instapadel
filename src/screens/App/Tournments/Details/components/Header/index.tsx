import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Svg from 'atoms/Svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const TournmentDetailsHeader = ({name, privacy}: any) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Svg name="left_arrow" size={12} />
        </TouchableOpacity>
        <View>
          <Text style={styles.greenText}>
            {privacy === 0 ? 'Private' : 'Public'}
          </Text>
          <Text style={styles.title}>{name}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.shareContainer}>
        <Svg name="share" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default TournmentDetailsHeader;
