import axios from 'axios';

const createTournment = (data: any) => axios.post('/user/v1/tournament', data);

const TournmentApi = {createTournment};

export default TournmentApi;
