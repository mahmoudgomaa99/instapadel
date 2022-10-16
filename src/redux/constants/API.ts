import axios from 'axios';

const getCountries = () =>
  axios.get('https://countriesnow.space/api/v0.1/countries');

const getLevels = () => axios.get('/user/v1/get-level');
const getLocations = () => axios.get('/user/v1/get-location');
const getTypes = () => axios.get('/user/v1/get-participant');

const ConstanApi = {
  getCountries,
  getLevels,
  getLocations,
  getTypes,
};

export default ConstanApi;
