import axios from 'axios';

const getCountries = () =>
  axios.get('https://countriesnow.space/api/v0.1/countries');

const ConstanApi = {
  getCountries,
};

export default ConstanApi;
