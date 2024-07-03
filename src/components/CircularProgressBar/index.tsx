import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

type Props = {
  currentValue: number;
  maxValue: number;
  radius?: number;
  strokeWidth?: number;
  color?: string;
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularProgressBar: React.FC<Props> = ({
  currentValue,
  maxValue,
  radius = 50,
  strokeWidth = 10,
  color = "blue",
}) => {
  const progress = useSharedValue(0);

  if (currentValue > maxValue) {
    currentValue = maxValue;
  }

  const animatedProps = useAnimatedProps(() => {
    const strokeDashoffset = 2 * Math.PI * radius * (1 - progress.value);
    return {
      strokeDashoffset,
    };
  });

  useEffect(() => {
    progress.value = withTiming(currentValue / maxValue, {
      duration: 1300,
    });
  }, [currentValue, maxValue, progress]);

  return (
    <Svg width={radius * 2} height={radius * 2}>
      <Circle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        fill="none"
        stroke="lightgray"
        strokeWidth={strokeWidth}
      />
      <AnimatedCircle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={2 * Math.PI * radius}
        animatedProps={animatedProps}
      />
    </Svg>
  );
};

export default CircularProgressBar;
