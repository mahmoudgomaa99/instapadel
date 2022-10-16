import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 20;
const HEIGHT = 20;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, bgColor, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 20 20" {...props}>
      <Path
        data-name="Path 119"
        d="M21.167 11.166a3.333 3.333 0 10-3.307-2.922L10.149 12.1a3.333 3.333 0 100 4.8l7.711 3.855a3.333 3.333 0 10.995-1.987l-7.711-3.855a3.366 3.366 0 000-.822l7.711-3.855a3.317 3.317 0 002.312.93z"
        fill="#000d1e"
        transform="translate(-4.502 -4.5)"
      />
    </Svg>
  );
}

export default SvgComponent;
