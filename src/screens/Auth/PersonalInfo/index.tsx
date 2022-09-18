import {View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Picker from 'components/molecules/Picker';
import {Formik} from 'formik';
import {frequencies, genders, levels, scales} from './data';
import Svg from 'atoms/Svg';
import MixedText from 'components/molecules/MixedText';
import Counter from 'components/molecules/Counter';
import {styles} from './styles';
import Button from 'components/molecules/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useAppDispatch} from 'redux/store';
import {
  bodyDateFormatter,
  dateFormatterForMinDatePicker,
} from 'src/utils/date_formatter';
import {unwrapResult} from '@reduxjs/toolkit';
import {useLoadingSelector} from 'redux/selectors';
import DateTimePicker from 'components/molecules/DatePicker';
import {useSelector} from 'react-redux';
import {selectCountries} from 'redux/constants';
import {personal_info_initial_values} from 'src/formik/initial_values';
import {personalInfoSchema} from 'src/formik/schema';
import Profile from 'redux/profile';
import {useNavigation} from '@react-navigation/native';
import COLORS from 'values/colors';

const PersonalInfo = () => {
  const dispatch = useAppDispatch();
  const isLoading = useLoadingSelector(Profile.thunks.doCompleteProfile);
  const countries = useSelector(selectCountries);
  const navigation = useNavigation<any>();
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView>
        <Formik
          initialValues={personal_info_initial_values}
          validationSchema={personalInfoSchema}
          onSubmit={values => {
            dispatch(
              Profile.thunks.doCompleteProfile({
                ...values,
                weight: values.weight.toString(),
                height: values.height.toString(),
                birthdate: bodyDateFormatter(values.birthdate),
              }),
            )
              .then(unwrapResult)
              .then(res => {
                if (res.data.status === 1) {
                  navigation.navigate('otp_register');
                }
              });
          }}>
          {(props: any) => (
            <>
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
                    flex: 1,
                  }}
                />
                <Picker
                  {...props}
                  name="nationality"
                  type="secondry"
                  data={countries}
                  title="Nationality"
                  stylingProp={{
                    flex: 1,
                  }}
                />
              </View>
              <Picker
                {...props}
                name="frequency_of_playing"
                type="secondry"
                data={frequencies}
                title="Frequency of playing Padel"
              />
              <Picker
                {...props}
                name="level"
                type="secondry"
                data={levels}
                title="Level"
                required
              />
              {scales.map((item, index) => (
                <View
                  key={index}
                  style={{
                    ...styles.bottomItemWrapper,
                    marginTop: index > 0 ? 30 : 20,
                  }}>
                  <View>
                    <Svg
                      size={item.svgSize}
                      name={item.name}
                      style={{marginTop: 15}}
                      bgColor={COLORS.cameraBackGround}
                    />
                  </View>
                  <View>
                    <MixedText title={item.title} required={item.required} />
                    <Counter
                      name={item.name}
                      mesuringUnit={item.mesuringUnit}
                      {...props}
                    />
                  </View>
                </View>
              ))}
              <Button
                type="secondry"
                label="SUBMIT"
                style={styles.button}
                onPress={props.handleSubmit}
                isLoading={isLoading}
              />
            </>
          )}
        </Formik>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default PersonalInfo;
