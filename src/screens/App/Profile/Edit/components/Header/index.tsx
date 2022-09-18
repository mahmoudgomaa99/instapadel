import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Svg from 'atoms/Svg';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Svg name="left_arrow" size={12} />
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
      </View>
    </View>
  );
};

export default Header;
