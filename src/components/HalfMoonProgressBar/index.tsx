import React, { useRef, useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path, Circle, G } from "react-native-svg";

type Props = {
  currentValue: number;
  maxValue: number;
  radius?: number;
  strokeWidth?: number;
  color?: string;
};
const AnimatedPath = Animated.createAnimatedComponent(Path);

const HalfMoonProgressBar: React.FC<Props> = ({
  currentValue,
  maxValue,
  radius = 50,
  strokeWidth = 10,
  color = "blue",
}) => {
  const progress = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => {
    const strokeDashoffset = 2 * Math.PI * radius * (1 - progress.value);
    return {
      strokeDashoffset,
    };
  });

  useEffect(() => {
    progress.value = withTiming(
      Math.min((currentValue / maxValue) * 0.5, 0.5),
      {
        duration: 1000,
      }
    );
  }, [currentValue, maxValue, progress]);

  return (
    <Svg width={radius * 2} height={radius}>
      <G transform={`translate(${radius} ${radius})`}>
        <Circle
          r={radius - strokeWidth / 2}
          fill="none"
          stroke="lightgray"
          strokeWidth={strokeWidth}
        />
        <AnimatedPath
          animatedProps={animatedProps}
          d={`M ${-radius + strokeWidth / 2} 0 A ${radius - strokeWidth / 2} ${
            radius - strokeWidth / 2
          } 0 0 1 ${radius - strokeWidth / 2} 0`}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={2 * Math.PI * radius}
        />
      </G>
    </Svg>
  );
};

export default HalfMoonProgressBar;
