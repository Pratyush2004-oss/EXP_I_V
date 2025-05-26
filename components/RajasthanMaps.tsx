import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Polygon } from "react-native-maps";
import rajasthanBoundary from "@/assets/services/rajasthan.json"; // Adjust path as needed

const { width } = Dimensions.get("window");

function extractPolygons(geojson: any) {
  // Returns array of arrays of {latitude, longitude}
  if (!geojson || !geojson.features) return [];
  const polygons: any[] = [];
  geojson.features.forEach((feature: any) => {
    if (feature.geometry.type === "Polygon") {
      feature.geometry.coordinates.forEach((ring: any) => {
        polygons.push(
          ring.map(([lng, lat]: [number, number]) => ({
            latitude: lat,
            longitude: lng,
          }))
        );
      });
    } else if (feature.geometry.type === "MultiPolygon") {
      feature.geometry.coordinates.forEach((polygon: any[]) => {
        polygon.forEach((ring) => {
          polygons.push(
            ring.map(([lng, lat]: [number, number]) => ({
              latitude: lat,
              longitude: lng,
            }))
          );
        });
      });
    }
  });
  return polygons;
}

export default function RajasthanMap() {
  const polygons = extractPolygons(rajasthanBoundary);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 27.0238,
          longitude: 74.2179,
          latitudeDelta: 10, // Increased for zoom out
          longitudeDelta: 10, // Increased for zoom out
        }}
      >
        {polygons.map((coords, idx) => (
          <Polygon
            key={idx}
            coordinates={coords}
            strokeColor="#2563eb"
            fillColor="rgba(59,130,246,0.2)"
            strokeWidth={2}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginVertical: 16,
  },
  map: {
    width: width * 0.9,
    height: 300,
    borderRadius: 16,
  },
});
