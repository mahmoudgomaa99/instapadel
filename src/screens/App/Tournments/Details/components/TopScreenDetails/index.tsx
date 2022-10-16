import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Svg from 'atoms/Svg';

const TopScreenDetails = ({level, no_of_players}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.levelContainer}>
        <Svg name="level" size={20} />
        <View style={{marginLeft: 10}}>
          <Text style={styles.title}>Level</Text>
          <Text style={styles.greenText}>{'Level ' + level}</Text>
        </View>
      </View>
      <View style={styles.levelContainer}>
        <View style={{marginRight: 10, alignItems: 'center'}}>
          <Text style={styles.title}>Players Left</Text>
          <Text style={styles.greenText}>{'2/' + no_of_players}</Text>
        </View>
        <Svg name="player" size={20} />
      </View>
    </View>
  );
};

export default TopScreenDetails;
