import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import useLibraryPermission from 'hooks/useLibraryPermission';
import Svg from 'atoms/Svg';

const CameraWrapper = () => {
  const {source, pick} = useLibraryPermission();
  return (
    <View style={styles.cameraWrapper}>
      <TouchableOpacity onPress={pick} style={styles.cameraCircleWrapper}>
        {!source ? (
          <Svg name="camera" size={30} />
        ) : (
          <Image style={styles.cameraCircleWrapper} source={source.assets} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CameraWrapper;
