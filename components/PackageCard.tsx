import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { PACKAGETYPE } from "@/assets/services/types";
import { imageMap } from "@/assets/services/imageMap";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function PackageCard({ pkg, expand }: { pkg: PACKAGETYPE, expand?:boolean }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fallback if image not found
  const imageSource =
    imageMap[pkg.image] || require("@/assets/images/logo.png");

  return (
    <Pressable style={{ marginVertical: 3 }} onPress={() => router.push({
      pathname: "/packages/[packageId]",
      params: {
        packageId: pkg.__id
      }
    })}>
      <View style={[styles.card, { width: expand ? width * 0.7 : width * 0.465 }]}>
        <ImageBackground
          source={imageSource}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.imageStyle}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        >
          <View style={styles.overlay} />
          {loading && (
            <View style={styles.loaderContainer}>
              <ActivityIndicator color="#fff" size="small" />
            </View>
          )}
          <View style={styles.textContainer}>
            <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
              {pkg.name}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </Pressable>
  );
}

// ...styles remain unchanged...

const styles = StyleSheet.create({
  card: {
    width: width * 0.465,
    height: 150,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#eee",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 6,
    alignSelf: "center",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imageStyle: {
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  textContainer: {
    padding: 18,
  },
  name: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: 6,
    textShadowColor: "#000",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
});