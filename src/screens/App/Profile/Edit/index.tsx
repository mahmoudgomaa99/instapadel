import {ImageBackground, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images} from 'src/assets/images';
import {styles} from './styles';
import Header from './components/Header';

const EditProfile = () => {
  return (
    <ImageBackground source={images.home.background} style={styles.container}>
      <SafeAreaView>
        <Header />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default EditProfile;
