import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import defaultPlayerButtonImage from "../assets/APA/PlayerNameBG/defaultPlayerButtonImage.png";

const PlayerList = ({ players }) => {
  return (
    <View style={styles.container}>
      {players.map((player) => (
        <TouchableOpacity key={player.id} style={styles.playerRow}>
          <Image
            source={defaultPlayerButtonImage}
            style={styles.playerBackground}
            resizeMode="contain"
          />
          <Text style={styles.playerName}>{player.name}</Text>
          <Text style={styles.playerLevel}>{player.level}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  playerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "80%",
    position: "relative",
  },
  playerBackground: {
    position: "absolute",
    width: "340%",
    height: "340%",
    zIndex: -1,
  },
  playerName: {
    fontSize: 18,
    color: "#fff",
    left: -60,
  },
  playerLevel: {
    fontSize: 18,
    color: "#fff",
    left: 40,
  },
});

export default PlayerList;