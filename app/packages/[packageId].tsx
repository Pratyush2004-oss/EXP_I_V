import React from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import RenderHTML from "react-native-render-html";

// Dummy data and icons
import { imageMap } from "@/assets/services/imageMap";
import { PACKAGES } from "@/assets/services/Text";
import PackageCard from "@/components/PackageCard";
import RajasthanMap from "@/components/RajasthanMaps";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import BookingCard from "@/components/BookingCard";
import BackHeader from "@/components/BackHeader";
const { width } = Dimensions.get("window");

// Placeholder for Map and BookingCard

export default function PackageDetailScreen() {
  // Get packageId from route.params
  const { packageId } = useLocalSearchParams();
  const Package = PACKAGES.find((pack) => pack.__id === packageId);

  if (!Package) return <Text>Package not found</Text>;

  return (
    <>
      <BackHeader />
      <ScrollView style={styles.container}>
        {/* Top Image with Title */}
        <View style={styles.imageContainer}>
          <ImageBackground
            source={
              imageMap[Package.image] || require("@/assets/images/logo.png")
            }
            style={styles.image}
            imageStyle={styles.imageStyle}
          >
            <View style={styles.imageOverlay} />
            <Text style={styles.imageTitle}>{Package.name}</Text>
          </ImageBackground>
        </View>

        <View style={styles.contentRow}>
          <View style={styles.leftCol}>
            {/* Overview */}
            {Package.Overview && Package.Overview.length > 0 && (
              <>
                <Text style={styles.sectionTitle}>Overview</Text>
                {Package.Overview.map((item, idx) => (
                  <Text style={styles.sectionText} key={idx}>
                    {item}
                  </Text>
                ))}
              </>
            )}

            {/* Highlights */}
            {Package.Highlights && Package.Highlights.length > 0 && (
              <>
                <Text style={styles.sectionTitle}>Highlights</Text>
                {Package.Highlights.map((item, idx) => (
                  <View style={styles.row} key={idx}>
                    <Ionicons
                      name="star"
                      size={16}
                      color="#9333ea"
                      style={{ marginRight: 6 }}
                    />
                    <Text style={styles.sectionText}>{item}</Text>
                  </View>
                ))}
              </>
            )}

            {/* Itinerary */}
            {Package.Itinerary && Package.Itinerary.length > 0 && (
              <>
                <Text style={styles.sectionTitle}>Itinerary</Text>
                {Package.Itinerary.map((item, idx) => (
                  <View key={idx} style={{ marginBottom: 8 }}>
                    <View style={styles.row}>
                      <Ionicons
                        name="star"
                        size={16}
                        color="#9333ea"
                        style={{ marginRight: 6 }}
                      />
                      <Text style={styles.itineraryTitle}>{item.name}</Text>
                    </View>
                    {/* <Text style={styles.sectionText}>{item.description}</Text> */}
                    <RenderHTML
                      contentWidth={width}
                      source={{ html: `<div>${item.description}</div>` }}
                      baseStyle={styles.sectionText}
                    />
                  </View>
                ))}
              </>
            )}

            {/* Inclusions */}
            {Package.Inclusion && Package.Inclusion.length > 0 && (
              <>
                <Text style={styles.sectionTitle}>Inclusions</Text>
                {Package.Inclusion.map((item, idx) => (
                  <View style={styles.row} key={idx}>
                    <Ionicons
                      name="star"
                      size={16}
                      color="#9333ea"
                      style={{ marginRight: 6 }}
                    />
                    <Text style={styles.sectionText}>{item}</Text>
                  </View>
                ))}
              </>
            )}

            {/* Exclusions */}
            {Package.Exclusion && Package.Exclusion.length > 0 && (
              <>
                <Text style={styles.sectionTitle}>Exclusions</Text>
                {Package.Exclusion.map((item, idx) => (
                  <View style={styles.row} key={idx}>
                    <Ionicons
                      name="star"
                      size={16}
                      color="#9333ea"
                      style={{ marginRight: 6 }}
                    />
                    <Text style={styles.sectionText}>{item}</Text>
                  </View>
                ))}
              </>
            )}

            {/* FAQs */}
            {Package.FAQs && Package.FAQs.length > 0 && (
              <>
                <Text style={styles.sectionTitle}>FAQs</Text>
                {Package.FAQs.map((item, idx) => (
                  <View key={idx} style={{ marginBottom: 8 }}>
                    <View style={styles.row}>
                      <Ionicons
                        name="star"
                        size={16}
                        color="#9333ea"
                        style={{ marginRight: 6 }}
                      />
                      <Text style={styles.itineraryTitle}>{item.name}</Text>
                    </View>
                    <Text style={styles.sectionText}>{item.description}</Text>
                  </View>
                ))}
              </>
            )}

            {/* Map */}
            <RajasthanMap />
          </View>

          {/* Booking Card */}
          <View style={styles.rightCol}>
            <BookingCard
              props={{
                PackageName: Package.name,
                PackageDays: Package.days ?? 0,
                PackagePrice: Package.Price ?? 0,
              }}
            />
          </View>
        </View>

        {/* Carousel of other packages */}
        <Text style={[styles.sectionTitle, { marginTop: 24, marginLeft: 20 }]}>
          Other Packages
        </Text>
        <Carousel
          width={width * 0.8}
          height={180}
          autoPlay
          data={PACKAGES.filter((p) => p.__id !== packageId)}
          scrollAnimationDuration={1200}
          style={{ alignSelf: "center" }}
          renderItem={({ item }) => <PackageCard pkg={item} expand={true} />}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f4f6",
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: 220,
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 220,
    justifyContent: "flex-end",
  },
  imageStyle: {
    borderRadius: 12,
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  imageTitle: {
    position: "absolute",
    bottom: 18,
    left: 16,
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textShadowColor: "#000",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
    backgroundColor: "rgba(0,0,0,0.18)",
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  contentRow: {
    paddingHorizontal: 15,
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
  sectionTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#22223b",
    marginTop: 16,
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 15,
    color: "#555",
    fontWeight:"600",
    marginBottom: 6,
    textAlign: "justify",
  },
  itineraryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6d28d9",
    marginBottom: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingEnd: 12,
    marginBottom: 4,
  },
  mapPlaceholder: {
    height: 120,
    backgroundColor: "#e0e7ef",
    borderRadius: 10,
    marginTop: 18,
    alignItems: "center",
    justifyContent: "center",
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
  carouselCard: {
    width: width * 0.75,
    height: 170,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 8,
    backgroundColor: "#eee",
    elevation: 2,
  },
  carouselImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  carouselTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    margin: 12,
    textShadowColor: "#000",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
});
