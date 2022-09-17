import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 16;
const HEIGHT = 18;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;
function SvgComponent({size, bgColor, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);

  return (
    <Svg {...computedSize} viewBox="0 0 16 18" {...props}>
      <G opacity={0.6} fill={bgColor}>
        <Path
          data-name="Path 47"
          d="M19.05 16.442l-.183-.167a7.927 7.927 0 01-1.348-1.631 7.226 7.226 0 01-.725-2.677V9.218a5.947 5.947 0 00-5.068-5.982v-.718a.717.717 0 10-1.434 0v.729a5.95 5.95 0 00-5.008 5.971v2.749a7.226 7.226 0 01-.725 2.677 7.95 7.95 0 01-1.326 1.631l-.183.167v1.569h16z"
          transform="translate(-3.05 -1.775)"
        />
        <Path
          data-name="Path 48"
          d="M15.32 32a1.4 1.4 0 002.78 0z"
          transform="translate(-8.711 -15.209)"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
