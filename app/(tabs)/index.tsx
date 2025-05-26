import AffiliateServices from "@/components/AffiliateServices";
import Blogs from "@/components/Blogs";
import CabServices from "@/components/CabServices";
import OffersCarousel from "@/components/OfferSection";
import PackagesList from "@/components/PackagesList";
import Partners from "@/components/Partners";
import RechargeServices from "@/components/RechargeServices";
import ServicesList from "@/components/ServicesList";
import Shopping from "@/components/Shopping";
import React from "react";
import { FlatList, StyleSheet } from "react-native";

export default function Home() {
  return (
    <FlatList
      data={[]} // No data, just using header/footer
      ListEmptyComponent={() => (
        <>
          <RechargeServices title="Recharge Services" />
          <AffiliateServices title="Travel and Accomodation" />
          <Shopping title="Shopping" />
          <CabServices title="Cabs" />
          <ServicesList />
          <PackagesList />
          <Partners />
          <OffersCarousel />
          <Blogs />
        </>
      )}
      contentContainerStyle={{ paddingBottom: 20 }}
      showsVerticalScrollIndicator={false}
      renderItem={undefined}
    />
  );
}

const styles = StyleSheet.create({});
