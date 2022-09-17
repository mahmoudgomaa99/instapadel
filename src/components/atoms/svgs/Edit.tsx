import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import COLORS from 'values/colors';
import {TSvgProps} from '..';
const WIDTH = 144;
const HEIGHT = 144;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, bgColor, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 48 48" {...props}>
      <Path
        fill={COLORS.black}
        d="M38.657 18.536l2.44-2.44a6.509 6.509 0 000-9.193c-1.227-1.226-2.858-1.9-4.597-1.9s-3.371.675-4.597 1.901l-2.439 2.439 9.193 9.193zm-11.314-7.072L9.274 29.533a3.51 3.51 0 00-.848 1.375l-3.35 10.121a1.498 1.498 0 001.896 1.895l10.118-3.351c.517-.17.993-.463 1.378-.849l18.068-18.068-9.193-9.192z"
      />
    </Svg>
  );
}

export default SvgComponent;
