import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 14.001;
const HEIGHT = 14.001;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, bgColor, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 14.001 14.001" {...props}>
      <Path
        data-name="Path 114"
        d="M3.5.438a.438.438 0 10-.875 0v.437H1.75A1.75 1.75 0 000 2.625V3.5h14v-.875a1.75 1.75 0 00-1.75-1.75h-.875V.438a.438.438 0 00-.875 0v.437h-7zM0 4.375h14v7.876A1.75 1.75 0 0112.251 14H1.75A1.75 1.75 0 010 12.251zm10.938 1.75a.438.438 0 00-.438.438v.875a.438.438 0 00.438.438h.875a.438.438 0 00.438-.438v-.875a.438.438 0 00-.438-.438z"
        fill="#81e200"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default SvgComponent;
