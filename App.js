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
  ScrollView,
  StatusBar as RNStatusBar,
} from "react-native";
import AddPlayerModal from "./components/AddPlayerModal";
import PlayerList from "./components/PlayerList";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [players, setPlayers] = useState([]);
  const [isPlusButtonVisible, setIsPlusButtonVisible] = useState(true);
  const [isFirstPlayerAdded, setIsFirstPlayerAdded] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [playerLevel, setPlayerLevel] = useState("");
  const [maxTeamObjective, setMaxTeamObjective] = useState(0);
  const [currentObjective, setCurrentObjective] = useState(0);
  const [isObjectiveExceeded, setIsObjectiveExceeded] = useState(false);

  const handleInputChange = (text) => {
    console.log(`User set max team objective to: ${text}`);
    if (/^\d{0,2}$/.test(text)) {
      setInputValue(text);
      setMaxTeamObjective(parseInt(text, 10) || 0);
      setCurrentObjective(0);
      setIsObjectiveExceeded(false);
    }
  };

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  const addPlayer = (player) => {
    const newPlayer = {
      id: players.length + 1,
      name: player.playerName,
      level: parseInt(player.playerLevel, 10),
      isHighlighted: false,
    };
    setPlayers([newPlayer, ...players]); // Add new player at the top of the list
    setIsPlusButtonVisible(false);
    setIsFirstPlayerAdded(true);
  };

  const togglePlayerLevel = (playerId) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => {
        if (player.id === playerId) {
          const newIsHighlighted = !player.isHighlighted;
          const levelChange = newIsHighlighted ? player.level : -player.level;
          const newObjective = currentObjective + levelChange;
          console.log(`Previous Objective: ${currentObjective}, Player Level: ${player.level}, New Objective: ${newObjective}`);
          setCurrentObjective(newObjective);
          setIsObjectiveExceeded(newObjective > maxTeamObjective);
          return { ...player, isHighlighted: newIsHighlighted };
        }
        return player;
      })
    );
  };

  return (
    <>
      <RNStatusBar backgroundColor="#F8F4FB" barStyle="dark-content" />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.innerContainer}>
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
              accessibilityLabel="SetMaxTeamObjective"
              testID="SetMaxTeamObjective"
            />
            <Text style={[styles.dynamicValueChanger, isObjectiveExceeded && styles.dynamicValueExceeded]}>
              {String(currentObjective).padStart(2, '0')}
            </Text>
            {isPlusButtonVisible && (
              <View style={styles.plusButtonContainer}>
                <TouchableOpacity
                  style={styles.plusButton}
                  onPress={toggleModalVisibility}
                >
                  <Image
                    source={require("./assets/APA/plus-button.png")}
                    style={styles.buttonImage}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            )}
            {isFirstPlayerAdded && (
              <>
                <View style={styles.addNewPlayerContainer}>
                  <Text style={styles.addNewPlayerText}>Add New Player</Text>
                  <TouchableOpacity
                    style={styles.addNewPlayerButton}
                    onPress={toggleModalVisibility}
                  >
                    <Image
                      source={require("./assets/APA/addNewPlayerPlustButton.png")}
                      style={styles.addNewPlayerPlusButton}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.hamburgerContainer}>
                  <Image
                    source={require("./assets/APA/hamburgerMenuIcon.png")}
                    style={styles.hamburgerStyle}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <View style={styles.teamContainer}>
                  <TextInput style={styles.teamNameText} placeholder="Enter Your Team Name" />
                  <PlayerList players={players} togglePlayerLevel={togglePlayerLevel} />
                </View>
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
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F4FB",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  innerContainer: {
    width: "100%",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#590782",
    marginBottom: 10,
    position: "absolute",
    left: 20,
    top: 40,
  },
  textInput: {
    width: 75,
    height: 60,
    borderColor: "#590782",
    borderWidth: 1,
    textAlign: "center",
    marginBottom: 20,
    position: "absolute",
    left: 70,
    top: 100,
  },
  dynamicValueChanger: {
    color: "#309600",
    fontSize: 50,
    marginBottom: 70,
    position: "absolute",
    top: 95,
  },
  dynamicValueExceeded: {
    color: "red",
  },
  plusButtonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: [{ translateX: -80 }, { translateY: 400 }],
  },
  plusButton: {
    marginBottom: 20,
  },
  buttonImage: {
    width: 200,
    height: 200,
  },
  addNewPlayerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    position: "absolute",
    top: 205,
    left: 230,
  },
  addNewPlayerText: {
    fontSize: 18,
    marginRight: 10,
  },
  addNewPlayerButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  addNewPlayerPlusButton: {
    width: 30,
    height: 40,
  },
  hamburgerContainer: {
    position: "absolute",
    left: -30,
    top: 20,
  },
  hamburgerStyle: {
    width: 40,
    height: 50,
    position: "absolute",
    left: 70,
    top: 180,
  },
  teamContainer: {
    width: "100%",
    alignItems: "flex-start",
    marginBottom: 20,
    paddingLeft: 7,
    position: "absolute",
    top: 260,
  },
  teamNameText: {
    fontSize: 25,
    color: "#000",
    textAlign: "left", // Align text to the left
    marginBottom: 20,
  },
});