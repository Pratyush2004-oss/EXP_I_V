import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';

const PARTNERS = [
  { name: "Ola", image: require("@/assets/images/ola.png") },
  { name: "Uber", image: require("@/assets/images/uber.png") },
  { name: "Zepto", image: require("@/assets/images/zepto.png") },
  { name: "Rapido", image: require("@/assets/images/Rapido.png") },
  { name: "Amazon", image: require("@/assets/images/amazon.png") },
  { name: "Flipkart", image: require("@/assets/images/flipkart.png") },
  { name: "Ajio", image: require("@/assets/images/ajio.png") },
  { name: "Myntra", image: require("@/assets/images/myntra.png") },
  { name: "MakeMyTrip", image: require("@/assets/images/makemytrip.png") },
  { name: "HappyEasyGo", image: require("@/assets/images/happyeasygo.png") },
  { name: "RailYatri", image: require("@/assets/images/railyatri.png") },
];

export default function Partners() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Affiliate Partners</Text>
      <Text style={styles.subtitle}>We thank our partners for powering our services</Text>
      <FlatList
        data={PARTNERS}
        numColumns={3}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <View style={styles.partnerItem}>
            <Image source={item.image} style={styles.partnerLogo} resizeMode="contain" />
            <Text style={styles.partnerName}>{item.name}</Text>
          </View>
        )}
        contentContainerStyle={styles.grid}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#22223b",
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 16,
    textAlign: "center",
  },
  grid: {
    alignItems: "center",
    justifyContent: "center",
  },
  partnerItem: {
    alignItems: "center",
    margin: 12,
    width: 100,
  },
  partnerLogo: {
    width: 60,
    height: 60,
    marginBottom: 6,
  },
  partnerName: {
    fontSize: 13,
    color: "#22223b",
    textAlign: "center",
  },
});