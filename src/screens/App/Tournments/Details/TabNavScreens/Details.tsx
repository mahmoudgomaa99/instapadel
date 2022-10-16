import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import DetailItem from './components/DetailItem';
import COLORS from 'values/colors';
import {CheckBox} from 'react-native-elements';

const Details = ({tournment, checked, setChecked}: any) => {
  return (
    <ScrollView>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.description}>{tournment.description}</Text>
        <DetailItem
          svg_name="calenderFill"
          svg_size={20}
          title="Date & Time"
          value={tournment.start_date + '  ' + tournment.start_time}
        />
        <DetailItem
          svg_name="location"
          svg_size={20}
          title="Location"
          value={tournment.location}
        />
        <DetailItem
          svg_name="step1"
          svg_bg={COLORS.secButtonBG}
          svg_size={23}
          title="Tournament Type"
          value={tournment?.type?.name || 'Single'}
        />
        {tournment.has_prize === 1 && (
          <DetailItem
            svg_name="prize"
            svg_size={23}
            title="Prize"
            value={tournment.prize_value + ' L.E'}
          />
        )}
        <Text style={styles.greenText}>Organizer</Text>
        <View style={styles.organizer_container}>
          <Image
            source={{uri: tournment.organizer.user_avatar}}
            style={styles.userImg}
          />
          <Text style={styles.detail_text}>
            {tournment.organizer.user_name}
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <CheckBox
            disabled={false}
            checked={checked}
            onPress={() => setChecked((prev: any) => !prev)}
            containerStyle={{marginLeft: -5, marginRight: -5}}
          />
          <Text style={{color: COLORS.white}}>
            I have read the rules and regulations of the tournnament
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;
