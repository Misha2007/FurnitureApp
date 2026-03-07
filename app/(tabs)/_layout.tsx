import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigationState } from "@react-navigation/native";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const state = useNavigationState((state) => state);
  const tabsRoute = state.routes.find((r) => r.name === "(tabs)");

  const tabsState = tabsRoute?.state as
    | {
        index: number;
        routes: { name: string }[];
      }
    | undefined;

  const activeTabName =
    tabsState?.routes && tabsState.index != null
      ? tabsState.routes[tabsState.index].name
      : undefined;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarLabel: "",
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
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={activeTabName === "home" ? "home" : "home-outline"}
              size={24}
              color={
                activeTabName === "home" ? "#4F63AC" : "rgba(153, 153, 153, 1)"
              }
            />
          ),
          headerShown: true,
          title: "Sign in",
          headerTintColor: "#4F63AC",
          headerTitle: () => (
            <ThemedText
              type="montserratBold"
              style={{
                lineHeight: 20,
              }}
            >
              Find All You Need
            </ThemedText>
          ),
          headerLeft: () => (
            <Pressable
              style={{ padding: 20 }}
              onPress={() => {
                router.back();
              }}
            >
              <FontAwesome6 name="magnifying-glass" size={20} color="#4F63AC" />
            </Pressable>
          ),
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={
                activeTabName === "favourites" ? "bookmark" : "bookmark-outline"
              }
              size={24}
              color={
                activeTabName === "favourites"
                  ? "#4F63AC"
                  : "rgba(153, 153, 153, 1)"
              }
            />
          ),
          headerShown: true,
          title: "Sign in",
          headerTintColor: "#4F63AC",
          headerTitle: () => (
            <ThemedText type="montserratBold" style={{ lineHeight: 20 }}>
              Favourites
            </ThemedText>
          ),
          headerLeft: () => null,
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={activeTabName === "profile" ? "person" : "person-outline"}
              size={24}
              color={
                activeTabName === "profile"
                  ? "#4F63AC"
                  : "rgba(153, 153, 153, 1)"
              }
            />
          ),
          headerShown: true,
          title: "Sign in",
          headerTintColor: "#4F63AC",
          headerTitle: () => (
            <ThemedText type="montserratBold" style={{ lineHeight: 20 }}>
              Profile
            </ThemedText>
          ),
          headerRight: () => (
            <Pressable
              style={{ padding: 20 }}
              onPress={() => {
                router.back();
              }}
            >
              <Ionicons name="exit-outline" size={20} color="#4F63AC" />
            </Pressable>
          ),
          headerLeft: () => null,
          headerTitleAlign: "center",
        }}
      />
    </Tabs>
  );
}
