import { imageMap } from "@/assets/services/imageMap";
import { SERVICES } from "@/assets/services/Options"; // Adjust path as needed
import BackHeader from "@/components/BackHeader";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

export default function ServiceDetails() {
  const { serviceId } = useLocalSearchParams(); // expects navigation param: { service: id }
  const selectedService = SERVICES.find((item) => item.__id === serviceId);

  if (!selectedService) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    selectedService && (
      <>
      <BackHeader />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Image carousel/banner */}
        <View style={styles.carouselContainer}>
          <Carousel
            width={width}
            height={220}
            data={selectedService.image}
            autoPlay
            scrollAnimationDuration={1200}
            renderItem={({ item }) => (
              <Image
                source={
                  imageMap[item.image] || require("@/assets/images/logo.png")
                }
                style={styles.carouselImage}
                resizeMode="cover"
              />
            )}
          />
        </View>

        {/* Service Name */}
        <Text style={styles.heading}>{selectedService.name}</Text>

        {/* Overview Card */}
        <View style={styles.card}>
          <Text style={styles.overview}>{selectedService.Overview}</Text>
        </View>
      </ScrollView>
      </>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
  },
  carouselContainer: {
    width: "100%",
    marginBottom: 18,
  },
  carouselImage: {
    width: width,
    height: 220,
    borderRadius: 12,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#22223b",
    textAlign: "center",
    marginBottom: 18,
    fontFamily: "serif",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 18,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    width: "92%",
  },
  overview: {
    fontSize: 15,
    color: "#555",
    fontWeight: "500",
    textAlign: "justify",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
