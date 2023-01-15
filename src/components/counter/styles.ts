import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    justifyContent: "space-between",

    paddingHorizontal: 24,

    marginTop: 33,
    marginBottom: 20
  },

  counterContainer: {
    flexDirection: "row",

    alignItems: "center"

  },

  span: {
    color: colors.blue,
    
    fontSize: 14,
    fontWeight: "bold",

    marginRight: 8
  },

  counterNumber: {
    color: colors.gray200,

    fontSize: 12,
    fontWeight: "bold",
  },

  counterNumberContainer: {
    backgroundColor: colors.gray400,

    paddingVertical: 2,
    paddingHorizontal: 8,

    borderRadius: 9999
  }
})