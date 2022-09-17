import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import NavigationHandler from 'src/navigation/';
import COLORS from 'values/colors';
import {store, useAppDispatch} from 'src/redux/store';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import {toastConfig} from 'src/config/Toast';
import Constant from 'redux/constants';
import Profile from 'redux/profile';

const App = () => {
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

export default App;
