import { View, Text, StyleSheet } from "react-native";

const PlayerList = ({ players }) => {
  return (
    <View style={styles.container}>
      {players.map((player) => (
        <View key={player.id} style={styles.playerRow}>
          <Text style={styles.playerName}>{player.name}</Text>
          <Text style={styles.playerLevel}>{player.level}</Text>
        </View>
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
    justifyContent: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "80%",
    position: "relative",
  },
  playerName: {
    fontSize: 18,
    color: "#000",
    position: "absolute",
    left: -30,
  },
  playerLevel: {
    fontSize: 18,
    color: "#000",
    position: "absolute",
    left: 300,
  },
});

export default PlayerList;