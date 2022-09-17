import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 21;
const HEIGHT = 21;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;
function SvgComponent({size, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 21 21" {...props}>
      <Path
        d="M10.5 21a10.467 10.467 0 01-9.1-5.23A10.309 10.309 0 010 10.5a10.314 10.314 0 005.27-1.4A10.371 10.371 0 009.1 5.27 10.309 10.309 0 0010.5 0a10.467 10.467 0 019.1 5.23A10.309 10.309 0 0121 10.5 10.467 10.467 0 0010.5 21zM.082 9.188a10.231 10.231 0 012.995-6.112A10.227 10.227 0 019.188.082a9.03 9.03 0 01-1.241 4.553 9.051 9.051 0 01-3.312 3.312A9.037 9.037 0 01.082 9.188zm20.836 2.625a10.231 10.231 0 01-2.994 6.112 10.231 10.231 0 01-6.112 2.994 9.155 9.155 0 019.106-9.106z"
        fill="#004077"
      />
    </Svg>
  );
}

export default SvgComponent;
