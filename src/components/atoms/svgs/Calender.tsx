import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 17;
const HEIGHT = 17;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, bgColor, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 17 17" {...props}>
      <Path
        d="M16.821 3.465h-.607v-.59a.619.619 0 00-.578-.623.607.607 0 00-.636.605v.607H6.5v-.59a.619.619 0 00-.578-.623.607.607 0 00-.636.606v.607h-.607A2.429 2.429 0 002.25 5.893v10.929a2.429 2.429 0 002.429 2.429h12.142a2.429 2.429 0 002.429-2.429V5.893a2.429 2.429 0 00-2.429-2.428zM6.2 16.822a.911.911 0 11.911-.911.911.911 0 01-.911.911zm0-3.036a.911.911 0 11.911-.911.911.911 0 01-.911.911zm3.036 3.036a.911.911 0 11.911-.911.911.911 0 01-.915.911zm0-3.036a.911.911 0 11.911-.911.911.911 0 01-.915.911zm3.036 3.036a.911.911 0 11.911-.911.911.911 0 01-.915.911zm0-3.036a.911.911 0 11.911-.911.911.911 0 01-.915.911zm0-3.036a.911.911 0 11.911-.911.911.911 0 01-.915.912zm3.028 3.036a.911.911 0 11.911-.911.911.911 0 01-.911.911zm0-3.036a.911.911 0 11.911-.911.911.911 0 01-.911.912zm2.736-4.55v.6a.3.3 0 01-.3.3H3.768a.3.3 0 01-.3-.3v-.907a1.218 1.218 0 011.211-1.215h12.142a1.218 1.218 0 011.214 1.214z"
        transform="translate(-2.25 -2.251)"
        fill="#004077"
      />
    </Svg>
  );
}

export default SvgComponent;
