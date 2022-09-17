import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TSvgProps} from '..';

const HEIGHT = 20.269;
const WIDTH = 20.269;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 20.269 20.269" {...props}>
      <Path
        d="M10.343 8.683h9.764a9.406 9.406 0 01.161 1.689 10.514 10.514 0 01-1.226 5.113A8.756 8.756 0 0115.549 19a10.5 10.5 0 01-5.206 1.267 10.56 10.56 0 01-7.327-2.956 10.124 10.124 0 01-2.2-3.233 9.961 9.961 0 010-7.891 10.124 10.124 0 012.2-3.233A10.56 10.56 0 0110.343 0a9.912 9.912 0 016.936 2.652L14.465 5.3a5.758 5.758 0 00-4.121-1.57 6.28 6.28 0 00-3.212.857 6.376 6.376 0 00-2.337 2.334 6.42 6.42 0 000 6.426 6.388 6.388 0 002.336 2.329 6.276 6.276 0 003.212.857 6.991 6.991 0 002.155-.317 5.493 5.493 0 001.616-.792 5.764 5.764 0 001.1-1.082 5.043 5.043 0 00.694-1.148 4.742 4.742 0 00.3-1.029h-5.865z"
        fill="#004077"
      />
    </Svg>
  );
}

export default SvgComponent;
