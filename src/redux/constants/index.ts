import {EntityKeys} from '../schema';
import {createSlice, isAnyOf} from '@reduxjs/toolkit';
import * as thunks from './thunks';
import {RootState} from '../store';

const initialValues = {
  countries: [],
  levels: [],
  locations: [],
  types: [],
};

const slice = createSlice({
  name: EntityKeys.CONSTANTS,
  initialState: initialValues,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(thunks.doFetchCountries.fulfilled, (state, action) => {
      const countries = action?.payload?.data?.data?.map((item: any) => {
        return {label: item.country, value: item.country, color: 'white'};
      });
      state.countries = countries;
    });
    builder.addCase(thunks.doFetchLevels.fulfilled, (state, action) => {
      const refactoredLevels = action.payload.data.data.map((item: any) => {
        item.name = 'Level ' + item.name;
        return item;
      });
      state.levels = refactoredLevels;
    });
    builder.addCase(thunks.doFetchLocations.fulfilled, (state, action) => {
      state.locations = action.payload.data.data;
    });
    builder.addCase(
      thunks.doFetchParticpantTypes.fulfilled,
      (state, action) => {
        state.types = action.payload.data.data;
      },
    );
  },
});

const Constant = {
  thunks,
  slice,
};

export const selectCountries = (state: RootState) => state.constants.countries;
export const selectLevels = (state: RootState) => state.constants.levels;
export const selectLocations = (state: RootState) => state.constants.locations;
export const selectTypes = (state: RootState) => state.constants.types;

export default Constant;
