import { Stack } from "expo-router";
import React from "react";
import { CustomHeader } from "../../components/CustomHeader";

export default function AuthLayout() {

  return (
    <Stack
      screenOptions={{
        header: () => <CustomHeader />,
      }}
    />
  );
}
