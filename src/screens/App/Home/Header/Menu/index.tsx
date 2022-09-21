import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Menu, MenuItem} from 'react-native-material-menu';
import useMenuActions from 'hooks/useMenuActions';
import {styles} from '../styles';
import Fonts from 'values/fonts';
import {useSelector} from 'react-redux';
import Svg from 'atoms/Svg';
import {menuItems} from './data';
import {selectMyProfile} from 'redux/profile';

const MenuComponent = () => {
  const action: any = useMenuActions();
  const [visible, setVisible] = useState(false);
  const myProfile = useSelector(selectMyProfile);

  return (
    <Menu
      visible={visible}
      style={{...styles.headerButton, flexDirection: 'column', height: 250}}
      onRequestClose={() => setVisible(false)}
      anchor={
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => setVisible(true)}>
          <Text
            style={{
              color: '#fff',
              fontFamily: Fonts.RobotoMedium,
              maxWidth: 100,
            }}>
            {myProfile?.user_name}
          </Text>
          <Svg name="small_right_arrow" size={8} />
        </TouchableOpacity>
      }>
      {menuItems.map((item, index) => (
        <MenuItem
          pressColor={'transparent'}
          style={{
            marginHorizontal: 5,
          }}>
          <TouchableOpacity
            style={{...styles.headerButton, borderWidth: 0, width: 130}}
            onPress={() => {
              setVisible(false);
              action[item.action]();
            }}>
            <Text style={{color: '#fff', fontFamily: Fonts.RobotoMedium}}>
              {action[item.title]}
            </Text>
            {item.svg_name && <Svg name={item.svg_name} size={9} />}
          </TouchableOpacity>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default MenuComponent;
