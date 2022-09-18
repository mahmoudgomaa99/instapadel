import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Svg from 'atoms/Svg';
import {useNavigation} from '@react-navigation/native';
import CircleWrapper from '../CircleWrapper';
import COLORS from 'values/colors';

const Header = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Svg name="left_arrow" size={12} />
        </TouchableOpacity>
        <Text style={styles.title}>My Profile</Text>
      </View>
      <View style={styles.titleContainer}>
        <CircleWrapper svgName="flag" bgColor={COLORS.secondery} svgSize={18} />
        <TouchableOpacity onPress={() => navigation.navigate('editProfile')}>
          <CircleWrapper
            svgName="edit"
            bgColor={COLORS.secButtonBG}
            svgSize={25}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
