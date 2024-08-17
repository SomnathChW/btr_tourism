import { View, StyleSheet, LayoutChangeEvent } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import TabBarButton from "./TabBarButton";
import { useEffect, useState } from "react";
// import Animated, {
//     useAnimatedStyle,
//     useSharedValue,
//     withDelay,
//     withSpring,
//     withTiming,
// } from "react-native-reanimated"; // TODO: Use this for the tab indicator

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const [dimensions, setDimensions] = useState({ height: 20, width: 100 });
    const buttonWidth = dimensions.width / state.routes.length;

    const onTabBarLayout = (e: LayoutChangeEvent) => {
        setDimensions({
            height: e.nativeEvent.layout.height,
            width: e.nativeEvent.layout.width,
        });
    };

    // const tabPositionX = useSharedValue(0);
    // const tabIndicatorStyle = useAnimatedStyle(() => {
    //     return {
    //         transform: [{ translateX: tabPositionX.value }],
    //     };
    // }); // ! FIX: Fix the tab indicator initial position first

    return (
        <View onLayout={onTabBarLayout} style={styles.tabBar}>
            {/* <Animated.View
                style={[
                    {
                        position: "absolute",
                        backgroundColor: "#673ab7",
                        borderRadius: 15,
                        marginHorizontal: 15,
                        height: dimensions.height - 15,
                        width: buttonWidth - 30,
                    },
                    tabIndicatorStyle,
                ]}
            />     // TODO: Use this for the tab indicator*/}
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.title || route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    // tabPositionX.value = withSpring(buttonWidth * index, {
                    //     duration: 750,
                    //     dampingRatio: 0.7,
                    // }); // TODO: Allow this to work with the tab indicator
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    });
                };

                return (
                    <TabBarButton
                        key={route.name}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        isFocused={isFocused}
                        routeName={route.name}
                        color={isFocused ? "#673ab7" : "#222"}
                        label={label} //TODO: Fix the type error
                    />
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    // tabBar: {
    //     position: "absolute",
    //     bottom: 30,
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     backgroundColor: "#fff",
    //     marginHorizontal: 65,
    //     paddingVertical: 10,
    //     borderRadius: 20,
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 10,
    //     },
    //     shadowRadius: 10,
    //     shadowOpacity: 1,
    //     elevation: 3,
    // },
    tabBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 3,
    },
});
