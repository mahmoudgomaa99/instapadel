import {Dimensions, Animated as RNAnimated, View, Text} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  ZoomInDown,
  ZoomInUp,
} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg from 'atoms/Svg';
import LoginForm from './form';
import {styles} from './styles';
import SocialButton from 'components/molecules/SocialButton';
import {useRoute} from '@react-navigation/native';

const h = Dimensions.get('window').height;

const Login = () => {
  const moveLogo = useRef(new RNAnimated.ValueXY({x: 0, y: 0})).current;
  const [finished, setIsFinished] = useState(false);
  const {phone_number}: any = useRoute().params || {};
  const [poweredShown, setPoweredShown] = useState(true);
  useEffect(() => {
    setTimeout(() => setPoweredShown(false), 2000);
    setTimeout(() => {
      RNAnimated.timing(moveLogo, {
        toValue: {
          x: Dimensions.get('window').width / 2,
          y: -Dimensions.get('window').height / 3,
        },
        useNativeDriver: true,
      }).start(finished => {
        setIsFinished(true);
      });
    }, 2000);
  }, []);

  return (
    <SafeAreaView
      style={{
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      <RNAnimated.View
        style={[styles.logoContainer, {transform: [{translateY: moveLogo.y}]}]}>
        <Animated.View entering={FadeInDown.duration(2000)}>
          <Svg name="default" size={110} />
        </Animated.View>
      </RNAnimated.View>
      {finished && (
        <Animated.View
          entering={FadeIn.duration(1000)}
          style={{flex: 0.7, marginTop: -h * 0.6}}>
          <LoginForm phone_number={phone_number} />
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <SocialButton type="Google" stylingProps={{flex: 1}} />
            <SocialButton type="Apple" stylingProps={{flex: 1}} />
          </View>
          <SocialButton type="Facebok" />
        </Animated.View>
      )}
      {poweredShown && (
        <Animated.View
          style={styles.poweredContainer}
          entering={FadeInDown.duration(1000)}>
          <Text style={styles.poweredText}>Powered By</Text>
          <Svg name="oprojects" size={100} />
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

export default Login;
