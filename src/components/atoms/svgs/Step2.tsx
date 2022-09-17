import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 6;
const HEIGHT = 30;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;
function SvgComponent({size, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 6 30" {...props}>
      <Path
        data-name="Path 73"
        d="M59 33a3 3 0 00-3 3v15a3 3 0 006 0V36a3 3 0 00-3-3zm0-9a3 3 0 103 3 3 3 0 00-3-3z"
        transform="translate(-56 -24)"
        fill="#004077"
      />
    </Svg>
  );
}

export default SvgComponent;
