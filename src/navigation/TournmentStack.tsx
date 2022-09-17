import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNav from './BottomNav';
import CreateTournment from 'src/screens/App/Tournments/Create';
import JoinTournment from 'src/screens/App/Tournments/Join';
import {styles} from './BottomNav';
import {ImageBackground} from 'react-native';
import {images} from 'src/assets/images';
import COLORS from 'values/colors';

export type TTournmentStack = {
  CreateTournment: undefined;
  JoinTournment: undefined;
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
      </Stack.Navigator>
    </ImageBackground>
  );
};

export default TournmentStack;
