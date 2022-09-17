import {EntityKeys} from '../schema';
import {createSlice, isAnyOf} from '@reduxjs/toolkit';
import thunks from './thunks';
import {RootState} from '../store';
import Toast from 'react-native-toast-message';

type TInitialValues = {
  completedProfile: boolean;
  profile?: {
    avatar: string;
    device_token?: string;
    email: string;
    first_name: string;
    id: number;
    last_name: string;
    nationality: string;
    new_user: boolean;
    phone_number: string;
    remember_token: string;
    role: {
      id: number;
      name: string;
    };
    user_name: string;
    mobile_verified_at?: string;
    gender?: string;
    birthdate?: string;
    frequency_of_playing?: string;
    weight?: number;
    height?: number;
    level?: string;
  };
};

const initialValues: TInitialValues = {
  profile: undefined,
  completedProfile: false,
};

const slice = createSlice({
  name: EntityKeys.PROFILE,
  initialState: initialValues,
  reducers: {
    logout: () => initialValues,
  },
  extraReducers: builder => {
    builder.addCase(thunks.doGetProfile.fulfilled, (state, action) => {
      if (action.payload.data.data.gender) {
        state.completedProfile = true;
      }
    });
    builder.addCase(thunks.doGetProfile.rejected, (state, action) => {});
    builder.addCase(thunks.doCompleteProfile.fulfilled, (state, action) => {
      state.completedProfile = true;
    });
    builder.addCase(thunks.doCompleteProfile.rejected, (state, action) => {
      console.log(action);
    });
  },
});

const Profile = {
  thunks,
  slice,
};

export const selectIsCompletedProfile = (state: RootState) =>
  state.profiles.completedProfile;

export default Profile;
