import * as Yup from 'yup';

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const includeDigRegExp = /([0-9]+)/;
const includeCharRegExp = /([A-z]+)/;
const EmailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .required('password is Required')
    .min(8, 'password must be at least 8 characters')
    .matches(includeDigRegExp, 'password must include at least one number')
    .matches(includeCharRegExp, 'password must include at least one character'),
  phone_number: Yup.string()
    .required('Phone Number is Required')
    .matches(phoneRegExp, 'This is not a valid phone number.'),
});

export const RegisterSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is Required')
    .min(8, 'password must be at least 8 characters')
    .matches(includeDigRegExp, 'password must include at least one number')
    .matches(includeCharRegExp, 'password must include at least one character'),
  phone_number: Yup.string()
    .required('Phone Number is Required')
    .matches(phoneRegExp, 'This is not a valid Phone Number.'),
  email: Yup.string()
    .required('Email Address is Required')
    .matches(EmailReg, 'This is not a valid email.'),
  last_name: Yup.string().required('Last Name is Required'),
  first_name: Yup.string().required('First Name is Required'),
  user_name: Yup.string().required('Username is Required'),
  password_confirmation: Yup.string()
    .required('Confirm password is Required')
    .oneOf([Yup.ref('password'), null], 'The passwords do not match.'),
});

export const ForgetSchema = Yup.object().shape({
  phone_number: Yup.string()
    .required('Phone Number is Required')
    .matches(phoneRegExp, 'This is not a valid phone number.'),
});

export const NewPasswordSchema = Yup.object().shape({
  conf_password: Yup.string()
    .required('Confirm password is Required')
    .oneOf([Yup.ref('password'), null], 'The passwords do not match.'),
  password: Yup.string()
    .required('password is Required')
    .min(8, 'password must be at least 8 characters')
    .matches(includeDigRegExp, 'password must include at least one number')
    .matches(includeCharRegExp, 'password must include at least one character'),
});

export const personalInfoSchema = Yup.object().shape({
  gender: Yup.string()
    .required('Gender is Required')
    .typeError('Gender is Required'),
  level: Yup.string()
    .required('Level is Required')
    .typeError('Level is Required'),
});

export const CreateTournmentSecondStepSchema = Yup.object().shape({
  name: Yup.string().required('Tournment Name is Required'),
  location: Yup.string()
    .required('Location is Required')
    .typeError('Location is Required'),
});

export const CreateTournmentSchema = Yup.object().shape({
  participants_type: Yup.string()
    .required('Participants Type is Required')
    .typeError("Participants Type is Required'"),
  no_of_players: Yup.number()
    .required('Number of Players is Required')
    .typeError('Number of Players is Required'),
  levels_of_players: Yup.string()
    .required('Participants Level is Required')
    .typeError('Participants Level is Required'),
  description: Yup.string().required('Description is Required'),
});

export const EditProfileSchema = Yup.object().shape({
  phone_number: Yup.string()
    .required('Phone Number is Required')
    .matches(phoneRegExp, 'This is not a valid Phone Number.'),
  email: Yup.string()
    .required('Email Address is required')
    .matches(EmailReg, 'This is not a valid email.'),
  last_name: Yup.string().required('Last name is Required'),
  first_name: Yup.string().required('First name is Required'),
  user_name: Yup.string().required('Username is Required'),
  gender: Yup.string()
    .required('Gender is Required')
    .typeError('Gender is Required'),
  level: Yup.string()
    .required('Level is Required')
    .typeError('Level is Required'),
  nationality: Yup.string()
    .required('Nationality is Required')
    .typeError('Nationality is Required'),
});
