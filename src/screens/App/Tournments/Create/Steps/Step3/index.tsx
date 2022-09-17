import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Step3Switcher from './Step3Switcher';
import {styles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DateTimePicker from 'components/molecules/DatePicker';
import Picker from 'components/molecules/Picker';
import {
  levels_of_players_data,
  no_of_players,
  participants_double,
  participants_type_single,
} from './data';
import {plusDayeDateFormatterForMinDatePicker} from 'src/utils/date_formatter';
import Button from 'components/molecules/Button';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import COLORS from 'values/colors';
import Svg from 'atoms/Svg';
import InputView from 'components/molecules/Input';

const Step3 = ({formikProps: props, isLoading}: any) => {
  const animation = useSharedValue({width: Dimensions.get('window').width});
  const animationStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(animation.value.width, {
        duration: 1000,
      }),
    };
  });
  return (
    <>
      <View style={styles.privacyContainer}>
        <View>
          <Text style={styles.privacyTxt1}>Tournament Type</Text>
          <Text style={styles.privacyTxt2}>
            {props.values.tournament_type}s
          </Text>
        </View>
        <Step3Switcher props={props} />
      </View>
      <KeyboardAwareScrollView extraScrollHeight={-50}>
        <Picker
          {...props}
          data={
            props.values.tournament_type === 'Single'
              ? participants_type_single
              : participants_double
          }
          title="Participants Type"
          name="participants_type"
          type="secondry"
          svgName="small_right_arrow"
          required={true}
          stylingProp={{marginTop: 20}}
          placeholder={'Select a Type'}
        />
        <Picker
          {...props}
          data={no_of_players}
          title={
            props.values.tournament_type === 'Single'
              ? 'Number of Players'
              : 'Number of Teams'
          }
          name="no_of_players"
          type="secondry"
          svgName="small_right_arrow"
          required={true}
          placeholder={'Select The Number'}
        />
        <Picker
          {...props}
          data={levels_of_players_data}
          title={'Participants Level'}
          name="levels_of_players"
          type="secondry"
          svgName="small_right_arrow"
          required={true}
          placeholder={'Select The Level'}
        />
        <DateTimePicker
          {...props}
          name="submission_deadline"
          type="secondry"
          title="Submission Deadline"
          mode="date"
          svgName="calender"
          required={true}
          minimumDate={
            new Date(plusDayeDateFormatterForMinDatePicker(new Date()))
          }
        />
        <View style={styles.prizeContainer}>
          <Animated.View style={[animationStyle]}>
            <Text style={styles.title}>Prize</Text>
            <TouchableOpacity
              onPress={() => {
                props.setFieldValue(
                  'has_prize',
                  props.values.has_prize === 0 ? 1 : 0,
                );
                animation.value =
                  props.values.has_prize === 0
                    ? {width: Dimensions.get('window').width * 0.5}
                    : {width: Dimensions.get('window').width};
              }}
              style={styles.level_touchable}>
              <Text style={{color: COLORS.white}}>
                {props.values.has_prize === 1 ? 'Yes' : ''}
              </Text>
              <Svg name="small_right_arrow" size={13} />
            </TouchableOpacity>
          </Animated.View>
          <InputView
            {...props}
            name="prize_value"
            title="Prize Value"
            containerStyle={styles.input}
            titleStyling={styles.inputTitle}
            keyboardType="number-pad"
            containerStyling={{marginTop: 15}}
            mainContainerStyle={styles.mainInputContainer}
          />
        </View>
        <InputView
          {...props}
          name="description"
          title="Description"
          containerStyle={styles.description_input}
          titleStyling={styles.inputTitle}
          keyboardType="default"
          numberOfLines={4}
          mainContainerStyle={styles.mainDesInputContainer}
          multiline={true}
          textAlignVertical="top"
        />
      </KeyboardAwareScrollView>
      <Button
        type="secondry"
        label="CREATE TOURNAMENT"
        onPress={props.handleSubmit}
        isLoading={isLoading}
      />
    </>
  );
};

export default Step3;
