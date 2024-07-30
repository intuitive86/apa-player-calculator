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
    marginTop: 20,
  },
  playerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  playerName: {
    fontSize: 18,
    color: "red", // Making the color red to make player info visible for now
  },
  playerLevel: {
    fontSize: 18,
    color: "red", // Making the color red to make player info visible for now
  },
});

export default PlayerList;
