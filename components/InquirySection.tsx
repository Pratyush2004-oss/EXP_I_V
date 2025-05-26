import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";
import { API_URL } from "@/assets/services/API";
import { useAuthStore } from "@/assets/store/auth.store";
import WhatsAppButton from "./WhatsappBtn";

export default function InquirySection({ expand = false }) {
  const { user, token } = useAuthStore();
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    if (!message) {
      Alert.alert("Error", "Please Enter Query");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post(
        `${API_URL}/api/v1/query/create-query`,
        { message },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Alert.alert("Success", response.data.message);
      setMessage("");
      setOpenDialog(false);
    } catch (error: any) {
      Alert.alert(
        "Error",
        error?.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  if (!expand) {
    return (
      <View style={{ width: "100%" }}>
        <TouchableOpacity
          style={styles.raiseBtn}
          onPress={() => setOpenDialog(true)}
        >
          <Text style={styles.raiseBtnText}>Raise your Query</Text>
        </TouchableOpacity>
        <Modal
          visible={openDialog}
          animationType="slide"
          transparent
          onRequestClose={() => setOpenDialog(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Raise your Query</Text>
              <Text style={styles.modalDesc}>
                You will be responded via call within 24 hours.
              </Text>
              {user ? (
                <View style={{ marginVertical: 12 }}>
                  <Text style={styles.label}>Elaborate your query</Text>
                  <TextInput
                    style={styles.textarea}
                    multiline
                    numberOfLines={5}
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Enter your query"
                  />
                </View>
              ) : (
                <Text style={styles.notLoggedInText}>
                  Please sign in to raise a query.
                </Text>
              )}
              <View style={styles.modalFooter}>
                {user ? (
                  <TouchableOpacity
                    style={styles.sendBtn}
                    onPress={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? (
                      <ActivityIndicator color="#fff" />
                    ) : (
                      <Text style={styles.sendBtnText}>Send</Text>
                    )}
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.sendBtn}
                    onPress={() => {
                      setOpenDialog(false);
                      router.push("/(auth)");
                    }}
                  >
                    <Text style={styles.sendBtnText}>Sign In</Text>
                  </TouchableOpacity>
                )}
                <TouchableOpacity
                  style={styles.cancelBtn}
                  onPress={() => setOpenDialog(false)}
                >
                  <Text style={styles.cancelBtnText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  // Expanded view
  if (user) {
    return (
      <View style={styles.expandedContainer}>
        <Text style={styles.expandedTitle}>Raise your Query</Text>
        <Text style={styles.label}>Elaborate your query</Text>
        <TextInput
          style={styles.textarea}
          multiline
          numberOfLines={5}
          value={message}
          onChangeText={setMessage}
          placeholder="Enter your query"
        />
        <TouchableOpacity
          style={styles.sendBtn}
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.sendBtnText}>Send</Text>
          )}
        </TouchableOpacity>
        <WhatsAppButton />
      </View>
    );
  }

  // Not logged in, expanded
  return (
    <>
      <TouchableOpacity
        style={styles.sendBtn}
        onPress={() => router.push("/(auth)")}
      >
        <Text style={styles.sendBtnText}>Sign In</Text>
      </TouchableOpacity>
      <WhatsAppButton />
    </>
  );
}

const styles = StyleSheet.create({
  raiseBtn: {
    backgroundColor: "#34d399",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginVertical: 8,
  },
  raiseBtnText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
    letterSpacing: 0.5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 20,
    width: "90%",
    maxWidth: 400,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#22223b",
    marginBottom: 6,
    textAlign: "center",
  },
  modalDesc: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 16,
    textAlign: "center",
  },
  label: {
    fontSize: 15,
    color: "#22223b",
    fontWeight: "bold",
    marginBottom: 6,
  },
  textarea: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    padding: 10,
    minHeight: 80,
    fontSize: 15,
    color: "#22223b",
    backgroundColor: "#f9fafb",
    marginBottom: 12,
    textAlignVertical: "top",
  },
  modalFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  sendBtn: {
    backgroundColor: "#10b981",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    marginRight: 8,
  },
  sendBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  cancelBtn: {
    backgroundColor: "#e5e7eb",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignItems: "center",
  },
  cancelBtnText: {
    color: "#22223b",
    fontWeight: "bold",
    fontSize: 16,
  },
  expandedContainer: {
    flexDirection: "column",
    gap: 10,
    maxWidth: 400,
    width: "100%",
    alignSelf: "center",
    marginTop: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  expandedTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#22223b",
  },
  notLoggedInText: {
    color: "#ef4444",
    textAlign: "center",
    marginVertical: 12,
    fontSize: 15,
  },
});
