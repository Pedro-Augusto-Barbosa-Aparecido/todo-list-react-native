import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1
  },
  emptyContainer: {
    flex: 1,

    height: 210,

    borderTopWidth: 1,
    borderTopColor: colors.gray400,

    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: 20,
    paddingVertical: 48
  },
  image: {
    width: 56,
    height: 56,

    marginBottom: 16
  },
  text: {
    color: colors.gray300,
    fontSize: 14,

    textAlign: "center"
  }
})