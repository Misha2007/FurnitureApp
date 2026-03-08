import { router, Stack } from "expo-router";

import "react-native-reanimated";

import { ThemedText } from "@/components/themed-text";
import { useColorScheme } from "@/hooks/use-color-scheme";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Image } from "expo-image";
import { Pressable } from "react-native";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
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
        name="(auth)/signup"
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
        name="(auth)/signin"
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
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen
        name="product/[id]"
        options={{
          headerShown: true,
          headerTitle: "",
          headerTransparent: true,
          headerLeft: () => (
            <Pressable
              style={{
                padding: 20,
                marginLeft: 10,
                borderRadius: 6,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 40,
              }}
              onPress={() => router.back()}
            >
              <FontAwesome6 name="chevron-left" size={15} color={"#4F63AC"} />
            </Pressable>
          ),
          headerStyle: { backgroundColor: "transparent" },

          headerRight: () => null,
        }}
      />
      <Stack.Screen
        name="new-listing"
        options={{
          headerShown: true,
          headerTintColor: "#4F63AC",
          headerTitleAlign: "center",
          headerTitle: () => (
            <ThemedText type="montserratBold" style={{ lineHeight: 100 }}>
              Create a new listing
            </ThemedText>
          ),
          headerLeft: () => (
            <Pressable
              style={{ padding: 20 }}
              onPress={() => {
                router.back();
              }}
            >
              <FontAwesome6 name="chevron-left" size={20} color="#4F63AC" />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}
