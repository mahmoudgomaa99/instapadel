import {Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import InputView from 'components/molecules/Input';
import {Formik} from 'formik';
import Button from 'components/molecules/Button';
import {ForgetSchema} from 'src/formik/schema';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from 'redux/store';
import User from 'redux/user';
import {unwrapResult} from '@reduxjs/toolkit';
import {useLoadingSelector} from 'redux/selectors';

const ForgetPassword = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const isLoading = useLoadingSelector(User.thunks.doSendCode);
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.enterYourNumText}>Enter Your Mobile Number</Text>
      <View style={styles.line} />
      <Formik
        initialValues={{phone_number: ''}}
        validationSchema={ForgetSchema}
        onSubmit={(values, action) => {
          dispatch(User.thunks.doSendCode({phone_number: values.phone_number}))
            .then(unwrapResult)
            .then(res => {
              navigation.navigate('otp_forget', {
                phone_number: values.phone_number,
                type: 'forget',
              });
            })
            .catch(e => console.log(e));
        }}>
        {(props: any) => (
          <>
            <InputView
              {...props}
              name="phone_number"
              title="Phone Number"
              placeholder=""
              keyboardType="phone-pad"
              containerStyle={styles.input}
              titleStyling={styles.inputTitle}
            />
            <View style={styles.bottomWrapper}>
              <Button
                type="secondry"
                label="SUBMIT"
                style={styles.button}
                onPress={props.handleSubmit}
                isLoading={isLoading}
              />
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default ForgetPassword;
