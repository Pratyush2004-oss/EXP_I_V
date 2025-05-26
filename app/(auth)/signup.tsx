import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  ScrollView,
  Pressable,
} from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import type { CountryCode } from "react-native-country-picker-modal";

export default function SignupScreen() {
  const [input, setInput] = useState({
    fullname: "",
    isoCode: "+91",
    mobile: "",
    password: "",
  });
  const router = useRouter();
  const [countryCode, setCountryCode] = useState<CountryCode>("IN");
  const [country, setCountry] = useState<Country | null>(null);
  const [withCountryNameButton] = useState(false);
  const [withFlag] = useState(true);
  const [withCallingCode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  interface Country {
    cca2: CountryCode;
    callingCode: string[];
    [key: string]: any;
  }

  const onSelect = (country: Country): void => {
    setCountryCode(country.cca2);
    setCountry(country);
    setInput({ ...input, isoCode: `+${country.callingCode[0]}` });
  };

  const handleSignup = async () => {
    setError("");
    if (!input.fullname || !input.isoCode || !input.mobile || !input.password) {
      setError("All fields are required");
      return;
    }
    if (!/^\d{10}$/.test(input.mobile)) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    if (input.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    setLoading(true);
    try {
      // Replace with your signup logic
      setTimeout(() => {
        setLoading(false);
        Alert.alert("Success", "Account created!");
        // navigation.replace('Home');
      }, 1500);
    } catch (e) {
      setError("Signup failed");
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Sign Up</Text>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        {/* Name */}
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={input.fullname}
          onChangeText={(text) => setInput({ ...input, fullname: text })}
        />
        {/* Mobile */}
        <Text style={styles.label}>Mobile</Text>
        <View style={styles.row}>
          <CountryPicker
            countryCode={countryCode}
            withFilter
            withFlag={withFlag}
            withCallingCode={withCallingCode}
            withCallingCodeButton={withCallingCode}
            withCountryNameButton={withCountryNameButton}
            onSelect={onSelect}
            containerButtonStyle={styles.countryPicker}
          />
          <TextInput
            style={[styles.input, { flex: 1, marginLeft: 8 }]}
            placeholder="Enter Mobile Number"
            keyboardType="number-pad"
            maxLength={10}
            value={input.mobile}
            onChangeText={(text) => setInput({ ...input, mobile: text })}
          />
        </View>
        {/* Password */}
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
        {/* Submit */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSignup}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <>
              <Text style={styles.buttonText}>Continue</Text>
              <Ionicons name="arrow-forward" size={20} color="#fff" />
            </>
          )}
        </TouchableOpacity>
        <Text style={styles.footerText}>
          Already have an account?{" "}
          <Text
            style={styles.link}
            onPress={() => {
              router.push("/(auth)");
            }}
          >
            Sign In
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 12,
    width: "90%",
    maxWidth: 400,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 18,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#dbeafe",
    paddingBottom: 8,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 4,
    marginTop: 12,
    marginLeft: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#f9fafb",
  },
  countryPicker: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    backgroundColor: "#f9fafb",
    justifyContent: "center",
    height: 44,
    paddingHorizontal: 8,
  },
  showPassword: {
    position: "absolute",
    top: -5,
    right: 0,
    padding: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  button: {
    backgroundColor: "#3b82f6",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  error: {
    color: "#ef4444",
    textAlign: "center",
    marginBottom: 8,
    fontSize: 14,
  },
  footerText: {
    marginTop: 18,
    textAlign: "center",
    color: "#6b7280",
    fontSize: 14,
  },
  link: {
    color: "#2563eb",
    textDecorationLine: "underline",
  },
});
