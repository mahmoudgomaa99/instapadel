import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNav from './BottomNav';
import CreateTournment from 'src/screens/App/Tournments/Create';
import JoinTournment from 'src/screens/App/Tournments/Join';
import {styles} from './BottomNav';
import {ImageBackground} from 'react-native';
import {images} from 'src/assets/images';
import COLORS from 'values/colors';
import TournmentDetails from 'src/screens/App/Tournments/Details';
import Waiting from 'src/screens/App/Tournments/Details/WaitingForApproval';

export type TTournmentStack = {
  CreateTournment: undefined;
  JoinTournment: undefined;
  tournmentDetails: undefined;
  waiting: undefined;
};

const Stack = createNativeStackNavigator<TTournmentStack>();
const TournmentStack = () => {
  return (
    <ImageBackground source={images.home.background} style={styles.container}>
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen
          name="CreateTournment"
          component={CreateTournment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="JoinTournment"
          component={JoinTournment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="tournmentDetails"
          component={TournmentDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="waiting"
          component={Waiting}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </ImageBackground>
  );
};

export default TournmentStack;
