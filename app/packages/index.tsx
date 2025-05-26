import React from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import { PACKAGES } from "@/assets/services/Options"; // Adjust path as needed
import CreateOwnPackageModal from "@/components/CreateYourOwnPackage";
import PackageCard from "@/components/PackageCard";
import BackHeader from "@/components/BackHeader";

const { width } = Dimensions.get("window");

export default function PackagesScreen() {
  return (
    <>
    <BackHeader/>
    <View style={styles.container}>
      <Text style={styles.heading}>Packages</Text>
      <CreateOwnPackageModal title="Create Your Own Package" />
      <FlatList
        data={PACKAGES}
        keyExtractor={(_, idx) => idx.toString()}
        numColumns={2}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
            <PackageCard pkg={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 12,
    paddingTop: 24,
    paddingBottom: 12,
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
    paddingBottom: 24,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 5,
  }
});
