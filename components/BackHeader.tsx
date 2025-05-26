import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function BackHeader() {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
      <Ionicons name="arrow-back" size={24} color="#22223b" />
      <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  backText: {
    marginLeft: 6,
    fontSize: 16,
    color: "#22223b",
    fontWeight: "bold",
  },
});