import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images} from 'src/assets/images';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from './Header';

const Profile = () => {
  return (
    <ImageBackground source={images.home.background} style={styles.container}>
      <SafeAreaView>
        <Header />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Profile;
