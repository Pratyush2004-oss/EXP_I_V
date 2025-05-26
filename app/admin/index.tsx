import { API_URL } from "@/assets/services/API"; // Adjust path as needed
import { useAuthStore } from "@/assets/store/auth.store"; // Adjust path as needed
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import BookingTable from "./_components/BookingTable"; // Use the BookingTable provided earlier
import Details from "./_components/Details"; // Use the Details component provided earlier
import QueriesTable from "./_components/QueriesTable"; // Use the QueriesTable provided earlier
import { Colors } from "@/constants/Colors";
import BackHeader from "@/components/BackHeader";

const { width } = Dimensions.get("window");

export default function AdminScreen() {
  const { isAdmin, token } = useAuthStore();
  const [Queries, setQueries] = useState([]);
  const [pageNumber, setpageNumber] = useState(1);
  const [queriesPageNumber, setqueriesPageNumber] = useState(1);
  const [loading, setloading] = useState(false);
  const [bookings, setbookings] = useState([]);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "bookings", title: "Bookings" },
    { key: "queries", title: "Queries" },
  ]);

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

  const renderScene = SceneMap({
    bookings: () => (
      <BookingTable
        loading={loading}
        bookings={bookings}
        pageNumber={pageNumber}
        setpageNumber={setpageNumber}
      />
    ),
    queries: () => (
      <QueriesTable
        loading={loading}
        Queries={Queries}
        pageNumber={queriesPageNumber}
        setPageNumber={setqueriesPageNumber}
      />
    ),
  });

  return (
    <>
      <BackHeader />
      <View style={styles.container}>
        {/* Details section only takes its own height */}
        <View style={styles.detailsWrapper}>
          <Details token={token || ""} />
        </View>
        {/* TabView fills the rest */}
        <View style={styles.tabViewWrapper}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width }}
            renderTabBar={(props) => (
              <TabBar
                {...props}
                indicatorStyle={{ backgroundColor: "#10b981" }}
                style={styles.tabBar}
              />
            )}
            style={styles.tabView}
          />
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
    // No flex, just takes its own height
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  tabViewWrapper: {
    flex: 1, // Fills the rest of the space
    minHeight: 0, // Ensures proper flex behavior
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
  tabView: {
    flex: 1,
    marginTop: 0,
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
