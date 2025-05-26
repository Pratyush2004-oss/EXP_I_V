import { imageMap } from "@/assets/services/imageMap";
import { ONEDAYTOUR } from "@/assets/services/Options"; // Adjust path as needed
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import RenderHTML from "react-native-render-html";
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
import BookingCard from "@/components/BookingCard";
import BackHeader from "@/components/BackHeader";

const { width } = Dimensions.get("window");

// Dummy BookingCard component

export default function CityPage() {
  const route = useRoute();
  const { cityName } = useLocalSearchParams(); // expects navigation param: { cityName }

  const cityData = ONEDAYTOUR.cities.find((city) => city.name === cityName);

  if (!cityData) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
    <BackHeader/>
    <ScrollView contentContainerStyle={styles.container}>
      {/* Banner/Carousel */}
      <View style={styles.carouselContainer}>
        <Carousel
          width={width}
          height={200}
          data={ONEDAYTOUR.images}
          autoPlay
          scrollAnimationDuration={1200}
          renderItem={({ item }) => (
            <Image
              source={imageMap[item.image]}
              style={styles.carouselImage}
              resizeMode="cover"
            />
          )}
        />
      </View>

      {/* Heading */}
      <Text style={styles.heading}>Overview</Text>

      {/* Overview and Booking Card */}
      <View style={styles.row}>
        <View style={styles.leftCol}>
          {cityData.Overview.map((item, idx) => (
            <View key={idx} style={styles.overviewBlock}>
              {item?.name ? (
                <View style={styles.overviewHeader}>
                  <MaterialCommunityIcons
                    name="star"
                    size={18}
                    color="#9333ea"
                    style={{ marginRight: 6 }}
                  />
                  <Text style={styles.overviewTitle}>{item.name}</Text>
                </View>
              ) : null}
              <RenderHTML
                contentWidth={width}
                source={{ html: `<div>${item.description}</div>` }}
                baseStyle={styles.overviewDesc}
              />
            </View>
          ))}
        </View>
        <View style={styles.rightCol}>
          <BookingCard
            props={{
              PackageName: cityData.name,
              PackageDays: 1,
              PackagePrice: 1800,
            }}
          />
        </View>
      </View>
    </ScrollView>
    </>
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
    height: 200,
    borderRadius: 12,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#22223b",
    textAlign: "center",
    marginBottom: 18,
    fontFamily: "serif",
    borderBottomWidth: 3,
    borderColor: "#a3a3a3",
    alignSelf: "center",
    width: "90%",
    paddingBottom: 8,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    paddingHorizontal: 8,
    gap: 8,
  },
  leftCol: {
    flex: 3,
    minWidth: "60%",
    paddingRight: 8,
  },
  rightCol: {
    flex: 2,
    minWidth: "35%",
    paddingLeft: 8,
  },
  overviewBlock: {
    marginBottom: 16,
  },
  overviewHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  overviewTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#9333ea",
    textTransform: "uppercase",
  },
  overviewDesc: {
    fontSize: 15,
    color: "#555",
    fontWeight: "500",
    textAlign: "justify",
    marginLeft: 8,
  },
  bookingCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 18,
    marginTop: 24,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  bookingTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#22223b",
    marginBottom: 8,
  },
  bookingText: {
    fontSize: 15,
    color: "#6b7280",
    marginBottom: 4,
  },
  bookingButton: {
    marginTop: 12,
    backgroundColor: "#9333ea",
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
