import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function WhatsAppButton() {
  const phoneNumber = "917375948305";
  const message = "Hi ExploreIndiaView, I need help with my Rajasthan tour";

  return (
    <Link
      style={{
        padding: 10,
        width: "100%",
        borderWidth: 1,
        borderColor: "#34d399",
        borderRadius: 8,
        backgroundColor: "#34d399",
        marginTop: 10,
      }}
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <Ionicons name="logo-whatsapp" size={40} color="white" />
        <Text style={{ marginLeft: 10, color: "white", fontSize: 17 }}>
          Raise query directly in WhatsApp
        </Text>
      </View>
    </Link>
  );
}