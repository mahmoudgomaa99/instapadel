import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 37.804;
const HEIGHT = 56.05;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, bgColor, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 37.804 56.05" {...props}>
      <Path
        data-name="Path 130"
        d="M233.1 21.851a3.443 3.443 0 103.443 3.443 3.443 3.443 0 00-3.443-3.443z"
        transform="translate(-63.903) translate(-142.09 -18.731)"
        fill={bgColor}
      />
      <Path
        data-name="Path 131"
        d="M214.424.065A6.558 6.558 0 10221 6.618a6.56 6.56 0 00-6.576-6.553zm0 10a3.443 3.443 0 113.443-3.443 3.443 3.443 0 01-3.443 3.448z"
        transform="translate(-63.903) translate(-123.414 -.056)"
        fill={bgColor}
      />
      <Path
        data-name="Path 132"
        d="M215.841 126.577a2.123 2.123 0 00-2.123-2.123h-.785L209.7 132.3a1.561 1.561 0 01-2.88 0l-3.23-7.854h-.775a2.121 2.121 0 00-2.123 2.114v17.01h15.136v-16.993z"
        transform="translate(-63.903) translate(-117.263 -106.678)"
        fill={bgColor}
      />
      <Path
        data-name="Path 133"
        d="M217.706 293.228h3.581v-7.236a1.56 1.56 0 113.119 0v7.236h3.581v-12.921H217.7v12.921z"
        transform="translate(-63.903) translate(-131.837 -240.288)"
        fill={bgColor}
      />
      <G data-name="Group 495" fill={bgColor}>
        <Path
          data-name="Path 134"
          d="M195.162 102.659h-1.818a1.551 1.551 0 00-1.431.96l-2.187 5.316-2.2-5.316a1.547 1.547 0 00-1.431-.96h-1.827a5.241 5.241 0 00-5.233 5.233v18.57a1.558 1.558 0 001.56 1.56h.868v14.472a1.558 1.558 0 001.56 1.56h13.4a1.558 1.558 0 001.56-1.56v-14.473h.858a1.558 1.558 0 001.56-1.56V107.9a5.25 5.25 0 00-5.239-5.241zm-.3 38.284h-3.581v-7.236a1.56 1.56 0 00-3.119 0v7.236h-3.581v-12.922h10.291v12.921zm-12.727-16.032V107.9a2.123 2.123 0 012.123-2.123h.785l3.23 7.854a1.561 1.561 0 002.88 0l3.23-7.845h.785a2.123 2.123 0 012.123 2.123v17.01h-15.152z"
          transform="translate(-63.903) translate(63.903) translate(-162.6 -88.003)"
        />
        <Path
          data-name="Path 135"
          d="M73.76 3.12a1.56 1.56 0 000-3.12h-8.3a1.558 1.558 0 00-1.56 1.56v52.93a1.558 1.558 0 001.56 1.56h8.3a1.56 1.56 0 100-3.119h-6.728v-4.366h6.728a1.56 1.56 0 100-3.119h-6.728v-4.578h3.212a1.56 1.56 0 000-3.119h-3.212V33.41h6.728a1.56 1.56 0 100-3.119h-6.728v-4.578h3.212a1.56 1.56 0 000-3.119h-3.212v-4.329h6.728a1.56 1.56 0 100-3.119h-6.728v-4.587h3.212a1.56 1.56 0 000-3.119h-3.212V3.055h6.728z"
          transform="translate(-63.903) translate(63.903) translate(-63.903)"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
