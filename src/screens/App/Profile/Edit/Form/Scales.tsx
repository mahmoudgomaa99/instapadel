import {  Text, View } from 'react-native'
import React from 'react'
import Counter from 'components/molecules/Counter';
import MixedText from 'components/molecules/MixedText';
import { scales } from 'src/screens/Auth/PersonalInfo/data';
import COLORS from 'values/colors';
import Svg from 'atoms/Svg';
import { styles } from './styles';

const Scales = ({formProps}:any) => {
  return (
    <>
      {scales.map((item, index) => (
        <View
          key={index}
          style={{
            ...styles.bottomItemWrapper,
            marginTop: index > 0 ? 30 : 20,
          }}>
          <View>
            <Svg
              size={item.svgSize}
              name={item.name}
              style={{marginTop: 15}}
              bgColor={COLORS.secondery}
            />
          </View>
          <View>
            <MixedText title={item.title} required={item.required} />
            <Counter
              name={item.name}
              mesuringUnit={item.mesuringUnit}
              {...formProps}
            />
          </View>
        </View>
      ))}
    </>
  );
}

export default Scales

