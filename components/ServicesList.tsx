import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import {
  SERVICES,
  TOPSERVICES,
  OTHERSERVICES,
} from "@/assets/services/Options";
import { imageMap } from "@/assets/services/imageMap"; // <-- Make sure this exists
import { useRouter } from "expo-router";

function ServiceCircle({
  label,
  image,
  onPress,
}: {
  label: string;
  image: string;
  onPress?: () => void;
}) {
  return (
    <View style={styles.circleWrapper}>
      <TouchableOpacity style={styles.circle} onPress={onPress}>
        <Image
          source={imageMap[image] || require("@/assets/images/logo.png")}
          style={styles.circleImage}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <Text style={styles.circleText} numberOfLines={1} ellipsizeMode="tail">
        {label}
      </Text>
    </View>
  );
}

export default function ServicesList() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Top Services</Text>
      <FlatList
        data={TOPSERVICES}
        horizontal
        keyExtractor={(item, idx) => item.name?.toString() || idx.toString()}
        renderItem={({ item }) => (
          <ServiceCircle
            label={item.name}
            image={
              Array.isArray(item.image) ? item.image[0]?.image : item.image
            }
            onPress={() =>
              router.push({
                pathname: "/services/TopService",
                params: { serviceName: item.path },
              })
            }
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginBottom: 12 }}
      />

      <Text style={styles.heading}>Other Services</Text>
      <FlatList
        data={SERVICES}
        horizontal
        keyExtractor={(item, idx) => item.name?.toString() || idx.toString()}
        renderItem={({ item }) => (
          <ServiceCircle
            label={item.name}
            onPress={() =>
              router.push({
                pathname: "/services/[serviceId]",
                params: { serviceId: item.__id },
              })
            }
            image={
              Array.isArray(item.image) ? item.image[0]?.image : item.image
            }
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 10,
  },
  heading: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#22223b",
    marginBottom: 8,
    marginTop: 10,
    marginLeft: 10,
  },
  circleWrapper: {
    alignItems: "center",
    marginRight: 5,
    width: 90,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#e0e7ff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  circleImage: {
    width: "100%",
    height: "100%",
    borderRadius: 35,
  },
  circleText: {
    fontSize: 13,
    color: "#1e293b",
    fontWeight: "600",
    textAlign: "center",
    paddingHorizontal: 4,
  },
});
