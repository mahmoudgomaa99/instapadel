import {createAsyncThunk} from '@reduxjs/toolkit';
import TournmentApi from './API';

export const doCreateTournment = createAsyncThunk<any, any, any>(
  'tournments/create_tournment',
  async (data, thunkAPI) => {
    try {
      const response = await TournmentApi.createTournment(data);
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

export const doCheckCode = createAsyncThunk<any, any, any>(
  'tournments/check_code',
  async (data, thunkAPI) => {
    try {
      const response = await TournmentApi.checkCode(data);
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

export const doJoinTournment = createAsyncThunk<any, any, any>(
  'tournments/join_tournment',
  async (data, thunkAPI) => {
    try {
      const response = await TournmentApi.joinTournment(data);
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

export const doGetTournments = createAsyncThunk<any, any, any>(
  'tournments/get_tournments',
  async (data, thunkAPI) => {
    try {
      const response = await TournmentApi.getTournments(data);
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
  doCreateTournment,
  doGetTournments,
  doCheckCode,
  doJoinTournment,
};

export default thunks;
