import { ImageSourcePropType } from "react-native";

export type CarouselTypes = {
    title: string;
    image: ImageSourcePropType;
    description: string;
};

export const carouselData = [
    {
        title: "Manas National Park",
        image: require("@/assets/images/app_images/manas-national-park.jpg"),
        description:
            "A UNESCO World Heritage Site in Assam, India, famous for its national park, tiger reserve, and rich wildlife.",
    },
    {
        title: "Chakrasila Wildlife Sanctuary",
        image: require("@/assets/images/app_images/chakrasila-wildlife-sanctuary.jpg"),
        description:
            "A wildlife sanctuary in Assam, India, known for its rich biodiversity and endangered golden langurs.",
    },
    {
        title: "Bogamati",
        image: require("@/assets/images/app_images/bogamati.jpg"),
        description:
            "A scenic picnic spot in Assam, India, located on the banks of the Barnadi River, surrounded by hills and forests.",
    },
    {
        title: "Dheer beel",
        image: require("@/assets/images/app_images/raimona-national-park.jpg"),
        description: "A beautiful Hill",
    },
    {
        title: "Diplaibeel",
        image: require("@/assets/images/app_images/manas-national-park.jpg"),
        description: "Lorem ipsum dolor set amet"
    },
    {
        title: "Raimona National Park",
        image: require("@/assets/images/app_images/raimona-national-park.jpg"),
        description:
            "A national park in Assam, India, known for its lush forests and diverse wildlife, including elephants and hornbills.",
    },
    {
        title: "Manas National Park",
        image: require("@/assets/images/app_images/manas-national-park.jpg"),
        description:
            "A UNESCO World Heritage Site in Assam, India, famous for its national park, tiger reserve, and rich wildlife.",
    },
    {
        title: "Chakrasila Wildlife Sanctuary",
        image: require("@/assets/images/app_images/chakrasila-wildlife-sanctuary.jpg"),
        description:
            "A wildlife sanctuary in Assam, India, known for its rich biodiversity and endangered golden langurs.",
    },
    {
        title: "Bogamati",
        image: require("@/assets/images/app_images/bogamati.jpg"),
        description:
            "A scenic picnic spot in Assam, India, located on the banks of the Barnadi River, surrounded by hills and forests.",
    },
    {
        title: "Raimona National Park",
        image: require("@/assets/images/app_images/raimona-national-park.jpg"),
        description:
            "A national park in Assam, India, known for its lush forests and diverse wildlife, including elephants and hornbills.",
    },
];
