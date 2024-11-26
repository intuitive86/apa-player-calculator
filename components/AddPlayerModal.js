import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";

const AddPlayerModal = ({ isVisible, onClose, addPlayer, setPlayerName: setAppPlayerName, setPlayerLevel: setAppPlayerLevel }) => {
  const [playerName, setPlayerName] = useState("");
  const [playerLevel, setPlayerLevel] = useState("");
  const [isSaveEnabled, setIsSaveEnabled] = useState(false);

  useEffect(() => {
    // Enable save button if both playerName and playerLevel are not empty
    setIsSaveEnabled(playerName.trim() !== '' && playerLevel.trim() !== '');
  }, [playerName, playerLevel]);

  const handleSave = () => {
    console.log("Save button pressed");
    console.log(`Player Name: ${playerName}, Player Level: ${playerLevel}`);
    addPlayer({ playerName, playerLevel });
    onClose();
  };

  return (
    <Modal visible={isVisible} transparent={true} animationType="none">
      <StatusBar backgroundColor="rgba(0, 0, 0, 0.3)" barStyle="light-content" />
      <View style={styles.modalContainer}>
        <View style={styles.imageContainer}>
          <Text style={styles.addPlayerText}>Add Player Name</Text>
          <Image
            source={require("../assets/APA/addPlayerBox.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <TextInput
            style={styles.nameInput}
            placeholder="Enter Player Name Here"
            onChangeText={setPlayerName}
            value={playerName}
          />
          <Text style={styles.addLevel}>Add Player Level</Text>
          <TextInput
            style={styles.inputLevel}
            placeholder="0"
            keyboardType="numeric"
            onChangeText={(text) => {
              if (/^\d{0,2}$/.test(text)) {
                setPlayerLevel(text);
              }
            }}
            value={playerLevel}
            maxLength={1}
            editable={true}
            selectTextOnFocus={true}
          />
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => {
              console.log("Save button pressed");
              handleSave();
            }}
            disabled={!isSaveEnabled}
          >
            <Image
              source={
                isSaveEnabled
                  ? require("../assets/APA/saveButtonEnabled.png")
                  : require("../assets/APA/saveButtonDisabled.png")
              }
              style={styles.saveButton}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  image: {
    width: 320,
    height: 600,
  },
  imageContainer: {
    position: "relative",
  },
  addPlayerText: {
    position: "absolute",
    top: 50,
    alignSelf: "center",
    color: "white",
    fontWeight: "600",
    fontSize: 24,
    zIndex: 1,
  },
  nameInput: {
    position: "absolute",
    top: 100, // Adjust as needed to place below "Add Player Name"
    width: 280, // Adjust width as needed
    height: 50, // Adjust height as needed
    borderColor: "#590782",
    borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "left",
    backgroundColor: "#fff",
    fontSize: 18, // Adjust font size as needed
    paddingLeft: 7,
    zIndex: 1,
    borderRadius: 10,
  },
  addLevel: {
    position: "absolute",
    top: 180,
    alignSelf: "center",
    color: "white",
    fontWeight: "600",
    fontSize: 24,
    zIndex: 1,
  },
  inputLevel: {
    position: "absolute",
    top: 220, // Adjust as needed to place below "Add Player Name"
    width: 75, // Adjust width as needed
    height: 60, // Adjust height as needed
    borderRadius: 10,
    borderColor: "#590782",
    borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#fff",
    fontSize: 24, // Adjust font size as needed
    paddingLeft: 0,
    zIndex: 1,
    borderRadius: 10,
  },
  touchable: {
    width: 100, // Set the width of the TouchableOpacity
    height: 100, // Set the height of the TouchableOpacity
    justifyContent: "center", // Center the content vertically
    alignItems: "center", // Center the content horizontally
    position: "absolute",
    left: "40%",
    top: "115%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  saveButton: {
    position: "absolute",
    top: -200,
    alignSelf: "center",
    zIndex: 1,
    width: 120,
    height: 110,
  },
});

export default AddPlayerModal;
