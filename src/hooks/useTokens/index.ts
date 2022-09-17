import useCheckupSetter from './useTokenSetter';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {selectCurrentUser} from '../../redux/user';
import {useSelector} from 'react-redux';
import {TokenKeys} from 'src/redux/_axios';

const useTokens = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {setTokens, resetTokens} = useCheckupSetter();
  const valueUserToken = useSelector(
    (state: any) => state.tokens[TokenKeys.TOKEN],
  );
  const currentUser = useSelector(selectCurrentUser);
  useEffect(() => {
    const checkTokens = async () => {
      const storedValues = await AsyncStorage.multiGet(
        Object.values(TokenKeys),
      );
      storedValues.forEach(([paramKey, paramValue]) =>
        setTokens(paramKey, paramValue),
      );
    };

    checkTokens();
  }, [setTokens]);

  useEffect(() => {
    if (valueUserToken !== undefined) {
      if (valueUserToken && !currentUser) useSelector(selectCurrentUser);
      else setIsLoading(false);
    }
  }, [currentUser, valueUserToken]);

  return {
    isLoading,
  };
};

export default useTokens;
