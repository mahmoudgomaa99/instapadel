import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {keys} from './data';
import {styles} from './styles';

const UserInfo = ({profile}: any) => {
  return (
    <>
      {keys.map(
        (item, index) =>
          profile[item.key] && (
            <View style={{marginBottom: 15}} key={index}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.key}>
                {item.key === 'first_name'
                  ? profile.first_name + ' ' + profile.last_name
                  : profile[item.key]}
              </Text>
            </View>
          ),
      )}
    </>
  );
};

export default UserInfo;
