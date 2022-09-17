import {EntityKeys} from '../schema';
import {createSlice, isAnyOf} from '@reduxjs/toolkit';
import thunks from './thunks';
import {RootState} from '../store';
import Toast from 'react-native-toast-message';

type TInitialValues = {
  step2?: {
    name: string;
    start_date: Date;
    end_date: Date;
    start_time: Date;
    end_time: Date;
    location: string;
    logo_img: Object;
  };
};

const initialValues: TInitialValues = {step2: undefined};

const slice = createSlice({
  name: EntityKeys.Tournments,
  initialState: initialValues,
  reducers: {
    setStep2: (state, action) => {
      state.step2 = action.payload;
    },
    resetStep2: (state) => {
      state.step2 = undefined;
    },
  },
  extraReducers: builder => {
    builder.addCase(thunks.doCreateTournment.rejected, (state, action) => {
    });
    builder.addCase(thunks.doCreateTournment.fulfilled, (state, action) => {
      state.step2 = undefined;
      Toast.show({type: 'success', text2: 'Tournament Created Successfully'});
    });
  },
});

const Tournment = {
  thunks,
  slice,
  setStep2: slice.actions.setStep2,
  resetStep2: slice.actions.resetStep2,
};

export const selectStep2 = (state: RootState) => state.tournments.step2;

export default Tournment;
