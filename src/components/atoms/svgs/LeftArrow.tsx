import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {TSvgProps} from '..';

const WIDTH = 11.414;
const HEIGHT = 19.827;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, bgColor, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 11.414 19.827" {...props}>
      <Path
        data-name="Path 21"
        d="M10 1.414l-9 8.5 9 8.5"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  );
}

export default SvgComponent;
