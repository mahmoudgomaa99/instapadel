import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Modalize, ModalizeProps} from 'react-native-modalize';
import COLORS from 'values/colors';
import {Picker as RNPicker, PickerProps} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';

type TType = 'primary' | 'secondry';
type TItem = {
  label: string;
  value: any;
};
type TMMode = 'picker' | 'datePicker' | 'timePicker';

type TProps = {
  type: TType;
  usage: TMMode;
  data: TItem[];
  loading?: boolean;
  touched: any;
  errors: any;
  name: string;
  handleChange: any;
  handleBlur: any;
  values: any;
  setFieldValue: any;
  modalizeRef: any;
};

const PickerModal = ({
  modalizeRef,
  usage,
  type,
  data,
  ...props
}: ModalizeProps & TProps) => {
  return (
    <Modalize
      modalHeight={300}
      avoidKeyboardLikeIOS
      ref={modalizeRef}
      closeOnOverlayTap
      overlayStyle={{backgroundColor: 'transparent'}}
      modalStyle={{backgroundColor: COLORS.cameraBackGround}}
      withHandle={false}
      HeaderComponent={
        <View style={styles[`${type}_modalHeader`]}>
          <TouchableOpacity onPress={() => modalizeRef?.current?.close()}>
            <Text>Done</Text>
          </TouchableOpacity>
        </View>
      }
      {...props}><></>
      {usage === 'picker' ? (
        <RNPicker
          selectedValue={props.values[props.name]}
          onValueChange={itemValue =>
            props.setFieldValue(props.name, itemValue)
          }>
          {data.map((item, index) => (
            <RNPicker.Item
              color={COLORS.white}
              key={index}
              label={item.label}
              value={item.value}
            />
          ))}
        </RNPicker>
      ) : usage === 'datePicker' ? (
        <DatePicker
          mode="date"
          style={{
            marginTop: 20,
            alignSelf: 'center',
          }}
          textColor={COLORS.white}
          date={props.values[props.name]}
          onDateChange={date => props.setFieldValue(props.name, date)}
        />
      ) : usage === 'timePicker' ? (
        <DatePicker
          mode={'time'}
          style={{
            marginTop: 20,
            alignSelf: 'center',
          }}
          textColor={COLORS.white}
          date={props.values[props.name]}
          onDateChange={date => props.setFieldValue(props.name, date)}
        />
      ) : (
        <></>
      )}
    </Modalize>
  );
};

export default PickerModal;

const styles = StyleSheet.create({
  primary_iosButton: {
    borderColor: COLORS.secondery,
    borderWidth: 1,
    width: Dimensions.get('window').width,
    padding: 15,
    height: 30,
  },
  primary_modalHeader: {
    backgroundColor: COLORS.white,
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  secondry_iosButton: {},
  secondry_modalHeader: {},
});
