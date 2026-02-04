import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import ThemedButton from "@/components/themed-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  const router = useRouter();

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
          <ThemedButton onPress={() => router.navigate("/signup")}>
            Sign Up
          </ThemedButton>
          <ThemedButton
            type="transparent"
            onPress={() => router.navigate("/signin")}
          >
            Sign In
          </ThemedButton>
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
  buttons: {
    margin: 20,
    gap: 20,
  },
});
