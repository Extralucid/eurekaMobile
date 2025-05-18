import React, { useState, useEffect } from "react";
import { Animated, Easing } from "react-native";
import { useDrawerStatus } from "@react-navigation/drawer";
import { interpolate, useAnimatedStyle } from "react-native-reanimated";
import { useTheme } from "styled-components/native";

/** Provides the scaling animation for drawer screens. */
const ScalableScreen: React.FC = ({ children }) => {
  const status = useDrawerStatus();
  let rotation :Animated.Value;
  let rotationDegrees: Animated.AnimatedInterpolation<number>;
  const theme = useTheme();
  const isOpened = status === "open"? 1: 0;

  // Track the scaling factor of the screen. 1 = full, 0 = invisible.
  //const [scale] = useState(new Animated.Value(1));
    const scale = new Animated.Value(interpolate(isOpened,[0, 1],[1, 0.8]));
    rotation = new Animated.Value(isOpened);
    const borderRadius =  new Animated.Value(interpolate(isOpened,  [0, 1], [1, 30]));
    rotationDegrees = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-10deg'],
        // outputRange: ['0rad', '6.28rad'],
      });


  useEffect(() => {
    const isClosed = status === "closed";
    rotationDegrees.addListener(console.log);
    
    const animation = Animated.timing(scale, {
      toValue: isClosed ? 1 : 0.75, // Play around with this value.
      duration: 250,
      easing: Easing.ease,
      useNativeDriver: false,
    });
    

    animation.start();

    return () => animation.stop();
  }, [status]);

  return (
    <Animated.View
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: theme.colors.background,
        borderRadius: borderRadius,
        transform: [{ scale }, {rotate: rotationDegrees}, { perspective: 1000 }],
      }}
    >
      {children}
    </Animated.View>
  );
};

export default ScalableScreen;