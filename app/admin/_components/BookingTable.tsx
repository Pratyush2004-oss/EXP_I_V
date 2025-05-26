import { BOOKINGTYPE, User } from "@/assets/services/types";
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

const { width } = Dimensions.get("window");

function UserAvatar({ user }: { user?: User }) {
  // You can customize this as needed
  return (
    <View style={styles.avatarContainer}>
      {user?.fullname ? (
        <Image
          source={require("@/assets/images/user-profile.png")}
          style={styles.avatar}
        />
      ) : (
        <View style={styles.avatarFallback}>
          <Text style={styles.avatarFallbackText}>
            {user && user.fullname ? user.fullname[0].toUpperCase() : "U"}
          </Text>
        </View>
      )}
      <Text style={styles.avatarName}>{user?.fullname ?? "Unknown"}</Text>
    </View>
  );
}

export default function BookingTable({
  bookings,
  pageNumber,
  setpageNumber,
  loading,
}: {
  bookings: BOOKINGTYPE[];
  pageNumber: number;
  setpageNumber: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
}) {
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#10b981" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Table Header */}
      <View style={styles.tableHeader}>
        <Text style={[styles.headerCell, { flex: 2  }]}>Package Name</Text>
        <Text style={styles.headerCell}>Days</Text>
        <Text style={styles.headerCell}>Start Date</Text>
        <Text style={styles.headerCell}>People</Text>
        <Text style={styles.headerCell}>Mobile</Text>
        <Text style={styles.headerCell}>Amount</Text>
        <Text style={styles.headerCell}>Payment</Text>
      </View>
      {/* Table Body */}
      <FlatList
        data={bookings}
        keyExtractor={(_, idx) => idx.toString()}
        ListEmptyComponent={
          <View style={styles.row}>
            <Text style={styles.emptyText}>No Bookings Found.</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={[styles.cell, { flex: 2, alignItems: "flex-start" }]}>
              <Text style={[styles.boldText, styles.cell]}>
                {item.PackageName}
              </Text>
              {Array.isArray(item.PlaceList) && item.PlaceList.length > 0 && (
                <Text style={styles.subText}>
                  Places: {item.PlaceList.join(", ")}
                </Text>
              )}
              {Array.isArray(item.AdventureList) &&
                item.AdventureList.length > 0 && (
                  <Text style={styles.subText}>
                    Adventures: {item.AdventureList.join(", ")}
                  </Text>
                )}
            </View>
            <Text style={styles.cell}>{item.PackageDays}</Text>
            <Text style={styles.cell}>
              {item.startDate?.toString().split("T")[0]}
            </Text>
            <Text style={styles.cell}>{item.people}</Text>
            <Text style={[styles.cell, styles.boldText]}>
              {item.user?.mobile}
            </Text>
            <Text style={[styles.cell, styles.boldText]}>
              ₹{item.PackagePrice}
            </Text>
            <View style={styles.cell}>
              {item.paymentStatus && item.paymentStatus.order_id ? (
                <View style={styles.badgePaid}>
                  <Text style={styles.badgePaidText}>Paid</Text>
                </View>
              ) : (
                <View style={styles.badgeNotPaid}>
                  <Text style={styles.badgeNotPaidText}>Not Paid</Text>
                </View>
              )}
            </View>
          </View>
        )}
      />
      {/* Pagination */}
      <View style={styles.pagination}>
        <TouchableOpacity
          style={[
            styles.pageButton,
            pageNumber <= 1 && styles.pageButtonDisabled,
          ]}
          disabled={pageNumber <= 1}
          onPress={() => setpageNumber(pageNumber > 1 ? pageNumber - 1 : 1)}
        >
          <Text style={styles.pageButtonText}>Previous</Text>
        </TouchableOpacity>
        <Text style={styles.paginationText}>A list of all the Bookings.</Text>
        <TouchableOpacity
          style={[
            styles.pageButton,
            bookings.length < 10 && styles.pageButtonDisabled,
          ]}
          disabled={bookings.length < 10}
          onPress={() => setpageNumber(pageNumber + 1)}
        >
          <Text style={styles.pageButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 400,
    backgroundColor: "#000",
    padding: 8,
    borderRadius: 12,
    margin: 10,
    flex: 1,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#d1d5db",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomWidth: 2,
    borderColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    color: "#22223b",
    fontSize: 12,
    textAlign: "center",
    borderRightWidth: 1,
    borderColor: "#000",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#d1d5db",
    paddingVertical: 10,
    paddingHorizontal: 4,
    alignItems: "center",
  },
  cell: {
    flex: 1,
    color: "#374151",
    fontSize: 10,
    textAlign: "center",
    borderColor: "#e5e7eb",
    paddingHorizontal: 2,
    justifyContent: "center",
  },
  boldText: {
    fontWeight: "bold",
    color: "#22223b",
  },
  subText: {
    fontSize: 12,
    color: "#6b7280",
  },
  emptyText: {
    flex: 1,
    textAlign: "center",
    color: "#6b7280",
    fontSize: 16,
    paddingVertical: 20,
  },
  badgePaid: {
    backgroundColor: "#10b981",
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 3,
    alignSelf: "center",
  },
  badgePaidText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 11,
  },
  badgeNotPaid: {
    backgroundColor: "#ef4444",
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 3,
    alignSelf: "center",
  },
  badgeNotPaidText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 11,
  },
  avatarContainer: {
    alignItems: "center",
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginBottom: 2,
  },
  avatarFallback: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#a3a3a3",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  },
  avatarFallbackText: {
    color: "#fff",
    fontWeight: "bold",
  },
  avatarName: {
    fontSize: 10,
    color: "#374151",
    textAlign: "center",
  },
  pagination: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 18,
    paddingHorizontal: 8,
  },
  pageButton: {
    backgroundColor: "#10b981",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  pageButtonDisabled: {
    backgroundColor: "#a3a3a3",
  },
  pageButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  paginationText: {
    color: "#374151",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 300,
  },
});
