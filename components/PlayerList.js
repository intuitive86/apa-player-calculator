import React from "react";
import { View, StyleSheet } from "react-native";
import PlayerRowStateHandler from "./PlayerRowStateHandler";

const PlayerList = ({ players, togglePlayerLevel }) => {
  return (
    <View style={styles.container}>
      {players.map((player, index) => (
        <View key={player.id} style={[styles.playerContainer, index !== players.length - 1 && styles.playerContainerSpacing]}>
          <PlayerRowStateHandler player={player} togglePlayerLevel={togglePlayerLevel} />
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
  playerContainer: {
    width: "100%",
  },
  playerContainerSpacing: {
    marginBottom: 40, // Adjust this value to control the spacing between players
  },
});

export default PlayerList;