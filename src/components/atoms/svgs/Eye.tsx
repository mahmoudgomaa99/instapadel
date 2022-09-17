import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 27;
const HEIGHT = 18;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, bgColor, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);

  return (
    <Svg {...computedSize} viewBox="0 0 27 18" {...props}>
      <G fill={bgColor}>
        <Path
          data-name="Path 18"
          d="M20.9 17.2a3.7 3.7 0 11-3.7-3.7 3.7 3.7 0 013.7 3.7z"
          transform="translate(-1.123 -6.75) translate(-2.577 -1.451)"
        />
        <Path
          data-name="Path 19"
          d="M27.833 14.772a19.067 19.067 0 00-5.584-5.655A14.129 14.129 0 0014.6 6.75a13.474 13.474 0 00-6.99 2.031 20.493 20.493 0 00-6.169 5.966 1.8 1.8 0 00-.036 2 18.794 18.794 0 005.528 5.662A13.935 13.935 0 0014.6 24.75a14.2 14.2 0 007.666-2.35 18.8 18.8 0 005.573-5.677 1.811 1.811 0 00-.006-1.955zM14.624 21.15a5.4 5.4 0 115.4-5.4 5.4 5.4 0 01-5.4 5.4z"
          transform="translate(-1.123 -6.75)"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
