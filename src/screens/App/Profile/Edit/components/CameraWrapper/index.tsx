import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Svg from 'atoms/Svg';

const CameraWrapper = ({source, pick, uri}: any) => {
  return (
    <View style={styles.cameraWrapper}>
      <View style={styles.cameraCircleWrapper}>
        <Image
          style={styles.cameraCircleWrapper}
          source={source ? source.assets : {uri}}
        />
        <TouchableOpacity
          style={{position: 'absolute', bottom: 5}}
          onPress={pick}>
          <Svg name="camera" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraWrapper;
