import React, { useState } from "react";
import { Text, StyleSheet, Image, TouchableOpacity, View, Platform } from "react-native";
import defaultPlayerButtonImage from "../assets/APA/PlayerNameBG/defaultPlayerButtonImage.png";
import playerHighlightStateGreen from "../assets/APA/PlayerNameBG/playerHighlightStateGreen.png";

const PlayerRowStateHandler = ({ player }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handlePress = () => {
    setIsHighlighted(!isHighlighted);
  };

  return (
    <TouchableOpacity style={styles.playerRow} onPress={handlePress}>
      <Image
        source={isHighlighted ? playerHighlightStateGreen : defaultPlayerButtonImage}
        style={styles.playerBackground}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.playerName}>{player.name}</Text>
        <Text style={styles.playerLevel}>{player.level}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  playerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
    position: "relative",
    marginTop: Platform.OS === "ios" ? 15 : 1,
  },
  playerBackground: {
    position: "absolute",
    width: Platform.OS === "ios" ? "330%" : "300%",
    height: Platform.OS === "ios" ? "330%" : "300%",
    zIndex: -1,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  playerName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: -30,
  },
  playerLevel: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
});

export default PlayerRowStateHandler;