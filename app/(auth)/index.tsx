import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Platform,
  Pressable,
} from "react-native";
import CountryPicker, { CountryCode } from "react-native-country-picker-modal";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useSegments } from "expo-router";
import { useAuthStore } from "@/assets/store/auth.store";

export default function LoginScreen() {
    const segments = useSegments();
  
    const { token, user } = useAuthStore();
  
    // handle navigation based on auth state
    useEffect(() => {
      const isAuthScreen = segments[0] === "(auth)";
      const isTabScreen = segments[0] === "(tabs)";
      const isSignedIn = user && token;
  
      if (isSignedIn && isAuthScreen) router.replace("/(tabs)");
      if(!isSignedIn && isTabScreen) router.replace("/(auth)");
      if(isSignedIn) router.replace("/(tabs)");
    }, [user, segments, token]);
  const [input, setInput] = useState({
    isoCode: "+91",
    mobile: "",
    password: "",
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] =
    useState<CountryCode>("IN");
  const [showCountryPicker, setShowCountryPicker] = useState(false);

  interface Country {
    cca2: CountryCode;
    callingCode: string[];
    [key: string]: any;
  }

  const handleCountrySelect = (country: Country) => {
    setCountryCode(country.cca2);
    setInput({ ...input, isoCode: `+${country.callingCode[0]}` });
    setShowCountryPicker(false);
  };
  const {login,error } = useAuthStore();

  const handleLogin = async () => {
    setLoading(true);
    try {
      // Replace this with your actual login logic
      await login(input);

    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        {/* Mobile Number */}
        <Text style={styles.label}>Mobile</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.countryPicker}
            onPress={() => setShowCountryPicker(true)}
          >
            <Text style={styles.countryText}>{input.isoCode}</Text>
          </TouchableOpacity>
          <CountryPicker
            withFilter
            withFlag
            withCallingCode
            withEmoji
            countryCode={countryCode}
            visible={showCountryPicker}
            onSelect={handleCountrySelect}
            onClose={() => setShowCountryPicker(false)}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            keyboardType="number-pad"
            maxLength={10}
            placeholder="Enter Mobile Number"
            value={input.mobile}
            onChangeText={(text) => setInput({ ...input, mobile: text })}
          />
        </View>
        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry
            value={input.password}
            onChangeText={(text) => setInput({ ...input, password: text })}
          />
          <Pressable style={styles.showPassword}>
            <Ionicons name="eye-outline" size={24} color="black" />
          </Pressable>
        </View>
        {/* Login Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>
        {/* Signup Link */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
            <Text style={styles.signupLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    width: "90%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 18,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#bfdbfe",
    paddingBottom: 8,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    marginTop: 12,
    marginBottom: 4,
    marginLeft: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  countryPicker: {
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: "#f1f5f9",
  },
  countryText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4b5563",
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
    fontSize: 16,
    backgroundColor: "#f9fafb",
  },
  showPassword: {
    position: "absolute",
    top: -5,
    right: 0,
    padding: 12,
  },
  button: {
    backgroundColor: "#3b82f6",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 18,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
  },
  error: {
    color: "#ef4444",
    textAlign: "center",
    marginBottom: 8,
    fontSize: 14,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 18,
  },
  signupText: {
    fontSize: 14,
    color: "#6b7280",
  },
  signupLink: {
    fontSize: 14,
    color: "#3b82f6",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
