import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Checkbox } from "expo-checkbox";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Pressable, StyleSheet, TouchableOpacityProps } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import ThemedButton from "./themed-button";
import { ThemedText } from "./themed-text";
import ThemedTextInput from "./themed-text-input";
import { ThemedView } from "./themed-view";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];
export type ThemedButtonProps = TouchableOpacityProps & {
  inputs?: Array<{
    title?: string;
    type?: string;
    placeHolder?: string;
    isSecured?: boolean;
    multiline?: boolean;
    imagePath?: string;
    icon?: IoniconName;
    options?: { label: string; value: string }[];
    required?: boolean;
  }>;
  buttonTitle: string;

  onSubmit?: () => void;
};

export default function ThemedForm({
  inputs,
  buttonTitle,
  onSubmit,
  style,
  ...otherProps
}: ThemedButtonProps) {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  const [isChecked, setChecked] = useState(false);
  const [isShown, setIShown] = useState(false);
  const isCheckBox = inputs?.some((input) => input.type === "checkbox");

  const [images, setImages] = useState<string[]>([]);
  const [values, setValues] = useState<Record<string, any>>({});

  if (!fontsLoaded) {
    return null;
  }

  const onEyePress = () => {
    setIShown(!isShown);
  };

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 0.7,
    });

    if (!result.canceled) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  const handleSubmit = () => {
    const requiredInputs = inputs?.filter((i) => i.required);

    for (const input of requiredInputs ?? []) {
      if (!values[input.title!] || values[input.title!].trim() === "") {
        alert(`${input.title} is required`);
        return;
      }
    }

    onSubmit?.();
  };

  return (
    <ThemedView activeOpacity={0.7} style={[style]} {...otherProps}>
      {inputs?.map((input, index) => {
        if (input.type === "checkbox") {
          return (
            <ThemedView key={index} style={styles.checkboxContainer}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#8D9BB5" : undefined}
              />
              <ThemedText style={styles.checkboxText}>{input.title}</ThemedText>
            </ThemedView>
          );
        } else if (input.type === "photoUpload") {
          return (
            <ThemedView key={index} style={{ marginBottom: 20 }}>
              <ThemedText style={{ color: "#4F63AC", marginBottom: 10 }}>
                {input.title}
              </ThemedText>

              <ThemedView style={{ flexDirection: "row", gap: 10 }}>
                <Pressable onPress={pickImage} style={styles.uploadBox}>
                  <Ionicons name="add" size={28} color="#A0A0A0" />
                </Pressable>

                {images.map((uri, i) => (
                  <ThemedView key={i} style={styles.imageContainer}>
                    <Image
                      source={{ uri }}
                      style={styles.uploadedImage}
                      contentFit="cover"
                    />
                    <Pressable
                      style={styles.removeIcon}
                      onPress={() =>
                        setImages(images.filter((_, index) => index !== i))
                      }
                    >
                      <Ionicons name="close-circle" size={20} color="#4F63AC" />
                    </Pressable>
                  </ThemedView>
                ))}
              </ThemedView>
            </ThemedView>
          );
        } else if (input.type === "select") {
          return (
            <ThemedView style={styles.fontView} key={index}>
              <ThemedText style={{ color: "#4F63AC" }}>
                {input.title}
              </ThemedText>
              <ThemedView style={styles.inputWrapper}>
                <Dropdown
                  data={input.options ?? []}
                  onChange={(item) => {
                    setValues((prev) => ({
                      ...prev,
                      [input.title!]: item.value,
                    }));
                  }}
                  value={values[input.title!]}
                  labelField="label"
                  valueField="value"
                  placeholder={input.placeHolder}
                  style={styles.dropdown}
                />
              </ThemedView>
            </ThemedView>
          );
        } else {
          return (
            <ThemedView style={styles.fontView} key={index}>
              <ThemedText style={{ color: "#4F63AC" }}>
                {input.title}
              </ThemedText>
              <ThemedView style={styles.inputWrapper}>
                <ThemedTextInput
                  placeholder={input.placeHolder}
                  secureTextEntry={input.isSecured && !isShown}
                  autoCorrect={input.isSecured && false}
                  multiline={input.multiline}
                  style={input.multiline ? styles.textArea : undefined}
                  value={values[input.title!]}
                  onChangeText={(text) =>
                    setValues((prev) => ({
                      ...prev,
                      [input.title!]: text,
                    }))
                  }
                />

                {input.imagePath && (
                  <Pressable onPress={onEyePress} style={styles.eyeIcon}>
                    <Image
                      source={input.imagePath}
                      style={{ width: 20, height: 20 }}
                    />
                  </Pressable>
                )}
                {input.icon && (
                  <Pressable onPress={onEyePress} style={styles.eyeIcon}>
                    <Ionicons name={input.icon} size={20} color="#999" />
                  </Pressable>
                )}
              </ThemedView>
            </ThemedView>
          );
        }
      })}
      <ThemedButton
        onPress={handleSubmit}
        style={[{ width: "100%" }, !isCheckBox && { marginTop: 30 }]}
      >
        {buttonTitle}
      </ThemedButton>
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
  uploadBox: {
    width: 90,
    height: 90,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#C5C5C5",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  uploadedImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },

  imageContainer: {
    position: "relative",
  },

  removeIcon: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: "white",
    borderRadius: 10,
  },
  dropdown: {
    height: 60,
    width: "100%",
    borderWidth: 1,
    borderColor: "#8D9BB5",
    borderRadius: 14,
    fontSize: 14,
    padding: 20,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
});
