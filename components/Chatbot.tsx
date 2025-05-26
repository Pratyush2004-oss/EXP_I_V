import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Dimensions,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const packageRedirectKeywords = ["package", "tour", "holiday"];
const hotelRedirectKeywords = ["hotel", "stay", "accommodation"];

const packageResponses = [
  "Our packages are designed for every kind of traveler. Would you like to see our latest offers?",
  "We have a variety of tour packages! Redirecting you to our Packages section...",
  "Looking for a memorable trip? Check out our curated packages.",
];

const hotelResponses = [
  "We offer hotels from budget to luxury. Redirecting you to our Hotels section...",
  "Find the best stays with us! Taking you to the Hotels section.",
  "Need a place to stay? Let me show you our hotel options.",
];

const generalResponses = [
  "I can help you with bookings, travel tips, and more. What would you like to do?",
  "Feel free to ask about flights, trains, hotels, or packages!",
  "I'm here to assist you with your travel plans. How can I help?",
  "You can ask me about car rentals, sightseeing, or anything else related to your trip.",
];

const travelServices = {
  "Flight Booking": [
    "Domestic flights",
    "International flights",
    "Round-trip flights",
    "One-way flights",
    "Flight + hotel packages",
  ],
  "Train Booking": [
    "Rajdhani Express",
    "Shatabdi Express",
    "Duronto Express",
    "Local trains",
    "Tourist special trains",
  ],
  "Bike and Car Rental": [
    "Self-drive cars",
    "Chauffeur-driven cars",
    "Motorcycle rentals",
    "Scooter rentals",
    "Long-term rentals",
  ],
  "Hotel Booking": [
    "Luxury hotels",
    "Budget hotels",
    "Heritage properties",
    "Resorts",
    "Homestays",
  ],
  "Package Booking": [
    "Golden Triangle (Delhi-Agra-Jaipur)",
    "Rajasthan cultural tour",
    "Jaipur city tour",
    "Weekend getaways",
    "Customized packages",
  ],
};

const quickReplies = [
  "Show me tour packages",
  "Find hotels in Jaipur",
  "How do I book a flight?",
  "What are your hotel options in Jaipur?",
  "Can I get a car with driver?",
  "What's included in your tour packages?",
  "How can I cancel a booking?",
  "Contact support",
];

const { width, height } = Dimensions.get("window");

type Message = {
  id: number;
  text: string;
  sender: string;
  options?: string[];
  redirect?: string;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your travel assistant from Explore India View. How can I help you today?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [showServices, setShowServices] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (scrollViewRef.current) {
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages, isOpen]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  const generateBotResponse = (userInput:string) => {
    const lowerInput = userInput.toLowerCase();
    let responseText = "";
    let responseOptions: string[] = [];
    let redirect = undefined;

    if (packageRedirectKeywords.some((k) => lowerInput.includes(k))) {
      responseText =
        packageResponses[Math.floor(Math.random() * packageResponses.length)];
      redirect = "packages";
    } else if (hotelRedirectKeywords.some((k) => lowerInput.includes(k))) {
      responseText =
        hotelResponses[Math.floor(Math.random() * hotelResponses.length)];
      redirect = "hotels";
    } else if (lowerInput.includes("flight") || lowerInput.includes("fly")) {
      responseText =
        "We can certainly help with flight bookings! Here are some options:";
      responseOptions = travelServices["Flight Booking"];
      redirect = "flight";
    } else if (lowerInput.includes("train") || lowerInput.includes("rail")) {
      responseText =
        "We offer various train booking services. Here are some options:";
      responseOptions = travelServices["Train Booking"];
      redirect = "train";
    } else if (
      lowerInput.includes("car") ||
      lowerInput.includes("bike") ||
      lowerInput.includes("rent")
    ) {
      responseText = "We have excellent rental options. Here are some choices:";
      responseOptions = travelServices["Bike and Car Rental"];
    } else if (
      lowerInput.includes("hello") ||
      lowerInput.includes("hi") ||
      lowerInput.includes("hey")
    ) {
      responseText =
        "Hello! Welcome to Explore India View. How can I assist you with your travel plans today?";
    } else if (lowerInput.includes("thank")) {
      responseText =
        "You're welcome! Is there anything else I can help you with?";
    } else if (lowerInput.includes("cancel") || lowerInput.includes("refund")) {
      responseText =
        "For cancellations or refunds, please visit our 'My Bookings' section or contact our customer support at support@exploreindiaview.com";
    } else if (lowerInput.includes("contact") || lowerInput.includes("help")) {
      responseText =
        "You can reach us at:\n- Phone: +91 95880 41628 \n- Email: exploreindiaview@gmail.com\n- Office: Jaipur";
    } else if (
      lowerInput.includes("one day") ||
      lowerInput.includes("day trip") ||
      lowerInput.includes("same day")
    ) {
      responseText =
        "Looking for a one day trip? Redirecting you to our One Day Booking section...";
      redirect = "oneday";
    } else {
      responseText =
        generalResponses[Math.floor(Math.random() * generalResponses.length)];
      setShowServices(true);
    }

    // Handle redirect (replace with navigation if needed)
    if (redirect) {
      setTimeout(() => {
        // Example: navigation.navigate(redirect)
        // You can use Linking.openURL or navigation here
      }, 1500);
    }

    return {
      id: messages.length + 2,
      text: responseText,
      sender: "bot",
      options: responseOptions.length > 0 ? responseOptions : undefined,
      redirect,
    };
  };

  const handleQuickReply = (reply:string) => {
    setInputValue(reply);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const handleServiceSelect = (service:string) => {
    const userMessage = {
      id: messages.length + 1,
      text: service,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMessage]);
    setShowServices(false);

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: `Great choice! To book "${service}", please visit our ${
          service.includes("flight")
            ? "Flights"
            : service.includes("train")
            ? "Trains"
            : service.includes("car") || service.includes("bike")
            ? "Rentals"
            : service.includes("hotel")
            ? "Hotels"
            : "Packages"
        } section or would you like me to guide you through the process?`,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  const formatMessage = (text:string) => {
    return text.split("\n").map((line, i) => (
      <Text key={i} style={{}}>
        {line}
      </Text>
    ));
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <TouchableOpacity
          style={styles.fab}
          onPress={() => setIsOpen(true)}
          activeOpacity={0.8}
        >
          <Image source={require("@/assets/images/agent.png")} style={styles.iconImage}/>
        </TouchableOpacity>
      )}

      {/* Chatbot Popover */}
      {isOpen && (
        <Animated.View style={styles.chatbotContainer}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Explore India View Assistant</Text>
            <TouchableOpacity onPress={() => setIsOpen(false)}>
              <Ionicons name="close" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            keyboardVerticalOffset={80}
          >
            <ScrollView
              ref={scrollViewRef}
              style={styles.messagesContainer}
              contentContainerStyle={{ paddingVertical: 12 }}
              onContentSizeChange={() =>
                scrollViewRef.current?.scrollToEnd({ animated: true })
              }
            >
              {messages.map((message) => (
                <View
                  key={message.id}
                  style={[
                    styles.messageRow,
                    message.sender === "user"
                      ? styles.userRow
                      : styles.botRow,
                  ]}
                >
                  <View
                    style={[
                      styles.messageBubble,
                      message.sender === "user"
                        ? styles.userBubble
                        : styles.botBubble,
                    ]}
                  >
                    {formatMessage(message.text)}
                    {message.options && (
                      <View style={{ marginTop: 8 }}>
                        {message.options.map((option, idx) => (
                          <TouchableOpacity
                            key={idx}
                            style={styles.optionButton}
                            onPress={() => handleServiceSelect(option)}
                          >
                            <Text style={styles.optionButtonText}>{option}</Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    )}
                  </View>
                </View>
              ))}
            </ScrollView>

            {showServices && (
              <View style={styles.servicesContainer}>
                <Text style={styles.servicesTitle}>Select a service:</Text>
                <View style={styles.servicesGrid}>
                  {Object.keys(travelServices).map((service) => (
                    <TouchableOpacity
                      key={service}
                      style={styles.serviceButton}
                      onPress={() => handleServiceSelect(service)}
                    >
                      <Text style={styles.serviceButtonText}>{service}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}

            <View style={styles.quickRepliesContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {quickReplies.map((reply, idx) => (
                  <TouchableOpacity
                    key={idx}
                    style={styles.quickReply}
                    onPress={() => handleQuickReply(reply)}
                  >
                    <Text style={styles.quickReplyText}>{reply}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="Type your message..."
                onSubmitEditing={handleSendMessage}
                returnKeyType="send"
              />
              <TouchableOpacity
                style={styles.sendButton}
                onPress={handleSendMessage}
              >
                <Ionicons name="send" size={22} color="#fff" />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </Animated.View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 70,
    right: 20,
    backgroundColor: "#fb923c",
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 10,
  },
  iconImage: {
    width: 50, // Set the width of the image
    height: 50, // Set the height of the image
    borderRadius: 30, // Optional: Make the image circular
  },
  chatbotContainer: {
    position: "absolute",
    bottom: 24,
    right: 16,
    width: width > 500 ? 400 : width * 0.92,
    height: 500,
    backgroundColor: "#fff",
    borderRadius: 18,
    overflow: "hidden",
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 200,
  },
  header: {
    backgroundColor: "#fb923c",
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  messagesContainer: {
    flex: 1,
    backgroundColor: "#f9fafb",
    paddingHorizontal: 10,
  },
  messageRow: {
    marginBottom: 10,
    flexDirection: "row",
  },
  userRow: {
    justifyContent: "flex-end",
  },
  botRow: {
    justifyContent: "flex-start",
  },
  messageBubble: {
    maxWidth: "80%",
    padding: 10,
    borderRadius: 12,
  },
  userBubble: {
    backgroundColor: "#fb923c",
    borderTopRightRadius: 0,
    alignSelf: "flex-end",
  },
  botBubble: {
    backgroundColor: "#fff",
    borderColor: "#e5e7eb",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    alignSelf: "flex-start",
  },
  optionButton: {
    backgroundColor: "#fed7aa",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginVertical: 2,
  },
  optionButtonText: {
    color: "#c2410c",
    fontWeight: "bold",
    fontSize: 13,
  },
  servicesContainer: {
    backgroundColor: "#f3f4f6",
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
    padding: 10,
  },
  servicesTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#374151",
    marginBottom: 6,
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  serviceButton: {
    backgroundColor: "#fff",
    borderColor: "#fdba74",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    margin: 3,
  },
  serviceButtonText: {
    color: "#ea580c",
    fontSize: 12,
    fontWeight: "bold",
  },
  quickRepliesContainer: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
  },
  quickReply: {
    backgroundColor: "#f3f4f6",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 4,
  },
  quickReplyText: {
    color: "#374151",
    fontSize: 13,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
  },
  input: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 15,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  sendButton: {
    backgroundColor: "#fb923c",
    borderRadius: 8,
    padding: 10,
  },
});