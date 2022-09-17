import {Platform, View} from 'react-native';
import React, {useRef} from 'react';
import InputView from 'components/molecules/Input';
import {RegisterSchema} from 'src/formik/schema';
import {register_initial_values} from 'src/formik/initial_values';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from 'components/molecules/Button';
import {styles} from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useAppDispatch} from 'redux/store';
import User from 'redux/user';
import {useLoadingSelector} from 'redux/selectors';
import useFormDataCreater from 'hooks/useFormDataCreater';
import {signup_keys} from './data';
import Toast from 'react-native-toast-message';
import axios, {AxiosError} from 'axios';
import BASE_URL from '../../../../../.env.json';
import useTokensSetter from 'hooks/useTokens/useTokenSetter';
import {unwrapResult} from '@reduxjs/toolkit';

const RegisterForm = ({source}: any) => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const {create} = useFormDataCreater();
  const isLoading = useLoadingSelector(User.thunks.doSignup);
  const {setTokens} = useTokensSetter();

  return (
    <Formik
      initialValues={register_initial_values}
      validationSchema={RegisterSchema}
      onSubmit={(values, action) => {
        if (!source) {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'provide a Profile picture please👋',
          });
          return;
        }
        const body = create(signup_keys, {
          ...values,
          user_avatar: {
            uri:
              Platform.OS === 'android'
                ? source.assets[0].uri
                : source.assets[0].uri.replace('file://', ''),
            name: source.assets[0].fileName,
            type: source.assets[0].type,
          },
        });
        dispatch(User.thunks.doSignup(body))
          .then(unwrapResult)
          .then(res => {
            setTokens('token', res?.data?.data?.remember_token);
            navigation.navigate('personal_info');
          })
          .catch(e => console.log(e));
      }}>
      {(props: any) => (
        <KeyboardAwareScrollView scrollEnabled={true}>
          <View style={[styles.rowWraper, {marginTop: 20}]}>
            <InputView
              {...props}
              name="first_name"
              title="First Name"
              placeholder=""
              containerStyle={styles.rawInput}
              titleStyling={styles.inputTitle}
            />
            <InputView
              {...props}
              name="last_name"
              title="Last Name"
              placeholder=""
              containerStyle={styles.rawInput}
              titleStyling={styles.inputTitle}
            />
          </View>
          <InputView
            {...props}
            name="user_name"
            title="Username"
            placeholder=""
            containerStyle={styles.input}
            titleStyling={styles.inputTitle}
          />
          <InputView
            {...props}
            name="email"
            title="Email Address"
            placeholder=""
            containerStyle={styles.input}
            titleStyling={styles.inputTitle}
          />
          <InputView
            {...props}
            name="phone_number"
            title="Phone Number"
            placeholder=""
            keyboardType="phone-pad"
            containerStyle={styles.input}
            titleStyling={styles.inputTitle}
          />
          <View style={styles.rowWraper}>
            <InputView
              {...props}
              name="password"
              title="Password"
              placeholder=""
              containerStyle={styles.rawInput}
              titleStyling={styles.inputTitle}
              secureTextEntry={true}
            />
            <InputView
              {...props}
              name="password_confirmation"
              title="Confirm Password"
              placeholder=""
              containerStyle={styles.rawInput}
              titleStyling={styles.inputTitle}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              label="SUBMIT"
              type="secondry"
              onPress={props.handleSubmit}
              isLoading={isLoading}
            />
          </View>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
};

export default RegisterForm;
