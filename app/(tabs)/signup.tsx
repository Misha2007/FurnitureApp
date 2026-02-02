import { StyleSheet } from "react-native";

import MainScrollView from "@/components/main-scroll-view";
import ThemedForm from "@/components/themed-form";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Fonts } from "@/constants/theme";
import React from "react";

export default function signup() {
  const [text, onChangeText] = React.useState("John Doe");

  return (
    <MainScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}
        >
          <ThemedText
            type="title"
            style={{
              fontFamily: Fonts.rounded,
            }}
          >
            Sign Up
          </ThemedText>
        </ThemedText>

        <ThemedForm
          inputs={[
            { title: "Name", placeHolder: "John Doe" },
            {
              title: "E-mail",
              placeHolder: "example@gmail.com",
            },
            { title: "Password", placeHolder: "**********", isSecured: true },
            { title: "I agree with Terms & Privacy", checkbox: true },
          ]}
        ></ThemedForm>

        <ThemedText>Or sign up with</ThemedText>
      </ThemedView>
    </MainScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    gap: 8,
  },
});
