import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button as RNButton,
  Platform,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import { useAuthStore } from "@/assets/store/auth.store";
import { useRouter } from "expo-router";
import { API_URL, RAZORPAY_KEY } from "@/assets/services/API";
import axios from "axios";
import RazorpayCheckout from "react-native-razorpay";
import { ScratchCard } from "./ScratchCard";
import InquirySection from "./InquirySection";

interface Props {
  PackageName: string;
  PackageDays: number;
  PackagePrice: number;
  PlaceList?: string[];
  AdventureList?: string[];
}
export default function BookingCard({ props }: { props: Props }) {
  const [input, setInput] = useState({
    PackageName: props.PackageName,
    PackageDays: props.PackageDays,
    PackagePrice: props.PackageDays * props.PackagePrice,
    people: 2,
    hotel: "",
    startDate: new Date(),
    PlaceList: props.PlaceList,
    AdventureList: props.AdventureList,
  });
  const { user, token } = useAuthStore();
  const [payOnline, setPayOnline] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showScratchCard, setShowScratchCard] = useState(false);
  const [cashbackAmount, setCashbackAmount] = useState<number | null>(null);
  const router = useRouter();

  // Update price when people, days, or hotel changes
  useEffect(() => {
    let price = input.people * input.PackageDays * props.PackagePrice;
    if (input.hotel === "3 Star") {
      price += input.people * input.PackageDays * 800 * 0.8;
    } else if (input.hotel === "5 Star") {
      price += input.people * input.PackageDays * 1000 * 0.8;
    }
    setInput((prev) => ({ ...prev, PackagePrice: price }));
  }, [input.PackageDays, input.people, input.hotel]);

  const handleBooking = async () => {
    try {
      setLoading(true);

      if (payOnline) {
        const response = await axios.post(
          `${API_URL}/api/v1/booking/create-tour`,
          { ...input, startDate: input.startDate.toISOString() },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data.order;
        if (response.status === 400) throw new Error(response.data.message);

        const options = {
          description: "Booking Payment",
          // image: "https://your-logo-url.png", // optional
          currency: "INR",
          key: RAZORPAY_KEY, // from your env variables
          amount: data.amount,
          order_id: data.id,
          name: input.PackageName,
          prefill: {
            contact: user?.mobile, // get from user profile
            name: user?.fullname, // get from user profile
          },
          theme: { color: "#53a20e" }, // optional
        };
        if (!RazorpayCheckout || !RazorpayCheckout.open) {
          Alert.alert(
            "Razorpay is not available. Please use a custom dev client or a production build."
          );
          return;
        }

        RazorpayCheckout.open(options)
          .then(async (response: any) => {
            // handle success
            const options2 = {
              order_id: response.razorpay_order_id,
              payment_id: response.razorpay_payment_id,
              signature: response.razorpay_signature,
              PackageName: input.PackageName,
              PackageDays: input.PackageDays,
              PackagePrice: input.PackagePrice,
              people: input.people,
              startDate: input.startDate.toISOString(),
              PlaceList: input.PlaceList,
              AdventureList: input.AdventureList,
              hotel: input.hotel,
            };

            const verifyResponse = await axios.post(
              `${API_URL}/api/v1/booking/verify-payment`,
              options2,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            if (verifyResponse.status === 400) {
              throw new Error(verifyResponse.data.message);
            }

            Alert.alert(verifyResponse.data.message || "Payment verified");
            setCashbackAmount(verifyResponse.data.CashbackAmount);
            setShowScratchCard(true);
          })
          .catch((error: any) => {
            // handle failure
            console.log(error);
            if (error.code !== 0) {
              // 0 means user manually closed the payment
              Alert.alert(
                `Payment Error: ${error.description || "Something went wrong"}`
              );
            }
          });
      } else {
        const response = await axios.post(
          `${API_URL}/api/v1/booking/create-tour-without-payment`,
          { ...input, startDate: input.startDate.toISOString() },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 400) throw new Error(response.data.message);
        Alert.alert(
          response.data.message ||
            "Booking created successfully without payment"
        );
        router.push("/bookings");
      }
    } catch (error: any) {
      console.log(error);
      Alert.alert(
        (error.response && error.response.data.message) ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showScratchCard && cashbackAmount ? (
        <ScratchCard
          cashbackAmount={
            cashbackAmount !== null ? cashbackAmount.toString() : "10"
          }
        />
      ) : (
        <View style={styles.card}>
          <Text style={styles.title}>{props.PackageName}</Text>
          <Text style={styles.days}>
            {input.PackageDays} {input.PackageDays > 1 ? "days" : "day"}
          </Text>

          {/* People Selector */}
          <View style={styles.row}>
            <Text style={styles.label}>People</Text>
            <View style={styles.counterRow}>
              <TouchableOpacity
                disabled={input.people <= 1}
                onPress={() =>
                  setInput((prev) => ({
                    ...prev,
                    people: Math.max(1, prev.people - 1),
                  }))
                }
                style={styles.iconBtn}
              >
                <Ionicons
                  name="remove-circle-outline"
                  size={28}
                  color="#10b981"
                />
              </TouchableOpacity>
              <Text style={styles.counter}>{input.people}</Text>
              <TouchableOpacity
                disabled={input.people >= 10}
                onPress={() =>
                  setInput((prev) => ({
                    ...prev,
                    people: Math.min(10, prev.people + 1),
                  }))
                }
                style={styles.iconBtn}
              >
                <Ionicons name="add-circle-outline" size={28} color="#10b981" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Days Selector */}
          <View style={styles.row}>
            <Text style={styles.label}>Days</Text>
            <View style={styles.counterRow}>
              <TouchableOpacity
                disabled={input.PackageDays <= props.PackageDays}
                onPress={() =>
                  setInput((prev) => ({
                    ...prev,
                    PackageDays: Math.max(
                      props.PackageDays,
                      prev.PackageDays - 1
                    ),
                  }))
                }
                style={styles.iconBtn}
              >
                <Ionicons
                  name="remove-circle-outline"
                  size={28}
                  color="#10b981"
                />
              </TouchableOpacity>
              <Text style={styles.counter}>{input.PackageDays}</Text>
              <TouchableOpacity
                onPress={() =>
                  setInput((prev) => ({
                    ...prev,
                    PackageDays: prev.PackageDays + 1,
                  }))
                }
                style={styles.iconBtn}
              >
                <Ionicons name="add-circle-outline" size={28} color="#10b981" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Date Picker */}
          <View style={styles.row}>
            <Text style={styles.label}>Start Date</Text>
            <TouchableOpacity
              style={styles.dateBtn}
              onPress={() => setShowDatePicker(true)}
            >
              <Ionicons name="calendar-outline" size={20} color="#10b981" />
              <Text style={styles.dateText}>
                {input.startDate.toDateString()}
              </Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={input.startDate}
                mode="date"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                onChange={(_, date) => {
                  setShowDatePicker(false);
                  if (date) setInput((prev) => ({ ...prev, startDate: date }));
                }}
              />
            )}
          </View>

          {/* Price */}
          <View style={styles.row}>
            <Text style={styles.label}>Price Starts from</Text>
            <Text style={styles.price}>₹ {input.PackagePrice}</Text>
          </View>

          {/* Hotel Selection */}
          <View style={styles.row}>
            <Text style={styles.label}>Hotel</Text>
            <View style={styles.radioRow}>
              <TouchableOpacity
                style={[
                  styles.radioBtn,
                  input.hotel === "3 Star" && styles.radioBtnActive,
                ]}
                onPress={() =>
                  setInput((prev) => ({ ...prev, hotel: "3 Star" }))
                }
              >
                <Text
                  style={[
                    styles.radioText,
                    input.hotel === "3 Star" && styles.radioTextActive,
                  ]}
                >
                  3 Star
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.radioBtn,
                  input.hotel === "5 Star" && styles.radioBtnActive,
                ]}
                onPress={() =>
                  setInput((prev) => ({ ...prev, hotel: "5 Star" }))
                }
              >
                <Text
                  style={[
                    styles.radioText,
                    input.hotel === "5 Star" && styles.radioTextActive,
                  ]}
                >
                  5 Star
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Pay Online Checkbox */}
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => setPayOnline((prev) => !prev)}
            >
              <Ionicons
                name={payOnline ? "checkbox" : "square-outline"}
                size={22}
                color="#10b981"
              />
              <Text style={styles.checkboxLabel}>
                Check this box if you want to pay online
              </Text>
            </TouchableOpacity>
          </View>

          {/* Book/Pay Button */}
          {user ? (
            <TouchableOpacity
              style={styles.bookBtn}
              onPress={handleBooking}
              disabled={loading}
            >
              <Text style={styles.bookBtnText}>
                {loading
                  ? "Processing..."
                  : payOnline
                  ? "Pay Now and Book your trip"
                  : "Book Trip and Pay Later"}
              </Text>
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => router.push("/(auth)")}
              >
                <Text style={styles.loginBtnText}>Login</Text>
              </TouchableOpacity>
              <Text style={styles.loginPrompt}>
                Please login to book your trip
              </Text>
            </>
          )}

          {/* Inquiry Section */}
          <InquirySection />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginTop: 20,
    borderRadius: 14,
    backgroundColor: "#fff",
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "serif",
    textAlign: "center",
    marginBottom: 6,
  },
  days: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "serif",
    textAlign: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
    paddingBottom: 6,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    justifyContent: "space-between",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#22223b",
    flex: 1,
  },
  counterRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconBtn: {
    padding: 4,
  },
  counter: {
    fontSize: 18,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginHorizontal: 8,
    minWidth: 32,
    textAlign: "center",
  },
  dateBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginLeft: 8,
  },
  dateText: {
    marginLeft: 8,
    fontSize: 15,
    color: "#22223b",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginLeft: 8,
    color: "#10b981",
  },
  radioRow: {
    flexDirection: "row",
    gap: 10,
  },
  radioBtn: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginHorizontal: 4,
    backgroundColor: "#f3f4f6",
  },
  radioBtnActive: {
    backgroundColor: "#10b981",
    borderColor: "#10b981",
  },
  radioText: {
    fontSize: 15,
    color: "#22223b",
  },
  radioTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  checkboxLabel: {
    fontSize: 14,
    color: "#22223b",
    marginLeft: 8,
  },
  bookBtn: {
    backgroundColor: "#10b981",
    borderRadius: 8,
    paddingVertical: 14,
    marginTop: 18,
    alignItems: "center",
  },
  bookBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginBtn: {
    backgroundColor: "#10b981",
    borderRadius: 8,
    paddingVertical: 14,
    marginTop: 18,
    alignItems: "center",
  },
  loginBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginPrompt: {
    color: "#ef4444",
    textAlign: "center",
    marginTop: 6,
    fontSize: 14,
  },
});
