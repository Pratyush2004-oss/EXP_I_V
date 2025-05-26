import { API_URL } from "@/assets/services/API";
import { imageMap } from "@/assets/services/imageMap";
import { IMAGES } from "@/assets/services/Images";
import { CAROUSELIMAGE } from "@/assets/services/Options"; // Adjust import as needed
import { BOOKINGTYPE } from "@/assets/services/types";
import { useAuthStore } from "@/assets/store/auth.store";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

export default function BookingsScreen() {
  const [bookings, setBookings] = useState<BOOKINGTYPE[]>([]);
  const [loading, setLoading] = useState(false);
  const { token } = useAuthStore();

  // Replace with your API URL and token logic

  const getBookings = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_URL}/api/v1/booking/get-bookings`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 400) throw new Error(response.data.message);
      setBookings(response.data.bookings);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookings();
  }, []);

  return (
    <View style={styles.container}>
      {/* Carousel Banner */}
      <View style={styles.carouselContainer}>
        <Carousel
          width={width}
          height={180}
          data={CAROUSELIMAGE}
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

      <Text style={styles.heading}>Bookings</Text>

      {loading && (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#22c55e" />
        </View>
      )}

      {!loading && bookings.length === 0 && (
        <Text style={styles.noBookings}>No Bookings Found</Text>
      )}

      {!loading && bookings.length > 0 && (
        <FlatList
          data={bookings}
          keyExtractor={(_, idx) => idx.toString()}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                source={
                  imageMap[IMAGES[Math.floor(Math.random() * IMAGES.length)]] ||
                  require("@/assets/images/logo.png")
                }
                style={styles.cardImage}
                resizeMode="cover"
              />
              <Text style={styles.cardTitle}>{item.PackageName}</Text>
              <View style={styles.cardDetails}>
                <View style={styles.detailGrid}>
                  <Text style={styles.detailGridItem}>
                    Start Date: {String(item.startDate).split("T")[0]}
                  </Text>
                  <Text style={styles.detailGridItem}>
                    Days: {item.PackageDays}
                  </Text>
                  <Text style={styles.detailGridItem}>
                    Price: ₹ {item.PackagePrice}
                  </Text>
                  <Text style={styles.detailGridItem}>
                    Number of People: {item.people}
                  </Text>
                </View>
                {Array.isArray(item.PlaceList) && item.PlaceList.length > 0 && (
                  <Text style={styles.detailText}>
                    Places: {item.PlaceList.join(", ")}
                  </Text>
                )}
                {Array.isArray(item.AdventureList) &&
                  item.AdventureList.length > 0 && (
                    <Text style={styles.detailText}>
                      Adventures: {item.AdventureList.join(", ")}
                    </Text>
                  )}
                {item.hotel && (
                  <Text style={styles.detailText}>Hotel: {item.hotel}</Text>
                )}
                {item.paymentStatus &&
                item.paymentStatus.order_id &&
                item.paymentStatus.payment_id ? (
                  <Text style={[styles.detailText, { color: "#22c55e" }]}>
                    Payment Status: Paid
                  </Text>
                ) : (
                  <Text style={[styles.detailText, { color: "#ef4444" }]}>
                    Payment Status: Payment Pending
                  </Text>
                )}
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  carouselContainer: {
    width: "100%",
    marginBottom: 10,
  },
  carouselImage: {
    width: width,
    height: 180,
    borderRadius: 12,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#22223b",
    textAlign: "center",
    marginVertical: 16,
    fontFamily: "serif",
  },
  centered: {
    alignItems: "center",
    marginVertical: 24,
  },
  noBookings: {
    fontSize: 20,
    color: "#ef4444",
    textAlign: "center",
    marginVertical: 24,
    fontWeight: "bold",
    fontFamily: "monospace",
  },
  listContent: {
    paddingHorizontal: 12,
    paddingBottom: 24,
  },
  detailGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  detailGridItem: {
    width: "50%",
    fontSize: 15,
    color: "#374151",
    textAlign: "center",
    marginVertical: 5,
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    marginBottom: 18,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardImage: {
    width: "100%",
    height: 160,
    borderRadius: 16,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
    marginBottom: 10,
    paddingBottom: 6,
  },
  cardDetails: {
    flexDirection: "column",
    gap: 6,
  },
  detailText: {
    fontSize: 15,
    color: "#374151",
    textAlign: "center",
    marginBottom: 2,
    fontWeight: "600",
  },
});
