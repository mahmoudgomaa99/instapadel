import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {images} from 'src/assets/images';
import Switcher from './Step2Switcher';

const Step1 = ({props, setStep}: any) => {
  return (
    <>
      <View style={styles.privacyContainer}>
        <View>
          <Text style={styles.privacyTxt1}>Privacy</Text>
          <Text style={styles.privacyTxt2}>
            {props.values.is_public === 1 ? 'Public' : 'Private'}
          </Text>
        </View>
        <Switcher props={props} />
      </View>
      <TouchableOpacity
        onPress={() => {
          setStep(2);
          props.setFieldValue('format', 'Multi Round');
        }}>
        <ImageBackground
          style={styles.multiRoundContainer}
          source={images.home.createTournment.multiRound}>
          <View style={styles.multiRoundWrapper}>
            <Text style={styles.multiRoundText}>MULTI-ROUND</Text>
            <Text style={styles.formatText}>Format</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setStep(2);
          props.setFieldValue('format', 'League');
        }}>
        <ImageBackground
          style={styles.multiRoundContainer}
          source={images.home.createTournment.legue}>
          <View style={styles.legueWrapper}>
            <View>
              <Text style={styles.multiRoundText}>LEGUE</Text>
              <Text style={styles.formatText}>Format</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </>
  );
};

export default Step1;
