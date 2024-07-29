import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import AddPlayerModal from "./components/AddPlayerModal";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [players, setPlayers] = useState([]);
  const [isPlusButtonVisible, setIsPlusButtonVisible] = useState(true);
  const [isFirstPlayerAdded, setIsFirstPlayerAdded] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [playerLevel, setPlayerLevel] = useState("");

  const handleInputChange = (text) => {
    if (/^\d{0,2}$/.test(text)) {
      setInputValue(text);
    }
  };

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  const addPlayer = (player) => {
    const newPlayer = {
      id: players.length + 1,
      name: playerName,
      level: playerLevel,
    };
    setPlayers([...players, newPlayer]);
    setIsPlusButtonVisible(false);
    setIsFirstPlayerAdded(true);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <Text style={styles.title}>APA Player Calculator</Text>
        <TextInput
          style={styles.textInput}
          placeholder="00"
          onChangeText={handleInputChange}
          keyboardType="numeric"
          maxLength={2}
          editable={true}
          selectTextOnFocus={true}
          value={inputValue}
        />
        <Text style={styles.dynamicValueChanger}> 00</Text>
        {isPlusButtonVisible && (
          <TouchableOpacity
            style={styles.button}
            onPress={toggleModalVisibility}
          >
            <Image
              source={require("./assets/APA/plus-button.png")}
              style={styles.buttonImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        {isFirstPlayerAdded && (
          <>
            <View>
              <Text style={styles.addNewPlayerText}>Add New Player</Text>
              <TouchableOpacity style={styles.button}>
                <Image
                  source={require("./assets/APA/addNewPlayerPlustButton.png")}
                  style={styles.addNewPlayerPlusButton}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Image
                source={require("./assets/APA/hamburgerMenuIcon.png")}
                style={styles.hamburgerStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </>
        )}
        {isModalVisible && (
          <AddPlayerModal
            isVisible={isModalVisible}
            onClose={toggleModalVisibility}
            addPlayer={addPlayer}
            setPlayerName={setPlayerName}
            setPlayerLevel={setPlayerLevel}
          />
        )}
        <StatusBar style="auto" />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F4FB",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 40,
  },
  title: {
    marginTop: -15,
    marginLeft: -65,
    fontSize: 24,
    color: "#590782",
    fontStyle: "San Francisco",
  },
  textInput: {
    width: 75,
    height: 60,
    marginTop: 20,
    marginLeft: -120,
    borderColor: "#590782",
    borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "left",
    backgroundColor: "#fff",
    fontSize: 35,
    paddingLeft: 16,
  },
  dynamicValueChanger: {
    color: "#309600",
    marginTop: -60,
    marginLeft: 90,
    fontSize: 50,
  },
  button: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    alignItems: "center",
    justifyContent: "center",
  },
  buttonImage: {
    width: 200,
    height: 200,
  },
  addNewPlayerContainer: {
    position: "absolute",
    right: 10,
    top: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  addNewPlayerPlusButton: {
    width: 30,
    height: 40,
    position: "absolute",
    right: -215,
    top: 72,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  addNewPlayerText: {
    width: 70,
    height: 50,
    position: "absolute",
    right: -250,
    top: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  hamburgerStyle: {
    width: 40,
    height: 50,
    position: "absolute",
    right: 10,
    top: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
