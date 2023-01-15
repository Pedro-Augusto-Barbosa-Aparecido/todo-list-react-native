import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    flexDirection: "row",

    backgroundColor: colors.gray500,
    borderWidth: 1,
    borderColor: colors.gray400,
    borderRadius: 8,

    height: 64,

    padding: 12,
    marginBottom: 8
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",

    color: colors.gray100,

    maxWidth: 250,
  },
  checkbox: {
    borderRadius: 99999,
    borderColor: colors.blue,

    marginRight: 12,
  },
  button: {
    width: 32,
    height: 32,

    alignItems: "center",
    justifyContent: "center"
  }
})