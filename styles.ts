import { StyleSheet, TextStyle } from "react-native";
import { TextColors, ThemeColors } from "./colors";
export const BORDER_WIDTH = 1;
export const BORDER_RADIUS = 2;

const HeaderStyle: TextStyle = {
  color: TextColors.HEADER_TEXT,
  alignItems: "baseline",
  textAlign: "center",
  textDecorationLine: "underline"
};

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: ThemeColors.background,
    flex: 1
  },
  H1: {
    ...HeaderStyle,
    fontWeight: "800"
  } as TextStyle,
  H2: {
    ...HeaderStyle,
    fontSize: 22,
    fontWeight: "600"
  } as TextStyle,
  H3: {
    ...HeaderStyle,
    fontSize: 20,
    fontWeight: "500"
  } as TextStyle
});
