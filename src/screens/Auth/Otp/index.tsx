import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {images} from 'src/assets/images';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CountDownTimer from 'react-native-countdown-timer-hooks';
import Button from 'components/molecules/Button';
import COLORS from 'values/colors';
import {MarginsAndPaddings} from 'values/Dimensions';
import Fonts from 'values/fonts';
import {useAppDispatch} from 'redux/store';
import User, {selectCurrentUser} from 'redux/user';
import {unwrapResult} from '@reduxjs/toolkit';
import {useLoadingSelector} from 'redux/selectors';
import {useSelector} from 'react-redux';
import Lottie from 'lottie-react-native';

const CELL_COUNT = 4;

const OtpScrenn = () => {
  const route = useRoute();
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const {phone_number, type}: any = route.params || {};
  const PhoneNumber = useSelector(selectCurrentUser)?.phone_number;
  const [value, setValue] = useState('');
  const [timerEnd, setTimerEnd] = useState(false);
  const refTimer: any = useRef();
  const isLoading = useLoadingSelector(User.thunks.doVerifyNumberReg);
  const isLoadingForg = useLoadingSelector(User.thunks.doVerifyNumberForget);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const onSubmitPressed = () => {
    if (type === 'forget') {
      dispatch(
        User.thunks.doVerifyNumberForget({
          phone_number: phone_number,
          code: value,
        }),
      )
        .then(unwrapResult)
        .then(res => {
          navigation.navigate('new_password', {
            phone_number,
          });
        })
        .catch(e => console.log(e));
      return;
    } else {
      dispatch(
        User.thunks.doVerifyNumberReg({phone_number: PhoneNumber, code: value}),
      )
        .then(unwrapResult)
        .then(res => {})
        .catch(e => console.log(e));
    }
  };
  const onResendPressed = () => {
    setTimeout(() => setTimerEnd(false), 500);
    refTimer.current.resetTimer();
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.lockWrapper}>
        <Lottie
          source={images.auth.otp.lock_animation}
          autoPlay
          loop
        />
      </View>
      <Text style={styles.checkYourPhoneText}>Check Your Phone</Text>
      <Text style={styles.sentText}>{`An OTP code is sent to ${
        phone_number || PhoneNumber
      }`}</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={{marginTop: 50}}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <View style={styles.counterWrapper}>
        {!timerEnd && <Text style={styles.counterText}>Time Left: </Text>}
        <CountDownTimer
          ref={refTimer}
          timestamp={120}
          timerCallback={() => setTimerEnd(true)}
          textStyle={styles.counterText}
        />
      </View>
      <View style={styles.bottomWrapper}>
        <TouchableOpacity disabled={!timerEnd} onPress={onResendPressed}>
          <Text
            style={
              timerEnd
                ? styles.resendText
                : {
                    color: COLORS.grey,
                    marginBottom: MarginsAndPaddings.l,
                    textDecorationColor: COLORS.white,
                    fontSize: 16,
                    fontFamily: Fonts.RobotoBold,
                    textDecorationLine: 'underline',
                    textDecorationStyle: 'solid',
                  }
            }>
            Resend Code
          </Text>
        </TouchableOpacity>
        <Button
          type="secondry"
          label="SUBMIT"
          style={styles.button}
          onPress={onSubmitPressed}
          isLoading={isLoading || isLoadingForg}
        />
      </View>
    </SafeAreaView>
  );
};

export default OtpScrenn;
