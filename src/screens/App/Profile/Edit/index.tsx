import {ImageBackground, SafeAreaView} from 'react-native';
import React from 'react';
import {images} from 'src/assets/images';
import {styles} from './styles';
import Header from './components/Header';
import useLibraryPermission from 'hooks/useLibraryPermission';
import CameraWrapper from './components/CameraWrapper';
import {useSelector} from 'react-redux';
import {selectMyProfile} from 'redux/profile';
import Form from './Form';

const EditProfile = () => {
  const {source, pick} = useLibraryPermission();
  const myProfile = useSelector(selectMyProfile);
  return (
    <ImageBackground source={images.home.background} style={styles.container}>
      <SafeAreaView>
        <Header />
        <CameraWrapper source={source} pick={pick} uri={myProfile?.avatar} />
        <Form source={source} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default EditProfile;
