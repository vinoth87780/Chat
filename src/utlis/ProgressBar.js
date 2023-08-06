import {View, Text, Animated, StyleSheet} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {Colors} from '../theme/Colors';

const ProgressBar = ({setTimeUp}) => {
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const animateProgress = () => {
    Animated.timing(progressAnimation, {
      toValue: 100,
      duration: 10000,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        setTimeUp();
        console.log('Animation stopped and progress bar is fulls');
      }
    });
  };
  useEffect(() => {
    animateProgress();
  }, []);

  return (
    <View style={{marginTop: 10}}>
      <View
        style={{
          width: '100%',
          height: 5,
          backgroundColor: Colors.tertiary,
          borderRadius: 5,
        }}>
        <Animated.View
          style={[
            styles.Loading,

            {
              width: progressAnimation.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  Loading: {
    height: 5,
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
});
