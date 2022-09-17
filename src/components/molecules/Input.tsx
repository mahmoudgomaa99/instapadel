import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Input, InputProps} from 'react-native-elements';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';
import Svg from 'atoms/Svg';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

type TInput = {
  loading?: boolean;
  touched: any;
  errors: any;
  name: string;
  handleChange: any;
  handleBlur: any;
  title: string;
  values: any;
  containerStyling?: any;
  titleStyling?: any;
  eye?: boolean;
  height: number;
  mainContainerStyle: any;
};

const InputView = ({
  loading,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  name,
  title,
  placeholder,
  containerStyling,
  titleStyling,
  eye,
  height,
  mainContainerStyle,
  ...props
}: InputProps & TInput) => {
  const [eyeEnabled, setEyeEnabled] = useState(eye);
  return (
    <View style={[styles.container, containerStyling]}>
      <Text style={titleStyling}>{title}</Text>
      <Input
        {...props}
        placeholder={placeholder}
        autoCompleteType={'off'}
        disabled={loading ? true : false}
        placeholderTextColor="#888888"
        value={values[name]}
        errorStyle={{
          color: COLORS.errorRed,
          fontFamily: Fonts.RobotoBold,
        }}
        errorMessage={touched[name] ? errors[name] : ''}
        inputStyle={{
          color: '#fff',
          fontSize: 14,
          opacity: 0.7,
          fontFamily: Fonts.RobotoRegular,
        }}
        inputContainerStyle={
          mainContainerStyle
            ? {
                ...mainContainerStyle,
                borderColor:
                  errors[name] && touched[name]
                    ? COLORS.errorRed
                    : COLORS.secondery,
              }
            : {
                ...styles.textInputStyle,
                borderColor:
                  errors[name] && touched[name]
                    ? COLORS.errorRed
                    : COLORS.secondery,
                height: height || 45,
              }
        }
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        rightIcon={
          eye && (
            <Svg
              name="eye"
              bgColor={!eyeEnabled ? 'white' : COLORS.eyeColor}
              size={25}
              style={{marginHorizontal: 5}}
              onPress={() => setEyeEnabled(prev => !prev)}
            />
          )
        }
        secureTextEntry={eyeEnabled || props.secureTextEntry}
      />
    </View>
  );
};

export default InputView;

const styles = StyleSheet.create({
  container: {},
  textInputStyle: {
    borderWidth: 1,
    borderRadius: 12,
    height: 45,
    marginTop: h * 0.01,
    paddingLeft: w * 0.03,
    fontFamily: Fonts.RobotoRegular,
    lineHeight: 24,
    backgroundColor: COLORS.backGround,
    borderColor: COLORS.secondery,
    fontSize: 12,
  },
});
