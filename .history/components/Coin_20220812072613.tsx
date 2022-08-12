import React, {useRef, useEffect} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';


const {height: WINDOW_HEIGHT} = Dimensions.get('window');

interface CoinProps {
  index: number;
  onComplete: (id: number) => void;
}

const Coin = ({index, onComplete}: CoinProps) => {
  const animatedValueY = useRef(new Animated.Value(WINDOW_HEIGHT / 2)).current;

  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(animatedValueY.value, [-100, 0], [2, 1], { extrapolateRight: Extrapolation.CLAMP });

    return {
      transform: [{ scale: scale }],
    };
  });

  useEffect(() => {
    Animated.timing(animatedValueY, {
      toValue: 5,
      duration: 500 + index * 70,
      useNativeDriver: true,
    }).start(() => onComplete(index));
  }, [animatedValueY, index]);

  return (
    <Animated.View
      style={[
        styles.container,
        {zIndex: index, position: 'absolute'},
        {
          transform: [
            {
              translateY: animatedValueY.interpolate({
                inputRange: [0, WINDOW_HEIGHT / 2 + index * 20],
                outputRange: [0, WINDOW_HEIGHT / 2 + index * 20],
              }),
            },
            {
              translateX: animatedValueY.interpolate({
                inputRange: [0, 100, 150, 200, WINDOW_HEIGHT / 2 + index * 20],
                outputRange: [200, 160, 140, 130, 120],
              }),
            },
          ],
          opacity: animatedValueY.interpolate({
            inputRange: [0, WINDOW_HEIGHT / 2 + index * 20],
            outputRange: [0, 1],
          }),
        },
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
