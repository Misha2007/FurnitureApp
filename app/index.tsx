import { Image } from "expo-image";
import { StyleSheet, TouchableOpacity } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#fff", dark: "#fff" }}
      headerImage={
        <Image
          source={require("@/assets/images/splashImage.jpg")}
          style={styles.splashImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedView style={styles.splashMain}>
          <ThemedText type="title">You'll Find </ThemedText>
          <ThemedText
            type="title"
            style={{
              color: "#FCA34D",
              textDecorationLine: "underline",
            }}
          >
            All you need
          </ThemedText>
          <ThemedText type="title">Here!</ThemedText>
        </ThemedView>

        <ThemedView style={styles.buttons}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.btn, styles.loginBtn]}
          >
            <ThemedText
              style={{
                color: "#fff",
                fontFamily: "Montserrat_700Bold",
              }}
            >
              Sign Up
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
            <ThemedText
              style={{ color: "#4F63AC", fontFamily: "Montserrat_700Bold" }}
            >
              Sign In
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  splashMain: {
    alignItems: "center",
    gap: 8,
  },
  titleContainer: {
    padding: 20,
    gap: 20,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  splashImage: {
    height: 200,
    width: 350,
  },
  btn: {
    width: 300,
    height: 60,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    backgroundColor: "#4F63AC",
  },
  buttons: {
    margin: 20,
    gap: 20,
  },
});
