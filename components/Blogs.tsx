import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { BLOGS } from "@/assets/services/Options"; // Adjust path as needed

const { width } = Dimensions.get("window");

export default function Blogs() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Travel Blogs</Text>
      <Carousel
        width={width * 0.85}
        height={220}
        autoPlay
        data={BLOGS}
        scrollAnimationDuration={1200}
        style={styles.carousel}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.blogTitle}>{item.BlogTitle}</Text>
            <Text style={styles.metaTitle}>{item.MetaTitle}</Text>
            <Text style={styles.metaDesc}>{item.MetaDescription}</Text>
            <Text style={styles.contentSummary}>{item.ContentSummary}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 24,
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
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 18,
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    height: 200,
    justifyContent: "space-between",
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#22223b",
    marginBottom: 4,
  },
  metaTitle: {
    color: "#7c3aed",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 2,
  },
  metaDesc: {
    color: "#4b5563",
    fontSize: 13,
    marginBottom: 4,
  },
  contentSummary: {
    color: "#6b7280",
    fontSize: 12,
  },
});