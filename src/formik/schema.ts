import * as Yup from 'yup';

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const includeDigRegExp = /([0-9]+)/;
const includeCharRegExp = /([A-z]+)/;
const EmailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .required('password is required')
    .min(8, 'password must be at least 8 characters')
    .matches(includeDigRegExp, 'password must include at least one number')
    .matches(includeCharRegExp, 'password must include at least one character'),
  phone_number: Yup.string()
    .required('Phone Number is required')
    .matches(phoneRegExp, 'This is not a valid phone number.'),
});

export const RegisterSchema = Yup.object().shape({
  password: Yup.string()
    .required('password is required')
    .min(8, 'password must be at least 8 characters')
    .matches(includeDigRegExp, 'password must include at least one number')
    .matches(includeCharRegExp, 'password must include at least one character'),
  phone_number: Yup.string()
    .required('Phone Number is required')
    .matches(phoneRegExp, 'This is not a valid Phone Number.'),
  email: Yup.string()
    .required('Email Address is required')
    .matches(EmailReg, 'This is not a valid email.'),
  last_name: Yup.string().required('Last name is required'),
  first_name: Yup.string().required('First name is required'),
  user_name: Yup.string().required('Username is required'),
  password_confirmation: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'The passwords do not match.'),
});

export const ForgetSchema = Yup.object().shape({
  phone_number: Yup.string()
    .required('Phone Number is required')
    .matches(phoneRegExp, 'This is not a valid phone number.'),
});

export const NewPasswordSchema = Yup.object().shape({
  conf_password: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'The passwords do not match.'),
  password: Yup.string()
    .required('password is required')
    .min(8, 'password must be at least 8 characters')
    .matches(includeDigRegExp, 'password must include at least one number')
    .matches(includeCharRegExp, 'password must include at least one character'),
});

export const personalInfoSchema = Yup.object().shape({
  gender: Yup.string()
    .required('Gender is required')
    .typeError('Gender is required'),
});

export const CreateTournmentSecondStepSchema = Yup.object().shape({
  name: Yup.string().required('Tournment Name is required'),
  location: Yup.string()
    .required('Location is required')
    .typeError('Location is required'),
});

export const CreateTournmentSchema = Yup.object().shape({
  participants_type: Yup.string()
    .required('Participants Type is required')
    .typeError("Participants Type is required'"),
  no_of_players: Yup.number()
    .required('Number of Players is required')
    .typeError('Number of Players is required'),
  levels_of_players: Yup.string()
    .required('Participants Level is required')
    .typeError('Participants Level is required'),
  description: Yup.string().required('Description is required'),
});
