import {plusDayeDateFormatterForMinDatePicker} from 'utils/date_formatter';

export const login_initial_values = {
  password: '',
  phone_number: '',
};

export const register_initial_values = {
  first_name: '',
  last_name: '',
  user_name: '',
  email: '',
  phone_number: '',
  password: '',
  password_confirmation: '',
};

export const personal_info_initial_values = {
  birthdate: new Date('01/01/2006'),
  gender: '',
  frequency_of_playing: '',
  weight: 78,
  height: 172,
  level: '',
  nationality: '',
};

export const create_form_main_iv = {
  name: '',
  is_public: 1,
  format: '',
  start_date: new Date(),
  end_date: new Date(),
  start_time: new Date(),
  end_time: new Date(),
  location: '',
  logo_img: undefined,
  //step3
  tournament_type: 'Single',
  participants_type: '',
  no_of_players: null,
  levels_of_players: '',
  submission_deadline: new Date(
    plusDayeDateFormatterForMinDatePicker(new Date()),
  ),
  has_prize: 0,
  prize_value: '0',
  description: '',
};

export const second_step_create_form_iv = {
  name: '',
  start_date: new Date(),
  end_date: new Date(plusDayeDateFormatterForMinDatePicker(new Date())),
  start_time: new Date(),
  end_time: new Date(),
  location: '',
};

export const new_password_initial_values = {password: '', conf_password: ''};
