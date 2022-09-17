import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from 'src/screens/Auth/Login';
import COLORS from 'values/colors';
import Signup from 'src/screens/Auth/Signup';
import ForgetPassword from 'src/screens/Auth/ForgetPassword';
import OtpScrenn from 'src/screens/Auth/Otp';
import NewPassword from 'src/screens/Auth/ForgetPassword/New_Password';
import PersonalInfo from 'src/screens/Auth/PersonalInfo';
import {useSelector} from 'react-redux';
import {selectCurrentUser, selectIsVerified} from 'redux/user';
import {selectIsCompletedProfile} from 'redux/profile';

export type TAuthStack = {
  login: undefined;
  signup: undefined;
  forget: undefined;
  otp_register: undefined;
  otp_forget: undefined;
  new_password: undefined;
  personal_info: undefined;
};

const Stack = createNativeStackNavigator<TAuthStack>();

const options = {
  headerShown: true,
  headerStyle: {backgroundColor: COLORS.backGround},
  title: '',
  headerTintColor: COLORS.white,
  headerBackTitleStyle: {fontSize: 20},
};

const AuthStack = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isProfileCompleted = useSelector(selectIsCompletedProfile);
  console.log(isProfileCompleted);

  return (
    <Stack.Navigator
      initialRouteName={
        !currentUser
          ? 'login'
          : !isProfileCompleted
          ? 'personal_info'
          : 'otp_register'
      }
      screenOptions={{contentStyle: {backgroundColor: COLORS.backGround}}}>
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup"
        component={Signup}
        options={{
          ...options,
          headerBackTitle: 'Register New Account',
        }}
      />
      <Stack.Screen
        name="forget"
        component={ForgetPassword}
        options={{
          ...options,
          headerBackTitle: 'Forgot Password',
        }}
      />
      <Stack.Screen
        name="otp_register"
        component={OtpScrenn}
        options={{...options, headerBackTitle: 'Register New Account'}}
      />
      <Stack.Screen
        name="otp_forget"
        component={OtpScrenn}
        options={{...options, headerBackTitle: 'Forgot Password'}}
      />
      <Stack.Screen
        name="new_password"
        component={NewPassword}
        options={{...options, headerBackTitle: 'Forgot Password'}}
      />
      <Stack.Screen
        name="personal_info"
        component={PersonalInfo}
        options={{...options, headerBackTitle: 'Personal Information'}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
