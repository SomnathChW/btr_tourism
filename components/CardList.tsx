import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import React from "react";
import CardHorizontal from "./CardHorizontal";
import Animated, {
    useAnimatedScrollHandler,
    useSharedValue,
} from "react-native-reanimated";
import { DistrictTypes } from "@/data/district_data";

type Props = {
    itemList: DistrictTypes[];
};

const CardList = ({ itemList }: Props) => {
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
                    <CardHorizontal
                        item={item}
                        index={index}
                        scrollX={scrollX}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={onScrollHandler}
                removeClippedSubviews={false}
                style={styles.flatList}
            />
        </View>
    );
};

export default CardList;

const styles = StyleSheet.create({
    flatList: {},
});
