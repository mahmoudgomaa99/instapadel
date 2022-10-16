import {createAsyncThunk} from '@reduxjs/toolkit';
import ConstanApi from './API';

export const doFetchCountries = createAsyncThunk<any, any, any>(
  'constant/countries',
  async (_, thunkAPI) => {
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

export const doFetchLevels = createAsyncThunk<any, any, any>(
  'constant/levels',
  async (_, thunkAPI) => {
    try {
      const response = await ConstanApi.getLevels();
      return {
        data: response.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const doFetchLocations = createAsyncThunk<any, any, any>(
  'constant/locations',
  async (_, thunkAPI) => {
    try {
      const response = await ConstanApi.getLocations();
      return {
        data: response.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const doFetchParticpantTypes = createAsyncThunk<any, any, any>(
  'constant/types',
  async (_, thunkAPI) => {
    try {
      const response = await ConstanApi.getTypes();
      return {
        data: response.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
