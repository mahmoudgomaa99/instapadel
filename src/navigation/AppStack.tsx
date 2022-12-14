import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from 'src/screens/App/Home';
import BottomNav, {styles} from './BottomNav';
import TournmentStack from './TournmentStack';
import ProfileScreens from 'src/screens/App/Profile';
import Chat from 'src/screens/App/Chat';
import FAQS from 'src/screens/App/FAQS';

export type TAuthStack = {
  home: undefined;
  tournment: undefined;
  profile: undefined;
  chat: undefined;
  faqs: undefined;
  editProfile: undefined;
  change_password: undefined;
};

const Stack = createNativeStackNavigator<TAuthStack>();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={BottomNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="tournment"
        component={TournmentStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="profile"
        component={ProfileScreens.Display}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="chat"
        component={Chat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="faqs"
        component={FAQS}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="editProfile"
        component={ProfileScreens.Edit}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="change_password"
        component={ProfileScreens.ChangePassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
