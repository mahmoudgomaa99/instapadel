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

const thunks = {
  doGetProfile,
  doCompleteProfile,
};

export default thunks;
