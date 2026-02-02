import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { ThemedText } from "./themed-text";

export type ThemedButtonProps = TouchableOpacityProps & {
  title?: string;
  type?: "default" | "transparent";
};

export default function ThemedButton({
  title,
  children,
  style,
  type = "default",
  ...otherProps
}: ThemedButtonProps) {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.btn,
        type === "transparent" ? styles.transparent : undefined,
        style,
      ]}
      {...otherProps}
    >
      <ThemedText
        style={[
          type === "default" ? styles.text : undefined,
          type === "transparent" ? styles.textSecond : undefined,
        ]}
      >
        {title ?? children}
      </ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontFamily: "Montserrat_700Bold",
  },
  textSecond: {
    color: "#4F63AC",
    fontFamily: "Montserrat_700Bold",
  },
  btn: {
    width: 300,
    height: 60,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4F63AC",
  },
  buttons: {
    margin: 20,
    gap: 20,
  },
  transparent: {
    backgroundColor: "transparent",
  },
});
