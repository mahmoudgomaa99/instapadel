import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import InputView from 'components/molecules/Input';
import {LoginSchema} from 'src/formik/schema';
import {login_initial_values} from 'src/formik/initial_values';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from 'components/molecules/Button';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from 'redux/store';
import User from 'redux/user';
import useTokensSetter from 'hooks/useTokens/useTokenSetter';
import {useLoadingSelector} from 'redux/selectors';
import {unwrapResult} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {selectIsCompletedProfile} from 'redux/profile';

const LoginForm = ({phone_number}: any) => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const {setTokens} = useTokensSetter();
  const isLoading = useLoadingSelector(User.thunks.doSignIn);
  const isProfileCompleted = useSelector(selectIsCompletedProfile);

  return (
    <Formik
      initialValues={login_initial_values}
      validationSchema={LoginSchema}
      onSubmit={(values, action) => {
        dispatch(User.thunks.doSignIn(values))
          .then(unwrapResult)
          .then(res => {
            if (res.data.status === 0) return;
            if (res.data.data) {
              setTokens('token', res?.data?.data?.remember_token);
              if (!isProfileCompleted) {
                navigation.navigate('personal_info');
                return;
              }
              if (!res.data.data.mobile_verified_at) {
                navigation.navigate('otp_register');
              }
            }
          })
          .catch(e => console.log(e));
      }}>
      {(props: any) => (
        <KeyboardAwareScrollView scrollEnabled={false}>
          <InputView
            {...props}
            name="phone_number"
            title="Phone Number"
            placeholder=""
            keyboardType="phone-pad"
            containerStyle={styles.input}
            titleStyling={styles.inputTitle}
          />
          <InputView
            {...props}
            name="password"
            title="Password"
            placeholder=""
            containerStyle={[styles.input]}
            titleStyling={styles.inputTitle}
            eye={true}
          />
          <TouchableOpacity
            style={styles.forgetTextWrfapper}
            onPress={() => navigation.navigate('forget')}>
            <Text style={styles.forgetText}>Forget Password?</Text>
          </TouchableOpacity>
          <View style={styles.buttonWrapper}>
            <Button
              label="LOGIN"
              type="secondry"
              onPress={props.handleSubmit}
              isLoading={isLoading}
            />
          </View>
          <TouchableOpacity
            style={styles.RegisterTextWrapper}
            onPress={() => navigation.navigate('signup')}>
            <Text style={styles.RegisterText}>REGISTER NOW</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
};

export default LoginForm;
