import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { Image } from "expo-image";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacityProps } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

export type ThemedButtonProps = TouchableOpacityProps & {
  onSubmit?: () => void;
};

export default function Item({ style, ...otherProps }: ThemedButtonProps) {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  const [isChecked, setChecked] = useState(false);
  const [isShown, setIShown] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  const onEyePress = () => {
    setIShown(!isShown);
  };
  return (
    <ThemedView activeOpacity={0.7} style={[style]} {...otherProps}>
      <ThemedView style={styles.inputWrapper}>
        <ThemedView>
          <Image
            source={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Bethany_%285%29.JPG/1280px-Bethany_%285%29.JPG"
            }
            style={styles.image}
          />
        </ThemedView>

        <ThemedText type="nunitoRegular">New</ThemedText>
        <ThemedText type="nunitoBold">$ 12.00</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontFamily: "Montserrat_700Bold",
  },
  fontView: {
    marginBottom: 20,
    gap: 10,
    display: "flex",
    justifyContent: "center",
  },
  checkbox: {
    borderColor: "#8D9BB5",
    margin: 20,
    marginLeft: 0,
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  checkboxText: {
    color: "#4F63AC",
  },
  inputWrapper: {
    position: "relative",
    justifyContent: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: 12,
    padding: 20,
    paddingRight: 0,
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
});
