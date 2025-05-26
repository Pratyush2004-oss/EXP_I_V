import { HOTELSDATA } from "@/assets/services/Options"; // Adjust path as needed
import { imageMap } from "@/assets/services/imageMap";
import HotelCityScreen from "@/components/HotelListByCity";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

export default function HotelsScreen() {
  const [selectedHotel, setselectedHotel] = useState<string | null>(null);
  return (
    <FlatList
      data={[]}
      ListHeaderComponent={() => (
        <>
          {/* Banner/Carousel */}
          <View style={styles.carouselContainer}>
            <Carousel
              width={width}
              height={200}
              data={HOTELSDATA.images}
              autoPlay
              scrollAnimationDuration={1200}
              renderItem={({ item }) => {
                // If item is a string, treat as URL; if object with 'image', use its image property; else assume it's a valid ImageSourcePropType
                return (
                  <>
                    <Image
                      source={imageMap[item.image]}
                      style={styles.carouselImage}
                      resizeMode="cover"
                    />
                  </>
                );
              }}
            />
          </View>

          {selectedHotel ? (
            <HotelCityScreen
              city={selectedHotel}
              setSelectedCity={setselectedHotel}
            />
          ) : (
            <>
              {/* Heading */}
              <Text style={styles.heading}>Hotels</Text>

              {/* Grid of Hotel Cities */}
              <FlatList
                data={HOTELSDATA.hotels}
                keyExtractor={(item, idx) => item.city || idx.toString()}
                contentContainerStyle={styles.grid}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.card}
                    activeOpacity={0.85}
                    onPress={() => setselectedHotel(item.city)}
                  >
                    <Image
                      source={
                        typeof item.hotels[0].image === "string"
                          ? { uri: item.hotels[0].image }
                          : item.hotels[0].image
                      }
                      style={styles.cardImage}
                      resizeMode="cover"
                    />
                    <Text style={styles.cardTitle}>{item.city}</Text>
                  </TouchableOpacity>
                )}
              />
            </>
          )}
        </>
      )}
      renderItem={undefined}
    />
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
  },
  grid: {
    paddingHorizontal: 8,
    gap: 12,
  },
  card: {
    flex: 1,
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
    minWidth: width - 40,
    maxWidth: width - 40,
    marginHorizontal: "auto",
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 14,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#22223b",
    textAlign: "center",
    marginTop: 8,
    fontFamily: "serif",
  },
});
