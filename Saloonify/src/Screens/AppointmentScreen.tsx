// AppointmentScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  Modal,
  TextInput,
} from "react-native";
import saloonData from "../../Constants/saloonData";
import RoundedButton from "../Components/Button";
import { Card } from "../Components/Card";
import Rating from "../Components/Rating";
import TopNavigationBar from "../Components/TopBarNavigation";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../Constants/DIMENSIONS";
import { CheckBox } from "react-native-elements";
import Toast from "react-native-toast-message";

const AppointmentScreen = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleNameChange = (text: React.SetStateAction<string>) => {
    setName(text);
  };

  const handleEmailChange = (text: React.SetStateAction<string>) => {
    setEmail(text);
  };

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const handleFormSubmit = () => {
    // Check if name and email are not empty
    if (name.trim() === "" || email.trim() === "") {
      // Show error toast message for empty fields
      Toast.show({
        type: "error",
        text1: "Name and Email are required!",
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 30,
      });
      return; // Prevent form submission
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Selected Slot:", selectedSlot);

    // Update bookedSlots to mark the selected slot as booked
    // setBookedSlots([...bookedSlots, selectedSlot]);
    const { saloonId } = route.params;
    const selectedSaloon = saloonData.find((saloon) => saloon.id === saloonId);

    selectedSaloon.appointments = selectedSaloon?.appointments.map(
      (appointment) => {
        if (appointment.time === selectedSlot) {
          return { ...appointment, booked: true };
        } else {
          return appointment;
        }
      }
    );
    // Close the modal after submitting
    setModalVisible(false);
    Toast.show({
      type: "success",
      text1: "Successfully booked!",
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 30,
    });
  };

  const { saloonId } = route.params;
  const selectedSaloon = saloonData.find((saloon) => saloon.id === saloonId);
  const renderSlotItem = ({ item }) => {
    const formattedDate = formatDate(item.date);
    const isBooked = item.booked;

    return (
      <View style={styles.slotItem}>
        <Text>
          {formattedDate}, {item.time}
        </Text>
        <Text>{isBooked ? "Booked" : "Available"}</Text>
      </View>
    );
  };

  const formatDate = (dateString: string | number | Date) => {
    const options = { month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const availableSlots = selectedSaloon?.appointments.filter(
    (item) => !item.booked
  );
  return (
    <View>
      <TopNavigationBar />
      <Card>
        <Image source={selectedSaloon?.image} style={styles.saloonImage} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.saloonName}>{selectedSaloon?.name}</Text>
          <View style={{ marginTop: 10, marginRight: 15 }}>
            <Rating value={selectedSaloon?.rating} />
          </View>
        </View>

        <Text style={styles.saloonCity}>City: {selectedSaloon?.city}</Text>
      </Card>
      <Text style={styles.title}>Available Slots</Text>
      <FlatList
        data={selectedSaloon?.appointments}
        renderItem={renderSlotItem}
        keyExtractor={(item) => item.time}
      />

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Booking Cancelled");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Booking An Appointment</Text>
              <TextInput
                placeholder="Name"
                style={styles.input}
                value={name}
                onChangeText={handleNameChange}
              />
              <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={handleEmailChange}
              />
              <FlatList
                data={availableSlots}
                renderItem={({ item }) => (
                  <View style={styles.slotItem}>
                    <TouchableOpacity
                      onPress={() => handleSlotSelection(item.time)}
                    >
                      <Text>
                        {formatDate(item.date)}, {item.time}
                      </Text>
                    </TouchableOpacity>
                    <CheckBox
                      checked={selectedSlot === item.time}
                      onPress={() => handleSlotSelection(item.time)}
                    />
                  </View>
                )}
                keyExtractor={(item) => item.time}
              />
              <RoundedButton title="Book Now" onPress={handleFormSubmit} />
            </View>
          </View>
        </Modal>
      </View>
      <RoundedButton
        title="Book Appointment"
        onPress={() => setModalVisible(true)}
      />
      {/* Add your booking button or other components here */}
    </View>
  );
};
const styles = StyleSheet.create({
  saloonItem: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
    margin: 10,
  },
  saloonImage: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 200,
    width: "100%",
  },
  saloonName: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 5,
    marginLeft: 5,
  },
  saloonRating: {
    marginLeft: 5,
    fontSize: 16,
    marginBottom: 5,
  },
  saloonCity: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 5,
  },
  title: { fontSize: 25, fontWeight: "bold", marginVertical: 5, marginLeft: 5 },
  slotItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    marginTop: SCREEN_HEIGHT * 0.3,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.7,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
});
export default AppointmentScreen;
