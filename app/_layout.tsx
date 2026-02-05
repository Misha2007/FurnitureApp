import { router, Stack } from "expo-router";

import "react-native-reanimated";

import { ThemedText } from "@/components/themed-text";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Image } from "expo-image";
import { Pressable } from "react-native";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Stack
        screenOptions={{
          headerLeft: () => (
            <Pressable
              style={{ padding: 20 }}
              onPress={() => {
                router.back();
              }}
            >
              <Image
                source={require("@images/iconBack.png")}
                style={{ width: 20, height: 20 }}
              />
            </Pressable>
          ),

          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTitleStyle: {
            fontSize: 24,
          },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="(tabs)/signup"
          options={{
            headerShown: true,
            title: "Sign up",
            headerTintColor: "#4F63AC",
            headerTitle: () => (
              <ThemedText type="header" style={{ lineHeight: 100 }}>
                Sign Up
              </ThemedText>
            ),
          }}
        />
        <Stack.Screen
          name="(tabs)/signin"
          options={{
            headerShown: true,
            title: "Sign in",
            headerTintColor: "#4F63AC",
            headerTitle: () => (
              <ThemedText type="header" style={{ lineHeight: 100 }}>
                Sign in
              </ThemedText>
            ),
          }}
        />
      </Stack>
    </>
  );
}
