import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 14.001;
const HEIGHT = 14.001;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 14.001 14.001" {...props}>
      <G fill="#81e200">
        <Path
          data-name="Path 111"
          d="M10.375 10.41a3.117 3.117 0 01-1.26-.242l-4.98-2.283a1.17 1.17 0 01-.76-.985 1.171 1.171 0 01.76-.985l5.024-2.3a3.214 3.214 0 012.43 0l5.027 2.3a1.17 1.17 0 01.76.985 1.171 1.171 0 01-.76.985l-4.981 2.282a3.117 3.117 0 01-1.26.243zM16.324 7z"
          transform="translate(-3.375 -3.375)"
        />
        <Path
          data-name="Path 112"
          d="M16.613 15.7l-.508-.23-1.3.6-3.163 1.454a3.114 3.114 0 01-1.26.243 3.1 3.1 0 01-1.259-.243l-3.171-1.455-1.306-.6-.512.231a1.173 1.173 0 00-.76.986 1.174 1.174 0 00.759.986l4.982 2.288a3.094 3.094 0 001.26.244 3.1 3.1 0 001.26-.243l4.976-2.287a1.172 1.172 0 00.763-.987 1.168 1.168 0 00-.762-.987z"
          transform="translate(-3.375 -3.375) translate(0 -6.319)"
        />
        <Path
          data-name="Path 113"
          d="M16.613 23.011l-.508-.23-1.3.6-3.163 1.453a3.122 3.122 0 01-1.26.243 3.11 3.11 0 01-1.259-.243l-3.171-1.455-1.306-.6-.512.231a1.02 1.02 0 000 1.973l4.981 2.287a3.351 3.351 0 002.518 0l4.978-2.285a1.02 1.02 0 000-1.973z"
          transform="translate(-3.375 -3.375) translate(0 -10.14)"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
