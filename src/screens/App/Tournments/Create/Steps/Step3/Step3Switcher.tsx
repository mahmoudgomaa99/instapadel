import React from 'react';
import COLORS from 'values/colors';
import Switcher from 'components/molecules/Switcher';

const Step3Switcher = ({props}: any) => {
  return (
    <Switcher
      thumbColor={
        props.values.tournament_type !== 'Single'
          ? COLORS.openGreen
          : COLORS.secondery
      }
      onValueChange={() =>
        props.setFieldValue(
          'tournament_type',
          props.values.tournament_type === 'Single' ? 'Double' : 'Single',
        )
      }
      value={props.values.tournament_type !== 'Single'}
      style={{
        borderColor: COLORS.openGreen,
        borderWidth: props.values.tournament_type !== 'Single' ? 0.5 : 0,
      }}
    />
  );
};

export default Step3Switcher;
