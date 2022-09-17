import {Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import InputView from 'components/molecules/Input';
import {Formik} from 'formik';
import Button from 'components/molecules/Button';
import {NewPasswordSchema} from 'src/formik/schema';
import {useNavigation, useRoute} from '@react-navigation/native';
import {new_password_initial_values} from 'src/formik/initial_values';
import {useLoadingSelector} from 'redux/selectors';
import {useAppDispatch} from 'redux/store';
import User from 'redux/user';
import {unwrapResult} from '@reduxjs/toolkit';

const NewPassword = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const isLoading = useLoadingSelector(User.thunks.doChangePassword);
  const {phone_number}: any = useRoute().params;
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.enterYourNumText}>Enter Your New Password</Text>
      <View style={styles.line} />
      <Formik
        initialValues={new_password_initial_values}
        validationSchema={NewPasswordSchema}
        onSubmit={(values, action) => {
          dispatch(
            User.thunks.doChangePassword({
              phone_number,
              new_password: values.password,
            }),
          )
            .then(unwrapResult)
            .then(res => {
              navigation.reset({index: 0, routes: [{name: 'login'}]});
            });
        }}>
        {(props: any) => (
          <>
            <InputView
              {...props}
              name="password"
              title="Password"
              placeholder=""
              containerStyle={styles.input}
              titleStyling={[styles.inputTitle, {marginTop: 50}]}
              secureTextEntry={true}
            />
            <InputView
              {...props}
              name="conf_password"
              title="Confirm Password"
              placeholder=""
              containerStyle={styles.input}
              titleStyling={styles.inputTitle}
              secureTextEntry={true}
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

export default NewPassword;
