import {createAsyncThunk} from '@reduxjs/toolkit';
import ProfileApi from './API';

export const doGetProfile = createAsyncThunk<any, any, any>(
  'users/get_profile',
  async (_, thunkAPI) => {
    try {
      const response = await ProfileApi.getProfile();
      return {
        data: response.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const doCompleteProfile = createAsyncThunk<any, any, any>(
  'users/complete_profile',
  async (data, thunkAPI) => {
    try {
      const response = await ProfileApi.completeProfile(data);
      return {
        data: response.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const doEditProfile = createAsyncThunk<any, any, any>(
  'users/edit_profile',
  async (data, thunkAPI) => {
    try {
      const response: any = await ProfileApi.EditProfile(data);
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
  doGetProfile,
  doCompleteProfile,
  doEditProfile,
};

export default thunks;
