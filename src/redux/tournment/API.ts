import axios from 'axios';

const createTournment = (data: any) => axios.post('/user/v1/tournament', data);
const getTournments = ({
  locations,
  levels,
}: {
  locations: any[];
  levels: any[];
}) => {
  let locationQuery: string = '';
  let levelsQuery: string = '';
  locations.map((item, index) => {
    locationQuery =
      locationQuery + (index === 0 ? '' : '&') + `location[${index}]=${item}`;
  });
  levels.map((item, index) => {
    levelsQuery = levelsQuery + '&' + `level_id[${index}]=${item}`;
  });
  return axios.get(
    `/user/v1/tournament?${locationQuery || `location[0]=`}${
      levelsQuery || '&level_id[0]='
    }`,
  );
};

const checkCode = (data: any) =>
  axios.post('/user/v1/check-code-of-tournament', data);

const joinTournment = (data: any) =>
  axios.post('/user/v1/join-tournament', data);

const TournmentApi = {createTournment, getTournments, checkCode, joinTournment};

export default TournmentApi;
