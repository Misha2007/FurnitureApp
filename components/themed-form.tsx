import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { Checkbox } from "expo-checkbox";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Pressable, StyleSheet, TouchableOpacityProps } from "react-native";
import ThemedButton from "./themed-button";
import { ThemedText } from "./themed-text";
import ThemedTextInput from "./themed-text-input";
import { ThemedView } from "./themed-view";

export type ThemedButtonProps = TouchableOpacityProps & {
  inputs?: Array<{
    title?: string;
    placeHolder?: string;
    isSecured?: boolean;
    checkbox?: boolean;
  }>;
  buttonTitle: string;

  onSubmit?: () => void;
};

export default function ThemedForm({
  inputs,
  buttonTitle,
  style,
  ...otherProps
}: ThemedButtonProps) {
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
      {inputs?.map((input, index) =>
        input.checkbox ? (
          <ThemedView key={index} style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#8D9BB5" : undefined}
            />
            <ThemedText style={styles.checkboxText}>{input.title}</ThemedText>
          </ThemedView>
        ) : (
          <ThemedView style={styles.fontView} key={index}>
            <ThemedText style={{ color: "#4F63AC" }}>{input.title}</ThemedText>
            <ThemedView style={styles.inputWrapper}>
              <ThemedTextInput
                placeholder={input.placeHolder}
                secureTextEntry={input.isSecured && !isShown}
                autoCorrect={input.isSecured && false}
              />

              {input.isSecured && (
                <Pressable onPress={onEyePress} style={styles.eyeIcon}>
                  <Image
                    source={require("@images/eye.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </Pressable>
              )}
            </ThemedView>
          </ThemedView>
        ),
      )}
      <ThemedButton>{buttonTitle}</ThemedButton>
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
});
