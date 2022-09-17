import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 59.186;
const HEIGHT = 59.173;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);

  return (
    <Svg {...computedSize} viewBox="0 0 59.186 59.173" {...props}>
      <G data-name="Group 489">
        <Path
          data-name="Path 129"
          d="M82.806 38.393h-3a22.206 22.206 0 11-38.414 0h-3A7.4 7.4 0 0031 45.787V82.78a7.4 7.4 0 007.393 7.393h44.4a7.4 7.4 0 007.393-7.393V45.8a7.391 7.391 0 00-7.38-7.407zM60.6 67.993A18.5 18.5 0 1042.1 49.5a18.5 18.5 0 0018.5 18.493zm-.04-17.563l3.881-9.064a1.853 1.853 0 013.407 1.46L63.954 51.9a4.574 4.574 0 011.263 3.144 4.631 4.631 0 11-4.657-4.614z"
          fill="#004077"
          transform="translate(-31 -31)"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
