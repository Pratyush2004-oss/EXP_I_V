import { imageMap } from "@/assets/services/imageMap";
import { mixVector } from "@shopify/react-native-skia";
import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");
const OfferCard = ({ offer }: { offer: Offer }) => {
  return (
    <View style={styles.container}>
      <Image
        source={imageMap[offer.image]} // Adjust path as needed
        resizeMode="cover"
        style={{ width: 300, height: 120, borderRadius: 10, marginBottom: 12 }}
      />
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
        {offer.title}
      </Text>
      <Text style={{ fontSize: 14, color: "#666" }}>{offer.description}</Text>
    </View>
  );
};

interface Offer {
  id: number;
  title: string;
  description: string;
  image: string;
}
const OffersCarousel = () => {
  const offers = [
    {
      id: 1,
      title: "10% Discount",
      description: "Get 10% discount on all bookings",
      image: "@/assets/images/offer1.png", // Replace with actual image URL
    },
    {
      id: 2,
      title: "Upto 400 Rupees Cashback",
      description: "Get upto 400 rupees cashback on package bookings",
      image: "@/assets/images/gift.png",
    },
    // Add more offers here
  ];

  return (
    <View style={{ marginVertical: 10, flex: 1, alignItems: "center" }}>
      <Text style={styles.heading}>Exclusive Offers</Text>
      <Carousel
        width={width * 0.85}
        height={220}
        autoPlay
        scrollAnimationDuration={1200}
        style={styles.carousel}
        data={offers}
        renderItem={({ item }) => <OfferCard offer={item} />}
      />
    </View>
  );
};

export default OffersCarousel;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 15,
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#22223b",
    textAlign: "center",
    marginBottom: 18,
  },
  carousel: {
    alignSelf: "center",
  },
});
