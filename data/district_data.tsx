import { ImageSourcePropType } from "react-native";

export type DistrictTypes = {
    title: string;
    image: ImageSourcePropType;
    location: string;
};

export const districtData = [
    {
        title: "Kokrajhar",
        image: require("@/assets/images/app_images/manas-national-park.jpg"),
        location:
            "https://www.google.com/maps/search/?api=1&query=Kokrajhar+District",
    },
    {
        title: "Chirang",
        image: require("@/assets/images/app_images/chakrasila-wildlife-sanctuary.jpg"),
        location:
            "https://www.google.com/maps/search/?api=1&query=Chirang+District",
    },
    {
        title: "Baksa",
        image: require("@/assets/images/app_images/bogamati.jpg"),
        location:
            "https://www.google.com/maps/search/?api=1&query=Baksa+District",
    },
    {
        title: "Udalguri",
        image: require("@/assets/images/app_images/raimona-national-park.jpg"),
        location:
            "https://www.google.com/maps/search/?api=1&query=Udalguri+District",
    },
    {
        title: "Tamulpur",
        image: require("@/assets/images/app_images/chakrasila-wildlife-sanctuary.jpg"),
        location:
            "https://www.google.com/maps/search/?api=1&query=Tamulpur+District",
    },
];
