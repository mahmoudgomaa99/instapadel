import {Text, View} from 'react-native';
import React from 'react';
import COLORS from 'values/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';

type TProps = {
  name: string;
  values: any;
  setFieldValue: any;
  mesuringUnit: string;
};

const Counter = ({name, values, mesuringUnit, setFieldValue}: TProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
      }}>
      <TouchableOpacity onPress={() => setFieldValue(name, values[name] - 1)}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            borderColor: COLORS.secondery,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="minus" color={COLORS.white} size={30} />
        </View>
      </TouchableOpacity>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Text style={{color: COLORS.white, fontSize: 32, marginHorizontal: 10}}>
          {values[name]}
        </Text>
        <Text style={{color: COLORS.white, fontSize: 17, marginHorizontal: 10}}>
          {mesuringUnit}
        </Text>
      </View>
      <TouchableOpacity onPress={() => setFieldValue(name, values[name] + 1)}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.secondery,
          }}>
          <Icon name="plus" color={COLORS.white} size={28} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
