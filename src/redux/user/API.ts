import axios from 'axios';
import {api} from 'redux/_axios';

const signIn = (data: any) => axios.post('/user/v1/login', data);
const signup = (data: any) => api.post('/user/v1/register', data);

const verifyRegister = (data: any) =>
  axios.post('/user/v1/verify-mobile', data);

const sendCode = (data: any) => axios.post('/user/v1/forget-password', data);
const verifyForget = (data: any) => axios.post('/user/v1/verify-code', data);
const changePassword = (data: any) =>
  axios.post('/user/v1/change-password', data);

const UserAPI = {
  signIn,
  signup,
  verifyRegister,
  verifyForget,
  sendCode,
  changePassword,
};

export default UserAPI;
