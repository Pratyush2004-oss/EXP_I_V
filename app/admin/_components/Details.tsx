import { API_URL } from "@/assets/services/API"; // Adjust path as needed
import { Colors } from "@/constants/Colors";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function Details({ token }: { token: string }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/api/v1/query/getDetails`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 400) throw new Error(response.data.message);
      setDetails(response.data.details);
    } catch (error) {
      // Optionally handle error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [token]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#9333ea" />
      </View>
    );
  }

  if (!details) return null;

  const data = Object.keys(details).map((key) => ({
    key,
    value: details[key],
  }));

  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.grid}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{item.key}</Text>
          <Text style={styles.cardValue}>{item.value}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  grid: {
    paddingHorizontal: 16,
    justifyContent: "center",
    height:100,
    backgroundColor: Colors.GRAY,
    borderRadius: 16,
  },
  card: {
    flex: 1,
    margin: 8,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
    elevation: 3,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#22223b",
    textAlign: "center",
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 16,
    color: "#6b7280",
    textAlign: "center",
    fontWeight: "bold",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
