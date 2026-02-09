import { StyleSheet } from "react-native";

import MainScrollView from "@/components/main-scroll-view";
import ThemedForm from "@/components/themed-form";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";

export default function signup() {
  const [text, onChangeText] = React.useState("John Doe");

  return (
    <MainScrollView>
      <ThemedView style={styles.titleContainer}>
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
          buttonTitle="Sign Up"
          onSubmit={() => {
            router.push("/home");
          }}
        ></ThemedForm>
        <ThemedView style={styles.googleContainer}>
          <ThemedView style={styles.lines}>
            <ThemedView style={styles.line} />
            <ThemedText style={styles.textLined} type="defaultSemiBold">
              Or sign up with
            </ThemedText>
            <ThemedView style={styles.line} />
          </ThemedView>
          <ThemedView style={styles.google}>
            <Image
              style={styles.googleImage}
              source={require("@images/Vector.png")}
            />
          </ThemedView>
        </ThemedView>
        <ThemedText style={{ color: "#4F63AC", textAlign: "center" }}>
          Already have an account?{" "}
          <ThemedText type="defaultSemiBold" style={{ color: "#4F63AC" }}>
            Sign In{" "}
          </ThemedText>
        </ThemedText>
      </ThemedView>
    </MainScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    gap: 8,
  },
  google: {
    backgroundColor: "#3F4A59",
    borderRadius: 14,
    width: "50%",
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  googleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 30,
    gap: 15,
  },
  googleImage: {
    width: 30,
    height: 30,
  },
  lines: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#DADADA",
  },
  textLined: {
    marginHorizontal: 8,
    textAlign: "center",
    color: "#4F63AC",
  },
});
