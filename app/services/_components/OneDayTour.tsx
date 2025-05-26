import { ONEDAYTOUR } from "@/assets/services/Options"; // Adjust path as needed
import { imageMap } from "@/assets/services/imageMap";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

export default function OneDayTourScreen() {
  const router = useRouter();

  return (
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
      <Text style={styles.heading}>One Day Tour</Text>

      {/* Grid of City Cards */}
      <FlatList
        data={ONEDAYTOUR.cities}
        keyExtractor={(item, idx) => item.name || idx.toString()}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={imageMap[item.image]}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardDesc}>Special Day Tour</Text>
            <TouchableOpacity style={styles.button} onPress={() => {router.push({
              pathname: "/services/city/[city]",
              params: { cityName: item.name },
            })}}>
              <Text style={styles.buttonText}>View Package</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </ScrollView>
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
    fontSize: 28,
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
  grid: {
    paddingHorizontal: 8,
    gap: 12,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    margin: 8,
    padding: 10,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    width: width - 40,
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 14,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#22223b",
    textAlign: "center",
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 11,
    color: "#6366f1",
    fontWeight: "bold",
    fontFamily: "monospace",
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#374151",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginTop: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});
