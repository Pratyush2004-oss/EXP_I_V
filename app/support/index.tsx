import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InquirySection from "@/components/InquirySection";
import WhatsAppButton from "@/components/WhatsappBtn";
import BackHeader from "@/components/BackHeader";

export default function Support() {
  return (
    <>
      <BackHeader />
      <InquirySection expand={true} />
    </>
  );
}

const styles = StyleSheet.create({});
