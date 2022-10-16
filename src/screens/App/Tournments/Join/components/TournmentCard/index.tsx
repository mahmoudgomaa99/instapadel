import {Image, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import COLORS from 'values/colors';
import {tournment_details_mapping} from './data';
import Svg from 'atoms/Svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const TournmentCard = ({item}: any) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('tournmentDetails', {tournment: item});
      }}
      style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: COLORS.white, fontSize: 13}}>Players Left</Text>
          <Text style={styles.greenText}>{`2/${item.no_of_players}`}</Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        {tournment_details_mapping.map((detailItem, index) => (
          <View style={styles.sub_detailContainer} key={index}>
            <Svg name={detailItem.svg_name} size={14} />
            <Text style={styles.detail_text}>
              {index === 0
                ? 'Level ' + item[detailItem.key]
                : detailItem.anotherKey
                ? item[detailItem.key] + '  ' + item[detailItem.anotherKey]
                : item[detailItem.key]}
            </Text>
          </View>
        ))}
        <View style={{...styles.rowContainer, marginTop: 20}}>
          <View style={styles.userWrapper}>
            <Image
              source={{uri: item.organizer.user_avatar}}
              style={styles.userImg}
            />
            <Text style={styles.detail_text}>{item.organizer.user_name}</Text>
          </View>
          <Text style={{...styles.greenText, fontSize: 18}}>
            {item.privacy === 0 ? 'Private' : 'Public'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TournmentCard;
