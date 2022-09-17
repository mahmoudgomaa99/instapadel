import {EntityKeys} from '../schema';
import {createSlice, isAnyOf} from '@reduxjs/toolkit';
import * as thunks from './thunks';
import {RootState} from '../store';

const initialValues = {
  countries: [],
};

const slice = createSlice({
  name: EntityKeys.CONSTANTS,
  initialState: initialValues,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(thunks.doFetchCountries.fulfilled, (state, action) => {
      const countries = action?.payload?.data?.data?.map((item: any) => {
        return {label: item.country, value: item.country,color:"white"};
      });      
      state.countries = countries;
    });
  },
});

const Constant = {
  thunks,
  slice,
};

export const selectCountries = (state: RootState) => state.constants.countries;
export default Constant;
