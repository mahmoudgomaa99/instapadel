import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 19.012;
const HEIGHT = 19.012;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 19.012 19.012" {...props}>
      <Path
        d="M3.471 0A3.464 3.464 0 000 3.471V15.54a3.464 3.464 0 003.471 3.471h6.541v-7.432H8.047V8.9h1.965V6.617c0-1.8 1.161-3.445 3.836-3.445a16.208 16.208 0 011.884.1l-.063 2.5s-.817-.008-1.708-.008c-.965 0-1.119.445-1.119 1.182V8.9h2.9l-.127 2.676h-2.773v7.433h2.7a3.464 3.464 0 003.471-3.471V3.471A3.464 3.464 0 0015.541 0z"
        fill="#004077"
      />
    </Svg>
  );
}

export default SvgComponent;
