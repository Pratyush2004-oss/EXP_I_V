import { useRouter } from "expo-router";
import { Image, TouchableOpacity, View } from "react-native";

export function CustomHeader() {
  const router = useRouter();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "#fff",
      }}
    >
      {/* Logo */}
      <TouchableOpacity onPress={() => router.replace('/')} activeOpacity={0.7}>
        <Image
          source={require("../assets/images/logo.png")} // Place your logo in assets/logo.png
          style={{ width: 125, height: 36, resizeMode: "contain" }}
        />
      </TouchableOpacity>
    </View>
  );
}