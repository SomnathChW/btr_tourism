import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import Animated, { SharedValue } from "react-native-reanimated";
import { DistrictTypes } from "@/data/district_data";

type Props = {
    item: DistrictTypes;
    index: number;
    scrollX: SharedValue<number>;
};

const { width, height } = Dimensions.get("screen");

const CarouselCard = ({ item, index, scrollX }: Props) => {
    return (
        <Animated.View style={[styles.card]}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textView}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>View on Map</Text>
            </View>
        </Animated.View>
    );
};

export default CarouselCard;

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        justifyContent: "center",
        width: width * 0.4,
        marginHorizontal: 10,
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 5,
        shadowOffset: { width: 10, height: 0 },
    },
    image: {
        width: width * 0.4,
        height: height * 0.3,
        borderRadius: 10,
    },
    textView: {
        position: "absolute",
        width: width * 0.4,
        height: height * 0.3,
        padding: 15,
        borderRadius: 10,
        justifyContent: "flex-end",
    },
    title: {
        fontFamily: "SfProMedium",
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        marginHorizontal: 5,
    },
    description: {
        fontFamily: "SfProMedium",
        fontSize: 12,
        color: "black",
        marginHorizontal: 5,
    },
});
