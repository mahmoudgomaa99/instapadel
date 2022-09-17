/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

Navigation.registerComponent('com.myApp.WelcomeScreen', () =>
  gestureHandlerRootHOC(App),
);

AppRegistry.registerComponent(appName, () => App);
