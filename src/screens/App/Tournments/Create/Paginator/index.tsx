import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import COLORS from 'values/colors';
import {images} from 'src/assets/images';
import Svg from 'atoms/Svg';

type TImg = 'step1' | 'step2' | 'step3';

const data: {img: TImg; value: number}[] = [
  {img: 'step1', value: 1},
  {img: 'step2', value: 2},
  {img: 'step3', value: 3},
];

const Paginator = ({step, setStep}: any) => {
  return (
    <View style={styles.stepsPaginatorContainer}>
      {data.map((item, index) => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableWithoutFeedback
            key={index}
            onPress={() => (item.value < step ? setStep(item.value) : null)}>
            <View
              style={{
                ...styles.stepPaginatorContainer,
                backgroundColor:
                  item.value <= step ? COLORS.openGreen : COLORS.darkBlue,
              }}>
              <Svg name={item.img} size={item.img === 'step2' ? 7 : 28} />
            </View>
          </TouchableWithoutFeedback>
          {item.value === 3 ? null : (
            <Svg
              name={'net'}
              bgColor={step > item.value ? COLORS.secButtonBG : '#1d3962'}
              size={60}
            />
          )}
        </View>
      ))}
    </View>
  );
};

export default Paginator;
