import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ADVENTURE, RAJASTHANDISTRICTS } from "@/assets/services/Options";
import BookingCard from "@/components/BookingCard";

export default function CreateYourOwnPackage({
  title = "Create Your Own Package",
}) {
  const [PlaceList, setPlaceList] = useState<string[]>([]);
  const [AdventureList, setAdventureList] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState();
  const [selectedAdventure, setSelectedAdventure] = useState();
  const [onDone, setOnDone] = useState(false);

  const OnCitySelect = (city: string | undefined) => {
    if (city && !PlaceList.includes(city)) {
      setPlaceList([...PlaceList, city]);
    }
    setSelectedCity(undefined);
  };

  const OnAdventureSelect = (adventure: string | undefined) => {
    if (adventure && !AdventureList.includes(adventure)) {
      setAdventureList([...AdventureList, adventure]);
    }
    setSelectedAdventure(undefined);
  };

  const onDeleteCity = (city: string) => {
    setPlaceList(PlaceList.filter((place) => place !== city));
  };

  const onDeleteAdventure = (adventure: string) => {
    setAdventureList(AdventureList.filter((adv) => adv !== adventure));
  };

  const resetAll = () => {
    setPlaceList([]);
    setAdventureList([]);
    setOnDone(false);
    setSelectedCity(undefined);
    setSelectedAdventure(undefined);
  };

  return (
    <ScrollView contentContainerStyle={styles.modalContent}>
      <Text style={styles.modalTitle}>{title}</Text>
      <Text style={styles.modalDesc}>
        Fill basic details and create your own package
      </Text>
      {!onDone ? (
        <>
          {/* City Picker */}
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedCity}
              onValueChange={(itemValue) => OnCitySelect(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Cities to visit" value={undefined} />
              {RAJASTHANDISTRICTS.map((city, idx) => (
                <Picker.Item key={idx} label={city} value={city} />
              ))}
            </Picker>
          </View>
          {/* Selected Cities */}
          <View style={styles.chipRow}>
            {PlaceList.map((city, idx) => (
              <View key={idx} style={styles.chip}>
                <Text style={styles.chipText}>{city}</Text>
                <TouchableOpacity onPress={() => onDeleteCity(city)}>
                  <Text style={styles.chipDelete}>×</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
          {/* Adventure Picker */}
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedAdventure}
              onValueChange={(itemValue) => OnAdventureSelect(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Adventures" value={undefined} />
              {ADVENTURE.data.map((adv, idx) => (
                <Picker.Item key={idx} label={adv.name} value={adv.name} />
              ))}
            </Picker>
          </View>
          {/* Selected Adventures */}
          <View style={styles.chipRow}>
            {AdventureList.map((adv, idx) => (
              <View key={idx} style={styles.chip}>
                <Text style={styles.chipText}>{adv}</Text>
                <TouchableOpacity onPress={() => onDeleteAdventure(adv)}>
                  <Text style={styles.chipDelete}>×</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <TouchableOpacity
            style={[
              styles.doneButton,
              { backgroundColor: PlaceList.length < 1 ? "#a3a3a3" : "#10b981" },
            ]}
            disabled={PlaceList.length < 1}
            onPress={() => setOnDone(true)}
          >
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.sectionTitle}>Cities</Text>
          <View style={styles.chipRow}>
            {PlaceList.map((city, idx) => (
              <View key={idx} style={styles.chip}>
                <Text style={styles.chipText}>{city}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.sectionTitle}>Adventures</Text>
          <View style={styles.chipRow}>
            {AdventureList.map((adv, idx) => (
              <View key={idx} style={styles.chip}>
                <Text style={styles.chipText}>{adv}</Text>
              </View>
            ))}
          </View>
          <BookingCard
            props={{
              PlaceList: PlaceList,
              AdventureList: AdventureList,
              PackageName: "Custom Package",
              PackageDays: PlaceList.length,
              PackagePrice: 1800,
            }}
          />
          <TouchableOpacity style={styles.doneButton} onPress={resetAll}>
            <Text style={styles.doneButtonText}>Reset</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    padding: 18,
    backgroundColor: "#f3f4f6",
    minHeight: "100%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#22223b",
    marginBottom: 8,
    textAlign: "center",
  },
  modalDesc: {
    fontSize: 15,
    color: "#555",
    marginBottom: 18,
    textAlign: "center",
  },
  pickerWrapper: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    overflow: "hidden",
  },
  picker: {
    width: "100%",
  },
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12,
    marginTop: 2,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#10b981",
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 6,
    marginBottom: 6,
  },
  chipText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    marginRight: 4,
  },
  chipDelete: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 2,
  },
  doneButton: {
    width: "100%",
    backgroundColor: "#10b981",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 12,
    marginBottom: 8,
    alignItems: "center",
  },
  doneButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#22223b",
    marginTop: 18,
    marginBottom: 8,
    textAlign: "center",
  },
});
