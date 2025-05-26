import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useAuthStore } from "@/assets/store/auth.store";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import AffiliateServices from "@/components/AffiliateServices";
import RechargeServices from "@/components/RechargeServices";
import OffersCarousel from "@/components/OfferSection";

export default function Profile() {
  const { logout, user } = useAuthStore();
  return (
    <FlatList
      data={[]}
      contentContainerStyle={{ paddingBottom: 20 }}
      ListHeaderComponent={() => (
        <View style={styles.container}>
          <Text style={styles.heading}>Profile</Text>
          {/* Profile Container */}
          <View style={styles.profileContainer}>
            <View style={styles.profileImageContainer}>
              <Image
                style={styles.proficePic}
                source={require("@/assets/images/user-profile.png")}
              />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>
                Hi {user?.fullname.split(" ")[0]}
              </Text>
              <Text style={styles.mobile}>{user?.mobile}</Text>
            </View>
          </View>

          {/* Cashback Container */}
          <View style={styles.cashbackContainer}>
            <View style={styles.cashbackImageContainer}>
              <Ionicons name="cash" size={20} color="#22223b" />
            </View>
            <View style={styles.cashbackInfo}>
              <Text style={styles.cashbackTitle}>Wallet</Text>
              <Text style={styles.cashbackAmount}>₹{user?.CashbackAmount}</Text>
            </View>
          </View>

          {/* Offers List */}

          {/* Navigation Pages */}
          <View></View>

          <AffiliateServices title={"Travel"} />
          <OffersCarousel/>
          {/* Logout Button */}
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => logout()}
            activeOpacity={0.7}
          >
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
      renderItem={() => null}
    />
  );
}
const {height} = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    minHeight: height - 150,
    backgroundColor: "#f3f4f6",
    paddingVertical: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#22223b",
    marginBottom: 8,
    marginTop: 10,
    marginLeft: 10,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: Colors.PRIMARY,
  },
  profileImageContainer: {
    marginRight: 12,
  },
  proficePic: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  mobile: {
    fontSize: 16,
    marginTop: 5,
    color: "#fff",
  },
  cashbackContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    borderWidth: 1,
  },
  cashbackImageContainer: {
    marginRight: 12,
  },
  cashbackInfo: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  cashbackTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cashbackAmount: {
    fontSize: 20,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop:"auto"
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
