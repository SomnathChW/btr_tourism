import { Text, Pressable, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { icons } from "@/constants/icons";
import Animated, {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

const TabBarButton = ({
    onPress,
    onLongPress,
    isFocused,
    routeName,
    color,
    label,
}: {
    onPress: Function;
    onLongPress: Function;
    isFocused: boolean;
    routeName: string;
    color: string;
    label: string;
}) => {
    const focused = useSharedValue(0);

    useEffect(() => {
        focused.value = withSpring(
            typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
            { duration: 300 }
        );
    }, [focused, isFocused]);

    const animatedTextStyles = useAnimatedStyle(() => {
        const opacity = interpolate(focused.value, [0, 1], [1, 0]);
        return {
            opacity,
        };
    });

    const animatedIconStyles = useAnimatedStyle(() => {
        const scaleValue = interpolate(focused.value, [0, 1], [1, 1.5]);
        const top = interpolate(focused.value, [0, 1], [0, 8]);
        return {
            transform: [{ scale: scaleValue }],
            top,
        };
    });

    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
        >
            <Animated.View style={animatedIconStyles}>
                {icons[routeName]({
                    size: 24,
                    color: isFocused ? "#673ab7" : "#222",
                })}
            </Animated.View>
            <Animated.Text
                style={[
                    animatedTextStyles,
                    styles.tabBarText,
                    {
                        color: isFocused ? "#673ab7" : "#222",
                    },
                ]}
            >
                {label}
            </Animated.Text>
        </Pressable>
    );
};

export default TabBarButton;

const styles = StyleSheet.create({
    tabBarItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
    },
    tabBarText: {
        fontSize: 12,
        fontFamily: "SfProMedium",
    },
});
