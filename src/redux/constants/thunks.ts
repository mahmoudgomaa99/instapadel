import {createAsyncThunk} from '@reduxjs/toolkit';
import ConstanApi from './API';

export const doFetchCountries = createAsyncThunk<any, any, any>(
  'constant/countries',
  async (data, thunkAPI) => {
    try {
      const response = await ConstanApi.getCountries();
      return {
        data: response.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
