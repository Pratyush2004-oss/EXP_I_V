import "@/assets/i18n"; // <-- Add this line at the top
import { useAuthStore } from "@/assets/store/auth.store";
import SafeScreen from "@/components/SafeScreen";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function RootLayout() {
  const { checkAdmin, checkAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
    checkAdmin();
  }, []);
  return (
    <SafeAreaProvider>
      <SafeScreen>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* <Stack.Screen name="index" /> */}
          <Stack.Screen name="(auth)" />
        </Stack>
      </SafeScreen>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
