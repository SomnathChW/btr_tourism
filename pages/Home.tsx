import { Text, View, StatusBar, StyleSheet, Dimensions } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { Ionicons } from "@expo/vector-icons";
import Carousel from "@/components/Carousel";
import CardList from "@/components/CardList";
import { carouselData } from "@/data/slider_data";
import { districtData } from "@/data/district_data";

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <LottieView
                            source={require("../assets/lottie/man_travel.json")}
                            autoPlay
                            loop
                            style={styles.lottie}
                        />
                        <Text style={styles.headingText}>Bodoland Tourism</Text>
                    </View>
                    <Ionicons name="menu" size={30} />
                </View>
                <Carousel itemList={carouselData} />
                <View style={styles.body}>
                    <View style={styles.subHeaddingView}>
                        <Text style={styles.subHeaddings}>Districts</Text>
                        <Text style={styles.links}>View More</Text>
                    </View>
                </View>
                <CardList itemList={districtData}></CardList>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        width: "100%",
        height: "100%", // Adjust as needed
    },
    content: {
        flex: 1,
        backgroundColor: "transparent",
        paddingTop: StatusBar.currentHeight,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    logo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    lottie: {
        width: Dimensions.get("window").width * 0.07,
        height: Dimensions.get("window").height * 0.07,
    },
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "SfProMedium",
    },
    body: {
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 10,
    },
    subHeaddingView: {
        justifyContent: "space-between",
        flexDirection: "row",
    },
    subHeaddings: {
        fontFamily: "SfProMedium",
        fontSize: 22,
        fontWeight: "bold",
    },
    links: {
        fontFamily: "SfProMedium",
        fontSize: 16,
        color: "#673ab7",
        paddingTop: 5,
    },
});
