import axios from 'axios';
import {api} from 'redux/_axios';

const getProfile = () => axios.get('/user/v1/profile');
const completeProfile = (data: any) => axios.post('/user/v1/profile', data);
const EditProfile = (data: any) => api.post('/user/v1/profile', data);

const ProfileApi = {
  getProfile,
  completeProfile,
  EditProfile,
};

export default ProfileApi;
