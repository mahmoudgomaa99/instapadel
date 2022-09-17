import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 15.755;
const HEIGHT = 15.772;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, bgColor, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 15.755 15.772" {...props}>
      <Path
        d="M15.455 8.561a.986.986 0 01-.723.3.973.973 0 01-.715-.292l-.231-.231v6.447a.958.958 0 01-.285.692.939.939 0 01-.7.292H9.847v-4.43a.5.5 0 00-.492-.492H6.4a.5.5 0 00-.492.492v4.431H2.954a.939.939 0 01-.7-.292.957.957 0 01-.284-.693V8.338l-.231.231a.973.973 0 01-.715.292.986.986 0 01-.723-.3A.986.986 0 010 7.838a.973.973 0 01.292-.715L7.124.291A.975.975 0 017.878 0a.975.975 0 01.754.292l6.831 6.831a.973.973 0 01.292.715.986.986 0 01-.3.723z"
        transform="translate(0 .002)"
        fill={bgColor}
      />
    </Svg>
  );
}

export default SvgComponent;
