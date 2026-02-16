import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import React from "react";

export default function Favourite() {
  return (
    <ThemedView
      style={[
        styles.favourite,
        {
          borderBottomColor: "#F0F0F0",
          borderBottomWidth: 1,
          paddingBottom: 20,
          paddingTop: 20,
        },
      ]}
    >
      <ThemedView style={styles.favourite}>
        <Image
          source={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Bethany_%285%29.JPG/1280px-Bethany_%285%29.JPG"
          }
          style={{ width: 100, height: 100, borderRadius: 10 }}
        />
        <ThemedView>
          <ThemedText type="nunitoRegular">New</ThemedText>
          <ThemedText type="nunitoBold" style={{ fontSize: 16 }}>
            $ 12.00
          </ThemedText>
        </ThemedView>
      </ThemedView>

      <Ionicons name="close-circle-outline" size={24} color="#4F63AC" />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  favourite: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    gap: 25,
  },
});
