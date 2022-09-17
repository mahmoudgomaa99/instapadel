import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';
import MixedText from './MixedText';
import Svg, {TName} from 'atoms/Svg';
import RNPickerSelect, {PickerSelectProps} from 'react-native-picker-select';

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
}: PickerSelectProps & TProps) => {
  return (
    <View style={stylingProp}>
      <View style={styles[`${type}_iosButtonWrapper`]}>
        <MixedText title={title} required={props.required} />
        <RNPickerSelect
          {...props}
          placeholder={{
            label: props.placeholder || 'Select an Item',
            value: null,
            color: COLORS.grey,
          }}
          value={props.values[props.name]}
          onValueChange={value => props.setFieldValue(props.name, value)}
          items={data}
          style={{
            inputIOS: {
              ...styles[`${type}_iosButton`],
              borderColor:
                props.errors[props.name] && props.touched[props.name]
                  ? COLORS.red
                  : COLORS.secondery,
            },
            inputAndroid: styles[`${type}_iosButton`],
            modalViewMiddle: styles[`${type}_modalHeader`],
            modalViewBottom: styles[`${type}_modalBody`],
            iconContainer: {top: '42%', right: 10},
          }}
          Icon={() => (svgName ? <Svg name={svgName} size={12} /> : <></>)}
        />
        {props.errors[props.name] && props.touched[props.name] && (
          <Text style={styles.errorText}>{props.errors[props.name]}</Text>
        )}
      </View>
    </View>
  );
};

export default Picker;

type TTstyles = {
  primary_iosButton: TextStyle;
  secondry_iosButton: TextStyle;
  primary_iosButtonWrapper: ViewStyle;
  secondry_iosButtonWrapper: ViewStyle;
  primary_modalHeader: ViewStyle;
  secondry_modalHeader: ViewStyle;
  primary_modalBody: ViewStyle;
  secondry_modalBody: ViewStyle;
  errorText: TextStyle;
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
  errorText: {
    color: COLORS.red,
    fontSize: 11.5,
    fontWeight: '800',
    marginLeft: 7,
    marginTop: 5,
  },
});
