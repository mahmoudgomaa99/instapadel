import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 35;
const HEIGHT = 37;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, bgColor, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg
      {...computedSize}
      viewBox="0 0 35 37"
      {...props}>
      <Path
        data-name="Path 161"
        d="M275.7 391.154V382.4l1.659.272 1.659-.272v8.754z"
        transform="translate(-259.898 -358.127)"
        fill="#81e200"
      />
      <Path
        data-name="Path 162"
        d="M148.7 56.136c2.984 0 5.461-2.6 5.461-2.6 3.07-2.99 4.746-8.064 4.746-8.064 2.189-5.527 1.387-14.072 1.387-14.072h-23.2s-.795 8.545 1.394 14.072c0 0 1.676 5.081 4.746 8.064.001.001 2.479 2.6 5.466 2.6z"
        transform="translate(-131.234 -31.4)"
        fill="#81e200"
      />
      <Path
        data-name="Path 163"
        d="M405.063 69.24s5.729-2.865 5.708 2.746a15.7 15.7 0 01-3.178 9.019 15.913 15.913 0 01-7.072 4.839 27.144 27.144 0 001.819-3.29 12.373 12.373 0 005.58-6.8s2.381-6.391-2.993-4.119V69.24z"
        transform="translate(-375.772 -65.923)"
        fill="#81e200"
      />
      <Path
        data-name="Rectangle 1574"
        transform="translate(7.082 34.101)"
        fill="#81e200"
        d="M0 0H20.753V2.899H0z"
      />
      <Path
        data-name="Rectangle 1575"
        transform="translate(14.046 33.027)"
        fill="#81e200"
        d="M0 0H6.831V1.073H0z"
      />
      <Path
        data-name="Path 164"
        d="M58.229 47.871l1.365 2.767 3.053.444-2.209 2.153.521 3.041-2.73-1.436-2.729 1.435.522-3.041-2.209-2.153 3.053-.444z"
        transform="translate(-40.54 -42.261)"
        fill="#0a0a0a"
      />
      <Path
        data-name="Path 165"
        d="M406.23 69.24s-5.729-2.865-5.708 2.746a15.7 15.7 0 003.178 9.019 15.913 15.913 0 007.072 4.839 27.144 27.144 0 01-1.819-3.29 12.373 12.373 0 01-5.58-6.8s-2.381-6.391 2.993-4.119V69.24z"
        transform="translate(-400.522 -65.923)"
        fill="#81e200"
      />
    </Svg>
  );
}

export default SvgComponent;
