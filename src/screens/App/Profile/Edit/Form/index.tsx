import {Platform, View} from 'react-native';
import React from 'react';
import InputView from 'components/molecules/Input';
import {EditProfileSchema, RegisterSchema} from 'src/formik/schema';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import Profile, {selectMyProfile} from 'redux/profile';
import Picker from 'components/molecules/Picker';
import {frequencies, genders, levels} from 'src/screens/Auth/PersonalInfo/data';
import {dateFormatterForMinDatePicker} from 'utils/date_formatter';
import DateTimePicker from 'components/molecules/DatePicker';
import Scales from './Scales';
import Button from 'components/molecules/Button';
import {useAppDispatch} from 'redux/store';
import {selectCountries} from 'redux/constants';
import {createRequestBody} from '../utils/createReqBody';
import { useLoadingSelector } from 'redux/selectors';

const Form = ({source}: any) => {
  const myProfile = useSelector(selectMyProfile);
  const countries = useSelector(selectCountries);
  const dispatch = useAppDispatch();
  const isLoading=useLoadingSelector(Profile.thunks.doEditProfile)
  return (
    <Formik
      initialValues={{
        ...myProfile,
        birthdate: new Date(
          myProfile?.birthdate === '0000-00-00'
            ? '1991/06/10'
            : myProfile?.birthdate?.replace(/-/g, '/') || '1991/06/10',
        ),
      }}
      validationSchema={EditProfileSchema}
      onSubmit={(values, action) => {
        const body = createRequestBody({
          ...values,
          user_avatar: source?.assets,
        });
        dispatch(Profile.thunks.doEditProfile(body));
      }}>
      {(props: any) => (
        <View style={{height: '73%'}}>
          <KeyboardAwareScrollView
            scrollEnabled={true}
            contentContainerStyle={{paddingBottom: 20}}>
            <View style={[styles.rowWraper, {marginTop: 20}]}>
              <InputView
                {...props}
                name="first_name"
                title="First Name"
                placeholder=""
                containerStyle={styles.rawInput}
                titleStyling={styles.inputTitle}
              />
              <InputView
                {...props}
                name="last_name"
                title="Last Name"
                placeholder=""
                containerStyle={styles.rawInput}
                titleStyling={styles.inputTitle}
              />
            </View>
            <InputView
              {...props}
              name="user_name"
              title="Username"
              placeholder=""
              containerStyle={styles.input}
              titleStyling={styles.inputTitle}
            />
            <InputView
              {...props}
              name="email"
              title="Email Address"
              placeholder=""
              containerStyle={styles.input}
              titleStyling={styles.inputTitle}
            />
            <InputView
              {...props}
              name="phone_number"
              title="Phone Number"
              placeholder=""
              keyboardType="phone-pad"
              containerStyle={styles.input}
              titleStyling={styles.inputTitle}
              editable={false}
            />
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Picker
                {...props}
                name="gender"
                type="secondry"
                data={genders}
                title="Gender"
                required={true}
                stylingProp={{
                  flex: 1.1,
                }}
              />
              <DateTimePicker
                {...props}
                name="birthdate"
                type="secondry"
                title="Birthdate"
                mode="date"
                required={true}
                svgName="calender"
                maximumDate={
                  new Date(dateFormatterForMinDatePicker(new Date()))
                }
                stylingProp={{
                  flex: 1,
                }}
              />
            </View>
            <Picker
              {...props}
              name="level"
              type="secondry"
              data={levels}
              title="Level"
              required
            />
            <Picker
              {...props}
              name="nationality"
              type="secondry"
              data={countries}
              title="Nationality"
              required
            />
            <Picker
              {...props}
              name="frequency_of_playing"
              type="secondry"
              data={frequencies}
              title="Frequency of playing Padel"
            />
            <Scales formProps={props} />
          </KeyboardAwareScrollView>
          <Button
            type="secondry"
            label="SAVE CHANGES"
            onPress={props.handleSubmit}
            isLoading={isLoading}
          />
        </View>
      )}
    </Formik>
  );
};


export default Form;
