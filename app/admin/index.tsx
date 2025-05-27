import { API_URL } from "@/assets/services/API";
import { useAuthStore } from "@/assets/store/auth.store";
import BackHeader from "@/components/BackHeader";
import { Colors } from "@/constants/Colors";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BookingTable from "./_components/BookingTable";
import Details from "./_components/Details";
import QueriesTable from "./_components/QueriesTable";

const { width } = Dimensions.get("window");

const Tab = createMaterialTopTabNavigator();

export default function AdminScreen() {
  const { isAdmin, token } = useAuthStore();
  const [Queries, setQueries] = useState([]);
  const [pageNumber, setpageNumber] = useState(1);
  const [queriesPageNumber, setqueriesPageNumber] = useState(1);
  const [loading, setloading] = useState(false);
  const [bookings, setbookings] = useState([]);

  // Fetch Queries
  const fetchQueries = async () => {
    try {
      setloading(true);
      const response = await axios.get(
        `${API_URL}/api/v1/query/get-queries?page=${queriesPageNumber}&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setQueries(response.data.queries);
    } catch (error) {
      // handle error
    } finally {
      setloading(false);
    }
  };

  // Fetch All Bookings
  const fetchAllBookings = async () => {
    try {
      setloading(true);
      const response = await axios.get(
        `${API_URL}/api/v1/booking/get-bookings-admin?page=${pageNumber}&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setbookings(response.data.bookings);
    } catch (error) {
      // handle error
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchAllBookings();
  }, [pageNumber]);

  useEffect(() => {
    fetchQueries();
  }, [queriesPageNumber]);

  if (!isAdmin) {
    return (
      <View style={styles.unauthContainer}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.unauthText}>Unauthorized</Text>
      </View>
    );
  }

  return (
    <>
      <BackHeader />
      <View style={styles.container}>
        {/* Details section */}
        <View style={styles.detailsWrapper}>
          <Details token={token || ""} />
        </View>
        
        {/* Tab Navigator */}
        <View style={styles.tabViewWrapper}>
          <Tab.Navigator
            screenOptions={{
              tabBarIndicatorStyle: { backgroundColor: "#10b981" },
              tabBarStyle: styles.tabBar,
              tabBarLabelStyle: styles.tabLabel,
            }}
          >
            <Tab.Screen name="Bookings">
              {() => (
                <BookingTable
                  loading={loading}
                  bookings={bookings}
                  pageNumber={pageNumber}
                  setpageNumber={setpageNumber}
                />
              )}
            </Tab.Screen>
            <Tab.Screen name="Queries">
              {() => (
                <QueriesTable
                  loading={loading}
                  Queries={Queries}
                  pageNumber={queriesPageNumber}
                  setPageNumber={setqueriesPageNumber}
                />
              )}
            </Tab.Screen>
          </Tab.Navigator>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: Colors.WHITE,
  },
  detailsWrapper: {
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  tabViewWrapper: {
    flex: 1,
    minHeight: 0,
  },
  tabBar: {
    backgroundColor: Colors.GRAY,
    elevation: 2,
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
  },
  tabLabel: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  unauthContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
  unauthText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ef4444",
    fontFamily: "monospace",
  },
});