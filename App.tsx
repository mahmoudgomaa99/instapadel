import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import NavigationHandler from 'src/navigation/';
import COLORS from 'values/colors';
import {store, useAppDispatch} from 'src/redux/store';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import {toastConfig} from 'src/config/Toast';
import CodePush from 'react-native-code-push';

let CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
};

const App = () => {
  useEffect(() => {
    CodePush.sync({
      updateDialog: {title: 'A new update is Available'},
      installMode: CodePush.InstallMode.IMMEDIATE,
    }).catch(e => Toast.show({type: 'error', text2: e}));
  }, []);
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor={COLORS.backGround}
        animated={true}
        barStyle="light-content"
      />
      <NavigationHandler />
      <Toast config={toastConfig} topOffset={70} />
    </Provider>
  );
};

export default CodePush(CodePushOptions)(App);
