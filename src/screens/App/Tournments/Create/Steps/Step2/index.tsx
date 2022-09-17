import {Dimensions, Image, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import InputView from 'components/molecules/Input';
import {Formik} from 'formik';
import Picker from 'components/molecules/Picker';
import useLibraryPermission from 'hooks/useLibraryPermission';
import {styles} from './styles';
import Svg from 'atoms/Svg';
import {keys, locations} from './data';
import Button from 'components/molecules/Button';
import {CreateTournmentSecondStepSchema} from 'src/formik/schema';
import {useSelector} from 'react-redux';
import Tournment, {selectStep2} from 'redux/tournment';
import {useAppDispatch} from 'redux/store';
import {second_step_create_form_iv} from 'src/formik/initial_values';
import Toast from 'react-native-toast-message';
import DateTimePicker from 'components/molecules/DatePicker';
import {
  dateFormatter,
  dateFormatterForMinDatePicker,
  plusDayeDateFormatterForMinDatePicker,
} from 'utils/date_formatter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Step2 = ({props, setStep}: any) => {
  const {source, pick} = useLibraryPermission();
  const step2 = useSelector(selectStep2);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (source) props.setFieldValue('logo_img', source.assets);
    if (step2?.logo_img) props.setFieldValue('logo_img', step2?.logo_img);
  }, [source, step2?.logo_img]);
  
  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Formik
        initialValues={step2 || second_step_create_form_iv}
        validationSchema={CreateTournmentSecondStepSchema}
        onSubmit={(values: any, action) => {
          if (!props.values.logo_img) {
            Toast.show({type: 'error', text2: 'Tournment image is required!'});
            return;
          }
          keys.map(item => {
            props.setFieldValue(item, values[item]);
          });
          if (!step2)
            dispatch(Tournment.setStep2({...values, logo_img: source.assets}));
          setStep(3);
        }}>
        {(props2: any) => (
          <View>
            <View style={styles.cameraWrapper}>
              <TouchableOpacity
                onPress={pick}
                style={styles.cameraCircleWrapper}>
                {!source && !step2?.logo_img ? (
                  <Svg name="camera" size={30} />
                ) : (
                  <Image
                    style={styles.cameraCircleWrapper}
                    source={step2?.logo_img || source.assets}
                  />
                )}
              </TouchableOpacity>
            </View>
            <InputView
              {...props2}
              name="name"
              title="Tournament Name"
              placeholder=""
              containerStyle={styles.input}
              titleStyling={styles.inputTitle}
            />
            <View
              style={{
                flexDirection: 'row',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 30,
              }}>
              <DateTimePicker
                {...props2}
                name="start_date"
                type="secondry"
                title="Start Date"
                mode="date"
                required={true}
                svgName="calender"
                stylingProp={{
                  width: Dimensions.get('window').width * 0.45,
                }}
                minimumDate={
                  new Date(dateFormatterForMinDatePicker(new Date()))
                }
              />
              <DateTimePicker
                {...props2}
                name="end_date"
                type="secondry"
                title="End Date"
                mode="date"
                required={true}
                svgName="calender"
                stylingProp={{
                  width: Dimensions.get('window').width * 0.45,
                }}
                minimumDate={
                  new Date(plusDayeDateFormatterForMinDatePicker(new Date()))
                }
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                display: 'flex',
                justifyContent: 'center',
              }}>
              <DateTimePicker
                {...props2}
                name="start_time"
                type="secondry"
                title="Start Time"
                mode="time"
                stylingProp={{
                  width: Dimensions.get('window').width * 0.45,
                }}
                svgName="time"
                required={true}
                minimumDate={new Date(dateFormatter(new Date()))}
              />
              <DateTimePicker
                {...props2}
                name="end_time"
                mode="time"
                type="secondry"
                stylingProp={{
                  width: Dimensions.get('window').width * 0.45,
                }}
                svgName="time"
                title="End Time"
                required={true}
                minimumDate={new Date(dateFormatter(new Date()))}
              />
            </View>
            <Picker
              {...props2}
              data={locations}
              usage="picker"
              title="Location"
              name="location"
              type="secondry"
              svgName="small_right_arrow"
              placeholder={'Select a location'}
              required={true}
              stylingProp={{
                marginBottom: Dimensions.get('window').height * 0.04,
              }}
            />
            <Button
              type="secondry"
              label="Next"
              onPress={props2.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default Step2;
