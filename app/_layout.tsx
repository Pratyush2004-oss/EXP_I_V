import "@/assets/i18n"; // <-- Add this line at the top
import { useAuthStore } from "@/assets/store/auth.store";
import SafeScreen from "@/components/SafeScreen";
import { SplashScreen, Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const { checkAdmin, checkAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
    checkAdmin();
  }, []);

  const segments = useSegments();
    
      const { token, user } = useAuthStore();
      const router = useRouter();
    
  return (
    <SafeAreaProvider>
      <SafeScreen>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SafeScreen>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
