import { StyleSheet, TextInput, TextInputProps } from "react-native";

export type ThemedTextInputProps = TextInputProps;
export default function ThemedTextInput({
  style,
  ...otherProps
}: ThemedTextInputProps) {
  return <TextInput style={[styles.input, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: "100%",
    borderWidth: 1,
    borderColor: "#8D9BB5",
    borderRadius: 14,
    fontSize: 14,
    padding: 20,
  },
});
