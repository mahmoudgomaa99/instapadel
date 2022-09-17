import UserAPI from './API';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const doSignIn = createAsyncThunk<any, any, any>(
  'users/login',
  async (data, thunkAPI) => {
    try {
      const response = await UserAPI.signIn(data);
      return {
        data: response.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const doSignup = createAsyncThunk<any, any, any>(
  'users/signup',
  async (data, thunkAPI) => {
    try {
      const response: any = await UserAPI.signup(data);
      if (response?.data?.status !== 1) {
        throw response?.data;
      }
      return {
        data: response?.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const doVerifyNumberReg = createAsyncThunk<any, any, any>(
  'users/verify_number_reg',
  async (data, thunkAPI) => {
    try {
      const response = await UserAPI.verifyRegister(data);
      if (response?.data?.status !== 1) {
        throw response?.data;
      }
      return {
        data: response.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const doSendCode = createAsyncThunk<any, any, any>(
  'users/send_code',
  async (data, thunkAPI) => {
    try {
      const response = await UserAPI.sendCode(data);
      if (response?.data?.status !== 1) {
        throw response?.data;
      }
      return {
        data: response.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const doVerifyNumberForget = createAsyncThunk<any, any, any>(
  'users/verify_number_forget',
  async (data, thunkAPI) => {
    try {
      const response = await UserAPI.verifyForget(data);
      if (response?.data?.status !== 1) {
        throw response?.data;
      }
      return {
        data: response.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const doChangePassword = createAsyncThunk<any, any, any>(
  'users/change_password',
  async (data, thunkAPI) => {
    try {
      const response = await UserAPI.changePassword(data);
      if (response?.data?.status !== 1) {
        throw response?.data;
      }
      return {
        data: response.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const thunks = {
  doSignIn,
  doSignup,
  doVerifyNumberReg,
  doSendCode,
  doVerifyNumberForget,
  doChangePassword,
};

export default thunks;
