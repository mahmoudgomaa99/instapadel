import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 15.755;
const HEIGHT = 15.755;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, bgColor, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);

  return (
    <Svg {...computedSize} viewBox="0 0 15.755 15.755" {...props}>
      <G
        data-name="8956809_calendar_user interface_communication_event_schedule_icon"
        opacity={0.6}>
        <Path
          data-name="Path 40"
          d="M2 11.97v7.855a2.289 2.289 0 002.29 2.29h11.175a2.289 2.289 0 002.29-2.29V11.97z"
          transform="translate(-2 -6.36)"
          fill={bgColor}
        />
        <Path
          data-name="Path 41"
          d="M17.192 3.96H14.1v1.665a.563.563 0 11-1.125 0V3.96H6.783v1.665a.563.563 0 11-1.125 0V3.96H2.563A.564.564 0 002 4.523v3.944h15.755V4.523a.564.564 0 00-.563-.563z"
          transform="translate(-2 -2.857)"
          fill="#e1e1e1"
        />
        <Path
          data-name="Path 42"
          d="M9.063 5.331a.563.563 0 00.563-.563V2.563a.563.563 0 10-1.125 0v2.205a.563.563 0 00.562.563z"
          transform="translate(-4.843 -2)"
          fill="#a1a1a1"
        />
        <Path
          data-name="Path 43"
          d="M22.063 5.331a.563.563 0 00.563-.563V2.563a.563.563 0 10-1.125 0v2.205a.562.562 0 00.562.563z"
          transform="translate(-10.528 -2)"
          fill="#a1a1a1"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
