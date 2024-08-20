import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { CarouselTypes } from "@/data/slider_data";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
    Extrapolation,
    interpolate,
    SharedValue,
    useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
    item: CarouselTypes;
    index: number;
    scrollX: SharedValue<number>;
};

const { width, height } = Dimensions.get("screen");

const CarouselCard = ({ item, index, scrollX }: Props) => {
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: interpolate(
                        scrollX.value,
                        [
                            (index - 1) * width,
                            index * width,
                            (index + 1) * width,
                        ],
                        [-width * 0.2, 0, width * 0.2],
                        Extrapolation.CLAMP
                    ),
                },
                {
                    scale: interpolate(
                        scrollX.value,
                        [
                            (index - 1) * width,
                            index * width,
                            (index + 1) * width,
                        ],
                        [0.9, 1, 0.9],
                        Extrapolation.CLAMP
                    ),
                },
            ],
        };
    });
    const displayText =
        item.description.length > 50
            ? `${item.description.slice(0, 50)}...`
            : item.description;

    return (
        <Animated.View style={[styles.card, animatedStyle]}>
            <Image source={item.image} style={styles.image} />
            <LinearGradient
                colors={["transparent", " rgba(0, 0, 0, 0.6)"]}
                style={styles.textView}
            >
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{displayText}</Text>
            </LinearGradient>
        </Animated.View>
    );
};

export default CarouselCard;

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        justifyContent: "center",
        width,
        gap: 20,
    },
    image: {
        width: width * 0.8,
        height: height * 0.2,
        borderRadius: 10,
    },
    textView: {
        position: "absolute",
        width: width * 0.8,
        height: height * 0.2,
        padding: 15,
        borderRadius: 10,
        justifyContent: "flex-end",
    },
    title: {
        fontFamily: "SfProMedium",
        fontSize: 14,
        fontWeight: "bold",
        color: "white",
        letterSpacing: 1.2,
        marginHorizontal: 5,
    },
    description: {
        fontFamily: "SfProMedium",
        fontSize: 12,
        color: "white",
        marginVertical: 2,
        marginHorizontal: 5,
    },
});
