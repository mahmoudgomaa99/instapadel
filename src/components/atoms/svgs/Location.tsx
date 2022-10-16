import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 12;
const HEIGHT = 16;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 12 16" {...props}>
      <Path
        data-name="Path 116"
        d="M12.75 2.25a5.758 5.758 0 00-6 5.465 12.327 12.327 0 002.041 5.671 41.769 41.769 0 003 4.4 1.226 1.226 0 001.921 0 41.935 41.935 0 003-4.4 12.334 12.334 0 002.038-5.671 5.758 5.758 0 00-6-5.465zm0 8a2.345 2.345 0 01-2.4-2.286 2.4 2.4 0 014.8 0 2.348 2.348 0 01-2.4 2.286z"
        fill="#81e200"
        transform="translate(-6.75 -2.25)"
      />
    </Svg>
  );
}

export default SvgComponent;
