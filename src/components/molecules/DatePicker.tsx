import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';
import {dateFormatter} from 'src/utils/date_formatter';
import MixedText from './MixedText';
import Svg, {TName} from 'atoms/Svg';
import moment from 'moment';
import DatePicker, {DatePickerProps} from 'react-native-date-picker';

type TType = 'primary' | 'secondry';
type TItem = {
  label: string;
  value: any;
};
type TProps = {
  type: TType;
  data: TItem[];
  loading?: boolean;
  touched: any;
  errors: any;
  name: string;
  handleChange: any;
  handleBlur: any;
  title: string;
  values: any;
  setFieldValue: any;
  modalizeRef?: any;
  required: boolean;
  stylingProp: any;
  svgName: TName;
};

const DateTimePicker = ({
  type,
  data,
  modalizeRef,
  title,
  stylingProp,
  svgName,
  ...props
}: DatePickerProps & TProps) => {
  const [dateString, setDateString] = useState('');
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (props.mode === 'date') {
      setDateString(dateFormatter(props.values[props.name]));
    }
    if (props.mode === 'time') {
      setDateString(moment(props.values[props.name]).format('LT'));
    }
  }, [props.values[props.name]]);
  return (
    <View style={[styles[`${type}_iosButtonWrapper`], stylingProp]}>
      <MixedText title={title} required={props.required} />
      <TouchableOpacity
        onPress={() => setOpen(true)}
        style={styles[`${type}_iosButton`]}>
        {type === 'primary' ? (
          <Text style={{color: COLORS.white}}>
            {props.mode === 'date' || props.mode === 'time'
              ? dateString
              : props.values[props.name]}
          </Text>
        ) : (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: COLORS.white}}>
              {props.mode === 'date' || props.mode === 'time'
                ? dateString
                : props.values[props.name]}
            </Text>
            <Svg
              name={svgName}
              size={svgName === 'small_right_arrow' ? 13 : 19}
            />
          </View>
        )}
      </TouchableOpacity>
      <DatePicker
        {...props}
        open={open}
        modal
        textColor={COLORS.black}
        date={props.values[props.name]}
        style={{backgroundColor: '#fff'}}
        theme="light"
        onDateChange={date => props.setFieldValue(props.name, date)}
        onCancel={() => {
          setOpen(false);
        }}
        confirmText="Done"
        onConfirm={date => {
          setOpen(false);
          props.setFieldValue(props.name, date);
        }}
      />
    </View>
  );
};

export default DateTimePicker;

type TTstyles = {
  primary_iosButton: TextStyle;
  secondry_iosButton: TextStyle;
  primary_iosButtonWrapper: ViewStyle;
  secondry_iosButtonWrapper: ViewStyle;
  primary_modalHeader: ViewStyle;
  secondry_modalHeader: ViewStyle;
  primary_modalBody: ViewStyle;
  secondry_modalBody: ViewStyle;
};

const styles: TTstyles = StyleSheet.create({
  primary_iosButton: {
    borderColor: COLORS.secondery,
    borderWidth: 1,
    padding: 15,
    height: 60,
    marginTop: 5,
    borderRadius: 15,
    justifyContent: 'center',
    color: COLORS.white,
  },
  primary_iosButtonWrapper: {marginHorizontal: 10, marginVertical: 10},
  secondry_iosButtonWrapper: {marginHorizontal: 10, marginVertical: 10},
  secondry_iosButton: {
    borderColor: COLORS.secondery,
    backgroundColor: COLORS.darkBlue,
    borderWidth: 1,
    padding: 15,
    height: 60,
    marginTop: 5,
    borderRadius: 15,
    justifyContent: 'center',
    color: COLORS.white,
  },
  title: {
    color: COLORS.white,
    marginLeft: 5,
    fontFamily: Fonts.RobotoBold,
    fontSize: 16,
  },
  primary_modalHeader: {
    backgroundColor: COLORS.white,
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  secondry_modalHeader: {
    backgroundColor: COLORS.white,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  primary_modalBody: {},
  secondry_modalBody: {
    backgroundColor: COLORS.secondery,
    color: COLORS.white,
  },
});
