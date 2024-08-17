import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import React from "react";
import { CarouselTypes } from "@/data/slider_data";
import CarouselCard from "./CarouselCard";
import Animated, {
    useAnimatedScrollHandler,
    useSharedValue,
} from "react-native-reanimated";

type Props = {
    itemList: CarouselTypes[];
};

const { width } = Dimensions.get("screen");

const Carousel = ({ itemList }: Props) => {
    const scrollX = useSharedValue(0);

    const onScrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollX.value = event.contentOffset.x;
        },
    });

    return (
        <View>
            <Animated.FlatList
                data={itemList}
                renderItem={({ item, index }) => (
                    <CarouselCard item={item} index={index} scrollX={scrollX} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={onScrollHandler}
                removeClippedSubviews={false}
                initialScrollIndex={1}
                getItemLayout={(data, index) => ({
                    length: width,
                    offset: width * index,
                    index,
                })}
            />
        </View>
    );
};

export default Carousel;
