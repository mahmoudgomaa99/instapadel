import {Platform, View} from 'react-native';
import React from 'react';
import InputView from 'components/molecules/Input';
import {RegisterSchema} from 'src/formik/schema';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {selectMyProfile} from 'redux/profile';
import Picker from 'components/molecules/Picker';
import {genders} from 'src/screens/Auth/PersonalInfo/data';
import {dateFormatterForMinDatePicker} from 'utils/date_formatter';
import DateTimePicker from 'components/molecules/DatePicker';

const Form = ({source}: any) => {
  const myProfile = useSelector(selectMyProfile);

  return (
    <Formik
      initialValues={{...myProfile, birthdate: new Date(myProfile?.birthdate)}}
      validationSchema={RegisterSchema}
      onSubmit={(values, action) => {}}>
      {(props: any) => (
        <KeyboardAwareScrollView scrollEnabled={true}>
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
              maximumDate={new Date(dateFormatterForMinDatePicker(new Date()))}
              stylingProp={{
                flex: 1,
              }}
            />
          </View>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
};

export default Form;
