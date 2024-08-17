import { Text, View } from "react-native";
import React from "react";

const Festivals = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text
                style={{
                    fontFamily: "SfProMedium",
                    fontSize: 40,
                }}
            >
                Festivals Tab
            </Text>
        </View>
    );
};

export default Festivals;
