import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function Eduardo({
    percentage = 50,
    radius = 80,
    strokeWidth = 10,
    duration = 500,
    color = "#FFFFFF",
    delay = 0,
    textColor = "#FFFFFF",
    max = 100
}) {
    const animatedValue = useRef(new Animated.Value(0)).current;
    const circleRef = useRef();
    const halfCircle = radius + strokeWidth;
    const circleCircumference = 2 * Math.PI * radius;
    const semicircleCircumference = circleCircumference / 2;

    const animation = (toValue) => {
        return Animated.timing(animatedValue, {
            toValue,
            duration,
            delay,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        animation(percentage);

        const listener = animatedValue.addListener((v) => {
            if (circleRef?.current) {
                const maxPerc = (100 * v.value) / max;
                const strokeDashoffset = semicircleCircumference - (semicircleCircumference * maxPerc) / 100;
                circleRef.current.setNativeProps({
                    strokeDashoffset,
                });
            }
        });

        return () => {
            animatedValue.removeListener(listener);
        };
    }, [max, percentage]);

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Svg width={radius * 2} height={radius} viewBox={`0 0 ${halfCircle * 2} ${halfCircle}`}>
                <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
                    <Circle
                        cy="50%"
                        cx="50%"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        fill="transparent"
                        strokeOpacity={0.2}
                        strokeDasharray={semicircleCircumference}
                    />
                    <AnimatedCircle
                        ref={circleRef}
                        cy="50%"
                        cx="50%"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        fill="transparent"
                        strokeDasharray={semicircleCircumference}
                        strokeDashoffset={semicircleCircumference}
                        strokeLinecap="round"
                    />
                </G>
            </Svg>
            <View style={StyleSheet.absoluteFill}>
                <Text style={[styles.text, { color: textColor }]}>
                    {`${Math.round((percentage / max) * 100)}`}
                </Text>
                <Text style={[styles.text, { color: textColor }]}>
                    Level
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        position: 'absolute',
        top: '40%',  // Adjusted to position text in the middle of the semicircle
    },
});
