import {Image, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

const TopBody = ({user, profile}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.top_body_main_wrapper}>
        <View style={styles.top_body_main_wrapper_inner_wrapper}>
          <Image
            source={{uri: user.avatar}}
            style={styles.top_body_main_wrapper_inner_wrapper_image}
          />
          <Text
            style={{
              ...styles.username,
              fontSize: user.user_name.length < 10 ? 18 : 12,
            }}>
            {user.user_name}
          </Text>
        </View>
        <View style={styles.frequencyWrapper}>
          <Text style={styles.frequency_title}>Frequency of Play</Text>
          <Text style={styles.frequency_value}>
            {profile.frequency_of_playing}
          </Text>
        </View>
      </View>
      <View style={styles.top_body_secondry_wrapper}>
        <View
          style={{
            ...styles.top_body_secondry_wrapper_inner_wrapper,
            marginRight: 10,
          }}>
          <Text style={styles.frequency_value}>26</Text>
          <Text style={{...styles.frequency_title, fontSize: 20}}>
            Following
          </Text>
        </View>
        <View
          style={{
            ...styles.top_body_secondry_wrapper_inner_wrapper,
            marginLeft: 10,
          }}>
          <Text style={styles.frequency_value}>89</Text>
          <Text style={{...styles.frequency_title, fontSize: 20}}>
            Followers
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TopBody;
