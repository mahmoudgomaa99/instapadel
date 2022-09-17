import axios from 'axios';

const getProfile = () => axios.get('/user/v1/profile');
const completeProfile = (data: any) =>
  axios.post('/user/v1/personal_info', data);

const ProfileApi = {
  getProfile,
  completeProfile,
};

export default ProfileApi;
