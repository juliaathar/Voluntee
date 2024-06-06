import * as React from 'react'
import { View, Animated, TextInput, StyleSheet } from 'react-native';
import Svg, { G, Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle)
const AnimatedInput = Animated.createAnimatedComponent(TextInput)

export const Eduardo = ({
    percentage = 80,
    radius = 40,
    toValue,
    strokeWidth = 10,
    duration = 500,
    color = 'green',
    delay = 0,
    textColor,
    max = 100,
    navigation

}) => {
    const animatedValue = React.useRef(new Animated.Value(0)).current;
    const circleRef = React.useRef()
    const inputRef = React.useRef()
    const halfCircle = radius + strokeWidth;
    const circleCircunference = 2 * Math.PI * radius;

    const animation = () => {
        return Animated.timing(animatedValue, {
            toValue,
            duration,
            delay,
            useNativeDriver: true,
        }).start(() => {
            animation(toValue === 0 ? percentage : 0)
        })
    }

    React.useEffect(() => {
        animation(percentage)

        animatedValue.addListener((v) => {
            if (circleRef?.current) {
                const maxPerc = (100 * v.value) / max
                const strokeDashoffset = circleCircunference - (circleCircunference * maxPerc) / 100

                circleRef.current.setNativeProps({
                    strokeDashoffset
                })
            }

            if (inputRef?.current) {
                inputRef.current.setNativeProps({
                    text: `${Math.round(v.value)}`
                })
            }
        })
        return (() => {
            animatedValue.removeAllListeners();
        }, [max, percentage]);
    })



    return (
        <View>

            <Svg
                width={radius * 2}
                height={radius * 2}
                viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2} `}
            >
                <G
                    rotation='-90'
                    origin={`${halfCircle}, ${halfCircle}`}
                >
                    <Circle
                        cx='50%'
                        cy='50%'
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        fill='transparent'
                        strokeOpacity={0.2}
                    />
                    <AnimatedCircle
                        cx='50%'
                        cy='50%'
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        fill='transparent'
                        strokeDasharray={circleCircunference}
                        strokeDashoffset={circleCircunference}
                        strokeLinecap='round'
                        ref={circleRef}
                    />
                </G>
            </Svg>

            <AnimatedInput
                ref={inputRef}
                underlineColorAndroid="transparent"
                editable={false}
                defaultValue='0'
                style={[
                    StyleSheet.absoluteFillObject,
                    { fontSize: radius / 2, color: textColor ?? color },
                    { fontWeight: '900', textAlign: 'center' },
                ]}
            />

        </View>
    )
}