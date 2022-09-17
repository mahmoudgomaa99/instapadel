import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 20;
const HEIGHT = 24;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, bgColor, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 20 24" {...props}>
      <Path
        d="M20 17.524a13.962 13.962 0 01-1.766 3.606q-1.852 2.827-3.69 2.827a6.61 6.61 0 01-2.01-.461 6.325 6.325 0 00-2.168-.461 5.5 5.5 0 00-2.039.476 5.167 5.167 0 01-1.9.491Q4.25 24 2.11 20.265A14.842 14.842 0 010 13.009a8.582 8.582 0 011.623-5.394A4.975 4.975 0 015.7 5.539a9.51 9.51 0 012.541.433 9.209 9.209 0 001.982.433 7.154 7.154 0 002.053-.491 8.074 8.074 0 012.484-.491 5.231 5.231 0 013.058.937 7.428 7.428 0 011.493 1.44 9.33 9.33 0 00-1.636 1.7 5.153 5.153 0 00-.933 2.985 5.51 5.51 0 00.991 3.217A4.369 4.369 0 0020 17.523zM14.6.606a5.521 5.521 0 01-.416 1.961 5.92 5.92 0 01-1.334 1.991A4.069 4.069 0 0111.3 5.6a7.987 7.987 0 01-1.493.245 6.6 6.6 0 011.12-3.707A5.716 5.716 0 0114.515 0a1.342 1.342 0 01.036.159 1.342 1.342 0 00.036.159q0 .058.007.144t.006.143z"
        fill="#004077"
      />
    </Svg>
  );
}

export default SvgComponent;
