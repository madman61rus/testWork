import React, { useRef, useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
  withTiming
} from 'react-native-reanimated';


const { height: WINDOW_HEIGHT } = Dimensions.get('window');

interface CoinProps {
  index: number;
  onComplete: (id: number) => void;
}

const Coin = ({ index, onComplete }: CoinProps) => {
 
  const animatedValueY = useSharedValue(WINDOW_HEIGHT / 2);

  const animatedStyles = useAnimatedStyle(() => {
    const translateY = interpolate(animatedValueY.value, [0, WINDOW_HEIGHT / 2 + index * 20], [0, WINDOW_HEIGHT / 2 + index * 20], {});
    const translateX = interpolate(animatedValueY.value, [0, 100, 150, 200, WINDOW_HEIGHT / 2 + index * 20], [200, 160, 140, 130, 120], {});
    const opacity = interpolate(animatedValueY.value, [0, WINDOW_HEIGHT / 2 + index * 20], [0, 1], {});

    return {
      transform: [
        {
          translateY
        },
        {
          translateX
        },
      ],
      opacity
    }
  });

  useEffect(() => {
    animatedValueY.value =
      withTiming(5, {
        duration: 500 + index * 70,
      })
  }, []);

  console.log('index', index, 'animatedValueY.value', animatedValueY.value)


  return (
    <Animated.View
      style={[
        styles.container,
        { zIndex: index, position: 'absolute' },
        animatedStyles
        ,
      ]}></Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
    zIndex: 100,
  },
});

export default Coin;
