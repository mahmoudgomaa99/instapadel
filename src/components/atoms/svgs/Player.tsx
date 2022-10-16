import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 10;
const HEIGHT = 10;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, bgColor, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 10 10" {...props}>
      <Path
        d="M5 6.969a2.42 2.42 0 01-1.774-.731 2.406 2.406 0 01-.733-1.769A2.4 2.4 0 013.226 2.7 2.423 2.423 0 015 1.969a2.418 2.418 0 011.774.731 2.407 2.407 0 01.733 1.769 2.407 2.407 0 01-.733 1.769A2.419 2.419 0 015 6.969zm0 1.257a8.928 8.928 0 012.038.263 6.426 6.426 0 012.038.863 1.669 1.669 0 01.924 1.36v1.257H0v-1.257a1.668 1.668 0 01.924-1.36 6.435 6.435 0 012.038-.863A8.9 8.9 0 015 8.226z"
        transform="translate(0 -1.969)"
        fill="#81e200"
      />
    </Svg>
  );
}

export default SvgComponent;
