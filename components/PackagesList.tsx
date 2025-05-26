import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { PACKAGES } from "@/assets/services/Options";
import PackageCard from "@/components/PackageCard";
import { PACKAGETYPE } from "@/assets/services/types";
import { useRouter } from "expo-router";

// Utility to shuffle and pick 4 random packages
function getRandomPackages(arr: PACKAGETYPE[], n: number) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

export default function PackagesList() {
  const displayedPackages = getRandomPackages(PACKAGES, 4);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.heading}>Packages</Text>
        <TouchableOpacity onPress={() => {router.push("/packages")}}>
          <Text style={styles.showMore}>Show More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.grid}>
        {displayedPackages.map((pkg, idx) => (
          <View style={styles.gridItem} key={pkg.__id || idx}>
            <PackageCard pkg={pkg} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 16,
    marginTop:10,
    backgroundColor: "#f3f4f6",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#22223b",
  },
  showMore: {
    fontSize: 15,
    color: "#000",
    fontWeight: "600",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "48%",
    alignItems: "center",
  },
});
