import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TSvgProps} from '..';
const WIDTH = 6;
const HEIGHT = 8;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;
function SvgComponent({size, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 6 8" {...props}>
      <Path
        data-name="Polygon 1"
        d="M4 0l4 6H0z"
        transform="rotate(90 3 3)"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
