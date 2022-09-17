import {Image, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import Svg from 'atoms/Svg';
import RegisterForm from './Form';
import {TouchableOpacity} from 'react-native-gesture-handler';
import useLibraryPermission from 'hooks/useLibraryPermission';

const Signup = () => {
  const {source, pick} = useLibraryPermission();
  return (
    <SafeAreaView style={{flex: 2}}>
      <View style={styles.cameraWrapper}>
        <TouchableOpacity onPress={pick} style={styles.cameraCircleWrapper}>
          {!source ? (
            <Svg name="camera" size={30} />
          ) : (
            <Image style={styles.cameraCircleWrapper} source={source.assets} />
          )}
        </TouchableOpacity>
      </View>
      <RegisterForm source={source} />
    </SafeAreaView>
  );
};

export default Signup;
