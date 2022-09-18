import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 15;
const HEIGHT = 18;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, bgColor, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg
      {...computedSize}
      viewBox="0 0 15 18"
      {...props}>
      <G fill="#81e200" data-name="Group 736">
        <Path
          data-name="Path 175"
          d="M3.487 1.125a.656.656 0 00-.719.562v16.875a.656.656 0 00.719.562.656.656 0 00.719-.562V1.687a.656.656 0 00-.719-.562z"
          transform="translate(-322.348 -346.683) translate(322.348 346.683) translate(-2.767 -1.125)"
        />
        <Path
          data-name="Path 176"
          d="M17.156 2.149a.562.562 0 00-.562 0 8.381 8.381 0 01-3.448.652 7.374 7.374 0 01-2.914-.838 7.189 7.189 0 00-2.807-.838 6.109 6.109 0 00-2.363.475v9.65a4.95 4.95 0 012.391-.607 6.311 6.311 0 012.362.72 8.347 8.347 0 003.375.934 9.444 9.444 0 003.937-.771.562.562 0 00.309-.5v-8.4a.562.562 0 00-.28-.477z"
          transform="translate(-322.348 -346.683) translate(322.348 346.683) translate(-2.437 -1.125)"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
