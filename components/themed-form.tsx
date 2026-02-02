import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { Checkbox } from "expo-checkbox";
import { Image } from "expo-image";
import { useState } from "react";
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

  onSubmit?: () => void;
};

export default function ThemedForm({
  inputs,
  style,
  ...otherProps
}: ThemedButtonProps) {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  const [isChecked, setChecked] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  const onEyePress = () => {
    setChecked(!isChecked);
  };
  return (
    <ThemedView activeOpacity={0.7} style={[style]} {...otherProps}>
      {inputs?.map((input, index) => (
        <>
          {input.checkbox ? (
            <ThemedView style={styles.checkboxContainer}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#8D9BB5" : undefined}
              />
              <ThemedText>{input.title}</ThemedText>
            </ThemedView>
          ) : (
            <ThemedView style={styles.fontView} key={index}>
              <ThemedText>{input.title}</ThemedText>
              <ThemedTextInput
                placeholder={input.placeHolder}
                secureTextEntry={input.isSecured}
                autoCorrect={input.isSecured && false}
              >
                <Pressable style={{ width: 100, height: 200 }}>
                  <Image
                    source={require("../../FurnitureApp/assets/images/eye.png")}
                  ></Image>
                </Pressable>
              </ThemedTextInput>
            </ThemedView>
          )}
        </>
      ))}
      <ThemedButton>Sign Up</ThemedButton>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontFamily: "Montserrat_700Bold",
  },
  fontView: {
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
});
