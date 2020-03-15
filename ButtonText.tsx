import * as React from "react";
import { StyleSheet, Text } from "react-native";

export const ButtonText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    color: "white",
    fontSize: 18
  }
});
