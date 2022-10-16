import {Dimensions, Image, ImageBackground, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {images} from 'src/assets/images';
import {styles} from './styles';
import WaitingHeader from './Header';
import COLORS from 'values/colors';
import Button from 'components/molecules/Button';
import {useNavigation} from '@react-navigation/native';

const Waiting = () => {
  const navigation = useNavigation<any>();
  const onHomePressed = () => {
    navigation.reset({
      index: 1,
      routes: [{name: 'home'}],
    });
  };
  return (
    <ImageBackground source={images.home.background} style={styles.container}>
      <SafeAreaView style={{height: Dimensions.get('window').height}}>
        <WaitingHeader />
        <View
          style={{
            alignItems: 'center',
            marginTop: 60,
            justifyContent: 'space-between',
            height: '80%',
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={images.home.waiting}
              style={{width: 200, height: 200}}
            />
            <Text style={{color: COLORS.white, fontSize: 18, marginTop: 20}}>
              Waiting For The Organizer Approval
            </Text>
          </View>
          <Button
            type="secondry"
            label="HOME"
            style={{width: '90%'}}
            onPress={onHomePressed}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Waiting;
