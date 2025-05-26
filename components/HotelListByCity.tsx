import { HOTELSDATA } from "@/assets/services/Options"; // Adjust path as needed
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
    Dimensions,
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

type HotelItemType = {
  name: string;
  image: string;
  desc: string;
};

const { width } = Dimensions.get("window");

export default function HotelCityScreen({
  city,
  setSelectedCity,
}: {
  city: string;
  setSelectedCity: (city: string | null) => void;
}) {
  const [hotelData, setHotelData] = useState<HotelItemType[]>([]);

  useEffect(() => {
    const data = HOTELSDATA.hotels.find((hotel) => hotel.city === city);
    setHotelData(data ? data.hotels : []);
  }, [city]);

  return (
    <View>
      {/* Heading */}
      <Text style={styles.heading}>{city} Hotels</Text>
      <Pressable onPress={() => setSelectedCity(null)} style={{
        position: "absolute",
        top: 5,
        left: 20
      }}>
        <Ionicons name="close-circle-outline" size={30} color="#22223b" />
      </Pressable>

      {/* List of Hotels */}
      <FlatList
        data={hotelData}
        keyExtractor={(item, idx) => item.name || idx.toString()}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={
                typeof item.image === "string"
                  ? { uri: item.image }
                  : item.image
              }
              style={styles.cardImage}
              resizeMode="cover"
            />
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardDesc} numberOfLines={6}>{item.desc}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
  cardImage: {
    width: width * 0.85,
    height: 140,
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
  cardDesc: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "justify",
    marginTop: 6,
    marginBottom: 4,
    paddingHorizontal: 6,
  },
});
