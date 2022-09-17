import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Svg from 'atoms/Svg';
import MenuComponent from './Menu';

const Header = () => {
  return (
    <View style={styles.header}>
      <Svg name="home_logo" size={170} />
      <MenuComponent />
    </View>
  );
};

export default Header;
