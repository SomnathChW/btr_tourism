import { Text, View } from "react-native";
import React from "react";

const Attractions = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Text
                style={{
                    fontFamily: "SfProMedium",
                    fontSize: 40,
                }}
            >
                Attractions Tab
            </Text>
        </View>
    );
};

export default Attractions;
