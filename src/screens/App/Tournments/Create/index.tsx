import {BackHandler, Dimensions, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import {images} from 'src/assets/images';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Paginator from './components/Paginator';
import {Formik} from 'formik';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import {create_form_main_iv} from 'src/formik/initial_values';
import Step3 from './Steps/Step3';
import {CreateTournmentSchema} from 'src/formik/schema';
import {useAppDispatch} from 'redux/store';
import Tournment from 'redux/tournment';
import {useLoadingSelector} from 'redux/selectors';
import {useNavigation} from '@react-navigation/native';
import {createRequestBody} from './utils/createReqBody';
import TournmentHeader from '../components/Header';

const CreateTournment = () => {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const dispatch = useAppDispatch();
  const isLoading = useLoadingSelector(Tournment.thunks.doCreateTournment);
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      dispatch(Tournment.resetStep2());
      return false;
    });
  });
  return (
    <ImageBackground source={images.home.background} style={styles.container}>
      <Formik
        initialValues={create_form_main_iv}
        validationSchema={CreateTournmentSchema}
        onSubmit={(values: any, action) => {
          const body = createRequestBody(values);
          dispatch(Tournment.thunks.doCreateTournment(body))
            .then(
              res => {},
              // navigation.goBack()
            )
            .catch(e => console.log(e));
        }}>
        {(props: any) => (
          <SafeAreaView style={{height: Dimensions.get('window').height}}>
            <TournmentHeader title="Create Tournament" />
            <Paginator step={step} setStep={setStep} />
            {step === 1 && <Step1 props={props} setStep={setStep} />}
            {step === 2 && <Step2 props={props} setStep={setStep} />}
            {step === 3 && <Step3 formikProps={props} isLoading={isLoading} />}
          </SafeAreaView>
        )}
      </Formik>
    </ImageBackground>
  );
};

export default CreateTournment;
