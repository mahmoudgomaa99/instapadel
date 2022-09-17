import {EntityKeys} from '../schema';
import {createSlice, isAnyOf} from '@reduxjs/toolkit';
import thunks from './thunks';
import {RootState} from '../store';
import Toast from 'react-native-toast-message';

type TInitialValues = {
  isVerified: boolean;
  currentUser?: {
    avatar: string;
    device_token?: string;
    email: string;
    first_name: string;
    id: number;
    last_name: string;
    nationality: string;
    new_user: boolean;
    phone_number: string;
    remember_token: string;
    role: {
      id: number;
      name: string;
    };
    user_name: string;
    mobile_verified_at?: string;
  };
};

const initialValues: TInitialValues = {
  currentUser: undefined,
  isVerified: false,
};

const slice = createSlice({
  name: EntityKeys.USERS,
  initialState: initialValues,
  reducers: {
    logout: () => initialValues,
  },
  extraReducers: builder => {
    builder.addCase(thunks.doSignIn.fulfilled, (state, action) => {
      if (action.payload.data.status === 0) {
        Toast.show({type: 'error', text2: action.payload.data.message});
        return;
      }

      if (action.payload.data.data) {
        if (action.payload.data.data.mobile_verified_at) {
          state.isVerified = true;
        }
      }
      state.currentUser = action.payload.data.data;
    });
    builder.addCase(thunks.doSignIn.rejected, (state, action) => {
      Toast.show({
        type: 'error',
        text2: 'The phone number or password is incorrect',
      });
    });
    builder.addCase(thunks.doSignup.fulfilled, (state, action) => {
      state.currentUser = action.payload.data.data;
    });
    builder.addCase(thunks.doSignup.rejected, (state, action: any) => {
      if (action?.payload?.errors?.phone_number[0] === 'validation.unique') {
        Toast.show({
          type: 'error',
          text2: 'The Phone Number has already been taken.',
        });
        return;
      }
      if (action?.payload?.errors?.email[0] === 'validation.unique') {
        Toast.show({
          type: 'error',
          text2: 'The Email has already been taken.',
        });
        return;
      }
      if (action?.payload?.errors?.user_name[0] === 'validation.unique') {
        Toast.show({
          type: 'error',
          text2: 'The Username has already been taken.',
        });
        return;
      }
    });
    builder.addCase(thunks.doVerifyNumberReg.fulfilled, (state, action) => {
      if (action?.payload?.data?.status === 1) {
        state.currentUser = action.payload.data.data;
        state.isVerified = true;
      }
    });
    builder.addCase(thunks.doVerifyNumberReg.rejected, (state, action) => {
      Toast.show({type: 'error', text2: 'The code is incorrect'});
    });
    builder.addCase(thunks.doSendCode.rejected, (state, action) => {
      Toast.show({
        type: 'error',
        text2: 'The selected phone number is invalid.',
      });
    });
    builder.addCase(thunks.doSendCode.fulfilled, (state, action) => {});
    builder.addCase(
      thunks.doVerifyNumberForget.fulfilled,
      (state, action) => {},
    );
    builder.addCase(thunks.doVerifyNumberForget.rejected, (state, action) => {
      Toast.show({type: 'error', text2: 'The code is incorrect'});
    });
    builder.addCase(thunks.doChangePassword.rejected, (state, action) => {
      Toast.show({
        type: 'error',
        text2: 'something went wrong!, please try again.',
      });
    });
  },
});

const User = {
  thunks,
  slice,
  logout: slice.actions.logout,
};

export const selectCurrentUser = (state: RootState) => state.users.currentUser;
export const selectIsVerified = (state: RootState) => state.users.isVerified;

export default User;
