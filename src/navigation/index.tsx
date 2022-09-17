import React, {useCallback, useEffect} from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NeedsInternetConnection from 'components/organisms/NeedsInternetConnection';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectCurrentUser, selectIsVerified} from 'src/redux/user';
import COLORS from 'values/colors';
import Constant from 'redux/constants';
import {useAppDispatch} from 'redux/store';
import Profile, {selectIsCompletedProfile} from 'redux/profile';

const NavigationHandler = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isVerified = useSelector(selectIsVerified);
  const isProfileCompleted = useSelector(selectIsCompletedProfile);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(Constant.thunks.doFetchCountries({}));
    dispatch(Profile.thunks.doGetProfile({}));
  }, [currentUser]);

  const renderSwitch = useCallback(() => {
    if (currentUser && isVerified && isProfileCompleted) {
      return <AppStack />;
    } else return <AuthStack />;
  }, [currentUser]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NeedsInternetConnection>{renderSwitch()}</NeedsInternetConnection>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default NavigationHandler;
