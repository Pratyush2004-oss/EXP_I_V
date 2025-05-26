import { QUERIESTYPE } from "@/assets/services/types";
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function QueriesTable({
  loading,
  Queries,
  pageNumber,
  setPageNumber,
} : {
  loading: boolean;
  Queries: QUERIESTYPE[];
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
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
        <Text style={[styles.headerCell, { flex: 0.7 }]}>Sr.no</Text>
        <Text style={styles.headerCell}>Name</Text>
        <Text style={styles.headerCell}>Mobile Number</Text>
        <Text style={[styles.headerCell, { flex: 2 }]}>Message</Text>
      </View>
      {/* Table Body */}
      <FlatList
        data={Queries}
        keyExtractor={(item, idx) => item._id || idx.toString()}
        ListEmptyComponent={
          <View style={styles.row}>
            <Text style={styles.emptyText}>No Queries Found</Text>
          </View>
        }
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <Text style={[styles.cell, { flex: 0.7 }]}>{index + 1}</Text>
            <Text style={styles.cell}>{item.user.fullname}</Text>
            <Text style={styles.cell}>{item.user.mobile}</Text>
            <Text style={[styles.cell, { flex: 2 }]} numberOfLines={2}>
              {item.message}
            </Text>
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
          onPress={() => setPageNumber(pageNumber > 1 ? pageNumber - 1 : 1)}
        >
          <Text style={styles.pageButtonText}>Previous</Text>
        </TouchableOpacity>
        <Text style={styles.paginationText}>A list of all the Bookings.</Text>
        <TouchableOpacity
          style={[
            styles.pageButton,
            Queries.length < 10 && styles.pageButtonDisabled,
          ]}
          disabled={Queries.length < 10}
          onPress={() => setPageNumber(pageNumber + 1)}
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
    backgroundColor: "#e5e7eb",
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
    fontSize: 15,
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
    fontSize: 14,
    textAlign: "center",
    borderRightWidth: 1,
    borderColor: "#e5e7eb",
    paddingHorizontal: 2,
  },
  emptyText: {
    flex: 1,
    textAlign: "center",
    color: "#6b7280",
    fontSize: 16,
    paddingVertical: 20,
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