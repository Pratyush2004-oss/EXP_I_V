import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import OneDayTourScreen from "./_components/OneDayTour";
import AdventureScreen from "./_components/adventure";
import CampingScreen from "./_components/camping";
import BackHeader from "@/components/BackHeader";

export default function TopService() {
  const params = useLocalSearchParams();
  const serviceName =
    typeof params.serviceName === "string" ? params.serviceName : "";

  return (
    <FlatList
      data={[]}
      ListHeaderComponent={() => (
        <>
          <BackHeader />
          {serviceName === "oneDayTour" && <OneDayTourScreen />}
          {serviceName === "adventure" && <AdventureScreen />}
          {serviceName === "camping_hiking" && <CampingScreen />}
        </>
      )}
      renderItem={undefined}
    />
  );
}

const styles = StyleSheet.create({});
