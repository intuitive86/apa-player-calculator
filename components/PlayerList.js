import React from "react";
import { View, StyleSheet } from "react-native";
import PlayerRowStateHandler from "./PlayerRowStateHandler";

const PlayerList = ({ players }) => {
  return (
    <View style={styles.container}>
      {players.map((player) => (
        <PlayerRowStateHandler key={player.id} player={player} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
});

export default PlayerList;