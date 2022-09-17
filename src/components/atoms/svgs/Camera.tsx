import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 24.091;
const HEIGHT = 18.928;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, bgColor, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);

  return (
    <Svg {...computedSize} viewBox="0 0 24.091 18.928" {...props}>
      <Path
        data-name="Path 22"
        d="M20.383 18.067a3.442 3.442 0 11-3.442-3.442 3.442 3.442 0 013.442 3.442z"
        transform="translate(-4.895 -7.742)"
        fill="#fff"
      />
      <Path
        data-name="Path 23"
        d="M23.759 9.067h-3.172a.782.782 0 01-.517-.267l-1.395-2.2a.834.834 0 00-.073-.1 2.4 2.4 0 00-1.833-.871h-4.948a2.4 2.4 0 00-1.832.871.834.834 0 00-.073.1L8.52 8.8a.7.7 0 01-.463.269V8.64a.86.86 0 00-.86-.86H5.905a.86.86 0 00-.86.86v.43H4.83a2.584 2.584 0 00-2.581 2.581v10.321a2.584 2.584 0 002.581 2.581h18.929a2.584 2.584 0 002.581-2.581V11.648a2.584 2.584 0 00-2.581-2.581zM14.3 21.112a5.162 5.162 0 115.162-5.162 5.162 5.162 0 01-5.162 5.162z"
        transform="translate(-2.249 -5.625)"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
