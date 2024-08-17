import React from "react";
import { Stack, Tabs } from "expo-router";
import { TabBar } from "@/components/TabBar";

const _layout = () => {
    return (
        <Tabs
            backBehavior="initialRoute"
            initialRouteName="index"
            tabBar={(props) => <TabBar {...props} />}
        >
            <Tabs.Screen
                name="attractions"
                options={{
                    title: "Attractions",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="festivals"
                options={{
                    title: "Festivals",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="cuisine"
                options={{
                    title: "Cuisine",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="souvenirs"
                options={{
                    title: "Souvenirs",
                    headerShown: false,
                }}
            />
        </Tabs>
    );
};

export default _layout;
