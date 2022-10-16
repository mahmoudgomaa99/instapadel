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
  tournments?: {
    privacy?: number;
    id: number;
    uuid: string;
    code: string;
    name: string;
    is_public?: number;
    format: string;
    start_date: string;
    end_date: string;
    start_time: string;
    end_time: string;
    location: string;
    logo: string;
    tournament_type: string;
    participants_type: string;
    no_of_players: number;
    levels_of_players: string;
    submission_deadline: string;
    has_prize: number;
    prize_value: string;
    description: string;
    organizer: {
      id: number;
      user_name: string;
      user_avatar: string;
    };
  }[];
  codeValid: boolean;
};

const initialValues: TInitialValues = {
  step2: undefined,
  tournments: [],
  codeValid: false,
};

const slice = createSlice({
  name: EntityKeys.Tournments,
  initialState: initialValues,
  reducers: {
    setStep2: (state, action) => {
      state.step2 = action.payload;
    },
    resetStep2: state => {
      state.step2 = undefined;
    },
  },
  extraReducers: builder => {
    builder.addCase(thunks.doCreateTournment.rejected, (state, action) => {});
    builder.addCase(thunks.doCreateTournment.fulfilled, (state, action) => {
      state.step2 = undefined;
      Toast.show({type: 'success', text2: 'Tournament Created Successfully'});
    });
    builder.addCase(thunks.doGetTournments.fulfilled, (state, action) => {
      state.tournments = action.payload?.data?.data;
    });
    builder.addCase(thunks.doGetTournments.rejected, (state, action) => {});
    builder.addCase(thunks.doCheckCode.fulfilled, (state, action) => {
      if (action.payload.data.message === 'Invalid Code') {
        Toast.show({
          type: 'error',
          text2: action.payload.data.message,
        });
        return;
      }
      state.codeValid = true;
      Toast.show({
        type: 'success',
        text2: action.payload.data.message,
      });
    });
    builder.addCase(thunks.doCheckCode.rejected, (state, action) => {});
    builder.addCase(thunks.doJoinTournment.rejected, (state, action) => {
      Toast.show({
        type: 'error',
        text2: "Can't Find A User with the Entered Username",
      });
    });
    builder.addCase(thunks.doJoinTournment.fulfilled, (state, action) => {});
  },
});

const Tournment = {
  thunks,
  slice,
  setStep2: slice.actions.setStep2,
  resetStep2: slice.actions.resetStep2,
};

export const selectStep2 = (state: RootState) => state.tournments.step2;
export const selectTournments = (state: RootState) =>
  state.tournments.tournments;
export const selectCodeValid = (state: RootState) => state.tournments.codeValid;
export default Tournment;
