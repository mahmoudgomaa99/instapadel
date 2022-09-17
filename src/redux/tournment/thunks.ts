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

const thunks = {doCreateTournment};

export default thunks;
