import { useAuthStore } from "@/assets/store/auth.store";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function Sidebar({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const slideAnim = useRef(new Animated.Value(-width)).current;
  const { user, isAdmin, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : -width,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return (
    <>
      {/* Overlay */}
      {visible && (
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={onClose}
        />
      )}
      {/* Sidebar */}
      <Animated.ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}
      >
        {/* Add your menu items here */}
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

        {/* navigation buttons container */}
        <View style={styles.navigationContainer}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              router.push("/(tabs)/profile");
              onClose();
            }}
          >
            <Ionicons
              name="person-circle-outline"
              size={35}
              color={Colors.PRIMARY}
            />
            <Text style={styles.menuText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              router.push("/support");
              onClose();
            }}
          >
            <Ionicons
              name="chatbox-ellipses-outline"
              size={35}
              color={Colors.PRIMARY}
            />
            <Text style={styles.menuText}>Support</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              router.push("/(tabs)/bookings");
              onClose();
            }}
          >
            <Ionicons
              name="bookmarks-outline"
              size={35}
              color={Colors.PRIMARY}
            />
            <Text style={styles.menuText}>Bookings</Text>
          </TouchableOpacity>
        </View>

        {/* Navigation button in other section */}
        <View style={styles.PackageContainer}>
          <Text style={styles.PackageTitle}>Book Your Package</Text>
          <TouchableOpacity
            style={styles.PackageItem}
            onPress={() => {
              router.push("/packages");
              onClose();
            }}
          >
            <Ionicons
              name="business-outline"
              size={30}
              color={Colors.PRIMARY}
            />
            <Text style={styles.menuText}>Packages</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.PackageItem}
            onPress={() => {
              router.push("/(tabs)/createCustomPackage");
              onClose();
            }}
          >
            <Ionicons name="compass-outline" size={30} color={Colors.PRIMARY} />
            <Text style={styles.menuText}>Create Your own Package</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.PackageItem}
            onPress={() => {
              router.push({
                pathname: "/services/TopService",
                params: { serviceName: "oneDayTour" },
              });
              onClose();
            }}
          >
            <Ionicons name="walk" size={30} color={Colors.PRIMARY} />
            <Text style={styles.menuText}>One Day Tours</Text>
          </TouchableOpacity>
        </View>

        {/* Admin Button  */}
        {isAdmin && (
          <View style={styles.logoutContainer}>
            <TouchableOpacity
              style={styles.logoutbtn}
              onPress={() => {
                router.push("/admin");
                onClose();
              }}
            >
              <Ionicons name="map" size={35} color={Colors.PRIMARY} />
              <Text style={styles.menuText}>Admin Panel</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Reward section */}
        <View style={styles.PackageContainer}>
          <Text style={styles.PackageTitle}>Rewards</Text>
          <TouchableOpacity style={styles.PackageItem} onPress={onClose}>
            <Ionicons name="pricetags-sharp" size={30} color={Colors.PRIMARY} />
            <Text style={styles.menuText}>Gift Cards</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.PackageItem} onPress={onClose}>
            <Ionicons name="people-sharp" size={30} color={Colors.PRIMARY} />
            <Text style={styles.menuText}>Refer and Earn</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <View style={styles.logoutContainer}>
          <TouchableOpacity style={styles.logoutbtn} onPress={() => {
            logout();
            onClose();
          }}>
            <Ionicons name="log-out-outline" size={35} color={Colors.PRIMARY} />
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 100,
  },
  sidebar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width * 0.75,
    height: "100%",
    backgroundColor: Colors.WHITE,
    zIndex: 200,
    paddingTop: 20,
    paddingHorizontal: 18,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#22223b",
  },
  menuItem: {
    alignItems: "center",
    paddingVertical: 16,
    width: "30%",
    gap: 10,
    justifyContent: "center",
  },
  menuText: {
    fontSize: 17,
    color: "#22223b",
    fontWeight: "500",
    textAlign: "center",
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
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
  },
  PackageContainer: {
    gap: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 20,
  },
  PackageItem: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    marginVertical: 2,
  },
  PackageTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  logoutContainer: {
    marginVertical: 12,
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 15,
  },
  logoutbtn: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },
});
