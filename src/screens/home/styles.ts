import { colors } from './../../utils/colors';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray600
  },
  form: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,

    marginTop: -27
  },
  input: {
    backgroundColor: colors.gray500,
    height: 54,
    flex: 1,
    borderRadius: 8,
    padding: 16,

    color: colors.gray100,

    borderWidth: 1,
    borderColor: "transparent"
  },
  inputFocused: {
    borderColor: colors.purpleDark
  },
  button: {
    width: 54,
    height: 54,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: colors.blueDark,
    borderRadius: 8,

    marginLeft: 8
  }
})