import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import COLORS from 'values/colors';
import {styles} from './styles';
import Button from 'components/molecules/Button';
import Input from 'components/molecules/Input';
import {Formik} from 'formik';
import CircledCheckBox from './Components/CheckBox';
import Animated, {FadeInUp} from 'react-native-reanimated';
import {useAppDispatch} from 'redux/store';
import Tournment from 'redux/tournment';
import {useLoadingSelector} from 'redux/selectors';
import {unwrapResult} from '@reduxjs/toolkit';
import {JoinTournmentTeammateSchema} from 'src/formik/schema';
import {useNavigation} from '@react-navigation/native';

const TeammateModal = ({
  CustomModal,
  selectedTournment,
  closeCustomModal,
}: any) => {
  const [checked, setChecked] = useState('User ID');
  const dispatch = useAppDispatch();
  const isLoading = useLoadingSelector(Tournment.thunks.doJoinTournment);
  const navigation = useNavigation<any>();
  return (
    <CustomModal>
      <Formik
        validationSchema={
          checked === '+1 Slot' ? null : JoinTournmentTeammateSchema
        }
        initialValues={{teammate_username: ''}}
        onSubmit={values => {
          dispatch(
            Tournment.thunks.doJoinTournment(
              checked === '+1 Slot'
                ? {tournament_id: selectedTournment.id, teammate_username: ''}
                : {
                    ...values,
                    tournament_id: selectedTournment.id,
                  },
            ),
          )
            .then(unwrapResult)
            .then(res => {
              closeCustomModal();
              navigation.navigate('waiting');
            });
        }}>
        {props => (
          <>
            <View style={styles.modalInnerWrapper}>
              <Text style={styles.greenText}> You Have A Teammate?</Text>
              <View style={styles.rowContainer}>
                <CircledCheckBox
                  setChecked={setChecked}
                  checked={checked}
                  title={'User ID'}
                />
                <CircledCheckBox
                  setChecked={setChecked}
                  checked={checked}
                  title={'+1 Slot'}
                />
              </View>
              {checked === 'User ID' && (
                <Animated.View entering={FadeInUp}>
                  <Text
                    style={{
                      marginTop: 20,
                      color: COLORS.white,
                      marginHorizontal: 15,
                    }}>
                    Teammate Username
                  </Text>
                  <Input
                    {...props}
                    mainContainerStyle={styles.textInputStyle}
                    name="teammate_username"
                    containerStyling={{width: '100%'}}
                  />
                </Animated.View>
              )}
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

export default TeammateModal;
