import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Picker as RNPicker, PickerProps} from '@react-native-picker/picker';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';
import {dateFormatter} from 'src/utils/date_formatter';
import MixedText from './MixedText';
import Svg, {TName} from 'atoms/Svg';
import moment from 'moment';

type TType = 'primary' | 'secondry';
type TItem = {
  label: string;
  value: any;
};
type TMMode = 'picker' | 'datePicker' | 'timePicker';
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
  usage: TMMode;
  required: boolean;
  stylingProp: any;
  svgName: TName;
};

const Picker = ({
  type,
  data,
  modalizeRef,
  title,
  usage,
  stylingProp,
  svgName,
  ...props
}: PickerProps & TProps) => {
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const [dateString, setDateString] = useState('');
  useEffect(() => {
    if (usage === 'datePicker') {
      setDateString(dateFormatter(props.values[props.name]));
    }
    if (usage === 'timePicker') {
      setDateString(moment(props.values[props.name]).format('LT'));
    }
  }, [props.values[props.name]]);

  return (
    <View style={stylingProp}>
      {Platform.OS === 'android' ? (
        <>
          <MixedText title={title} required={props.required} />
          <RNPicker
            {...props}
            selectedValue={props.values[props.name]}
            onValueChange={itemValue =>
              props.setFieldValue(props.name, itemValue)
            }>
            {data.map((item, index) => (
              <RNPicker.Item
                key={index}
                label={item.label}
                value={item.value}
              />
            ))}
          </RNPicker>
        </>
      ) : (
        <View style={styles[`${type}_iosButtonWrapper`]}>
          <MixedText title={title} required={props.required} />
          <TouchableOpacity
            onPress={onOpen}
            style={styles[`${type}_iosButton`]}>
            {type === 'primary' ? (
              <Text style={{color: COLORS.white}}>
                {usage === 'datePicker' || usage === 'timePicker'
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
                  {usage === 'datePicker' || usage === 'timePicker'
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
        </View>
      )}
    </View>
  );
};

export default Picker;

const styles = StyleSheet.create({
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
  primary_iosButtonWrapper: {marginHorizontal: 10, marginVertical: 15},
  secondry_iosButtonWrapper: {marginHorizontal: 10, marginVertical: 15},
  secondry_iosButton: {
    borderColor: COLORS.secondery,
    backgroundColor: COLORS.darkBlue,
    borderWidth: 1,
    padding: 15,
    height: 60,
    marginTop: 15,
    borderRadius: 15,
    justifyContent: 'center',
    color: COLORS.white,
    marginHorizontal: 10,
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
});
