import {ImageBackground, ScrollView, View} from 'react-native';
import React from 'react';
import {images} from 'src/assets/images';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from './components/Header';
import TopBody from './components/TopBody';
import {useNavigation, useRoute} from '@react-navigation/native';
import ScalesWrapper from './components/ScalesWrapper';
import UserInfo from './components/UserInfo';
import Button from 'components/molecules/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Profile = ({user, profile}: any) => {
  const {currentUser, myProfile}: any = useRoute().params || {};
  const navigation = useNavigation<any>();
  return (
    <ImageBackground source={images.home.background} style={styles.container}>
      <SafeAreaView>
        <View style={{height: '94%'}}>
          <Header />
          <TopBody user={user || currentUser} profile={profile || myProfile} />
          <ScalesWrapper profile={profile || myProfile} />
          <KeyboardAwareScrollView contentContainerStyle={{padding: 20}}>
            <UserInfo profile={profile || myProfile} />
          </KeyboardAwareScrollView>
        </View>
        <Button
          type="secondry"
          label="CHANGE PASSWORD"
          onPress={() => navigation.navigate('change_password')}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Profile;
