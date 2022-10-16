import React, {useCallback, useEffect} from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NeedsInternetConnection from 'components/organisms/NeedsInternetConnection';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectCurrentUser, selectIsVerified} from 'src/redux/user';
import COLORS from 'values/colors';
import Constant, {selectCountries, selectLocations} from 'redux/constants';
import {useAppDispatch} from 'redux/store';
import Profile, {
  selectIsCompletedProfile,
  selectNumberOfProfileEdits,
} from 'redux/profile';

const NavigationHandler = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isVerified = useSelector(selectIsVerified);
  const isProfileCompleted = useSelector(selectIsCompletedProfile);
  const dispatch = useAppDispatch();
  const numberOfProfileEdits = useSelector(selectNumberOfProfileEdits);
  const locations = useSelector(selectLocations) || [];
  const countries = useSelector(selectCountries) || [];

  useEffect(() => {
    dispatch(Profile.thunks.doGetProfile({}));
    if (countries.length === 0 || locations.length === 0) {
      dispatch(Constant.thunks.doFetchCountries({}));
      dispatch(Constant.thunks.doFetchLevels({}));
      dispatch(Constant.thunks.doFetchLocations({}));
      dispatch(Constant.thunks.doFetchParticpantTypes({}));
    }
  }, [currentUser, dispatch, numberOfProfileEdits]);

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
