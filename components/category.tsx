import { Image } from "expo-image";
import React from "react";
import { StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView, ThemedViewProps } from "./themed-view";

export type ThemedCategoryProps = ThemedViewProps & {
  isSelected?: boolean;
};

export default function Category({
  style,
  isSelected,
  ...otherProps
}: ThemedCategoryProps) {
  return (
    <ThemedView style={[style]} {...otherProps}>
      <ThemedView style={styles.inputWrapper}>
        <ThemedView>
          <Image
            source={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Bethany_%285%29.JPG/1280px-Bethany_%285%29.JPG"
            }
            style={styles.image}
          />
        </ThemedView>

        <ThemedText
          type="nunitoRegular"
          style={[
            { textAlign: "center", color: " #999999" },
            isSelected && { color: "#4F63AC" },
          ]}
        >
          Popular
        </ThemedText>
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
    alignItems: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: 12,
    padding: 20,
    paddingRight: 0,
  },
  image: {
    width: 44,
    height: 44,
    borderRadius: 10,
  },
});
