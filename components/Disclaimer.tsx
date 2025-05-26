import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Blogs from "./Blogs";

export default function Disclaimer() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>
          <Text role="img" aria-label="scroll">📜 </Text>
          Disclaimer
        </Text>
        <Text style={styles.paragraph}>
          ExploreIndiaView is a travel information platform designed to inspire and assist users in planning memorable trips across India. While we strive to maintain accurate and updated information related to destinations, itineraries, pricing, and experiences, we do not guarantee the completeness, reliability, or availability of any service, vendor, or travel product mentioned on our website or mobile app.
          {"\n\n"}
          We are not responsible for any delays, cancellations, or disruptions caused by third-party service providers including but not limited to transport operators, hotels, travel agencies, or government decisions. Users are advised to verify details directly with the concerned vendors before making bookings or travel decisions.
        </Text>
        <Text style={styles.subheading}>
          <Text role="img" aria-label="briefcase">💼 </Text>
          Affiliate Disclosure
        </Text>
        <Text style={styles.paragraph}>
          Some of the links and recommendations on ExploreIndiaView may be affiliate links. This means that if you click on these links and make a purchase or booking (such as through RailYatri, MakeMyTrip, Goibibo, Amazon, EarnKaro, Cuelinks, etc.), we may earn a small commission at no additional cost to you.
          {"\n\n"}
          These commissions help us maintain and improve the website and continue to offer valuable travel content and tools free of charge.
          {"\n\n"}
          We only promote or recommend products/services that we genuinely believe offer value to our users. However, we encourage you to perform your own research before making any purchase or booking decisions.
        </Text>
        <Text style={styles.paragraph}>
          By using ExploreIndiaView, you agree to our Terms &amp; Conditions, Privacy Policy, and the above disclaimers.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height:"auto",
    alignItems: "center",
    paddingBottom: 20,
    paddingHorizontal: 4,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 22,
    width: "100%",
    maxWidth: 600,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 12,
    textAlign: "center",
  },
  subheading: {
    fontSize: 19,
    fontWeight: "700",
    color: "#334155",
    marginTop: 15,
    marginBottom: 10,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 15,
    color: "#374151",
    fontWeight: "500",
    marginBottom: 12,
    lineHeight: 18,
    textAlign: "justify",
  },
});