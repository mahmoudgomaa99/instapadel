import {ImageBackground} from 'react-native';
import React from 'react';
import {images} from 'src/assets/images';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const JoinTournment = () => {
  return (
    <ImageBackground source={images.home.background} style={styles.container}>
      <SafeAreaView></SafeAreaView>
    </ImageBackground>
  );
};

export default JoinTournment;
