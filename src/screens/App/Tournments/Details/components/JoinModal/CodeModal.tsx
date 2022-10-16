import {Text, View} from 'react-native';
import React from 'react';
import COLORS from 'values/colors';
import {styles} from './styles';
import Button from 'components/molecules/Button';
import Input from 'components/molecules/Input';
import {Formik} from 'formik';
import {useLoadingSelector} from 'redux/selectors';
import Tournment from 'redux/tournment';
import {JoinTournmentCodeSchema} from 'src/formik/schema';
import {useAppDispatch} from 'redux/store';
import {unwrapResult} from '@reduxjs/toolkit';

const CodeModal = ({
  CustomModal,
  closeCustomModal,
  selectedTournment,
  openCustomModal_TM,
}: any) => {
  const isLoading = useLoadingSelector(Tournment.thunks.doCheckCode);
  const dispatch = useAppDispatch();
  return (
    <CustomModal>
      <Formik
        initialValues={{code: ''}}
        validationSchema={JoinTournmentCodeSchema}
        onSubmit={values => {
          dispatch(
            Tournment.thunks.doCheckCode({
              ...values,
              tournament_id: selectedTournment.id,
            }),
          )
            .then(unwrapResult)
            .then(res => {
              console.log(res);
              if (res.data.is_valid) {
                closeCustomModal();
                setTimeout(() => openCustomModal_TM(), 100);
              }
            });
        }}>
        {props => (
          <>
            <View style={styles.modalInnerWrapper}>
              <Text style={styles.greenText}>Enter Code</Text>
              <Text
                style={{
                  marginTop: 20,
                  color: COLORS.white,
                  marginHorizontal: 15,
                }}>
                Enter Tournament Code
              </Text>
              <Input
                {...props}
                mainContainerStyle={styles.textInputStyle}
                name="code"
                containerStyling={{width: '100%'}}
              />
            </View>
            <Button
              type="secondry"
              label="JOIN TOURNAMENT"
              style={{marginBottom: 25}}
              isLoading={isLoading}
              onPress={props.submitForm}
            />
          </>
        )}
      </Formik>
    </CustomModal>
  );
};

export default CodeModal;
