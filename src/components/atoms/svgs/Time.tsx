import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 17;
const HEIGHT = 17;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, bgColor, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 17 17" {...props}>
      <Path
        d="M11.875 3.375a8.5 8.5 0 108.5 8.5 8.5 8.5 0 00-8.5-8.5zm3.925 9.808h-3.925a.654.654 0 01-.654-.654V6.644a.654.654 0 111.308 0v5.231H15.8a.654.654 0 110 1.308z"
        transform="translate(-3.375 -3.375)"
        fill="#004077"
      />
    </Svg>
  );
}

export default SvgComponent;
