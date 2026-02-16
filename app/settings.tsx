import { StyleSheet } from "react-native";

import LinkBlock from "@/components/link-block";
import MainScrollView from "@/components/main-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

export default function settings() {
  return (
    <MainScrollView>
      <ThemedView style={styles.main}>
        <ThemedView style={styles.main}>
          <ThemedView style={styles.category}>
            <ThemedText
              type="nunitoBold"
              style={{ fontSize: 20, color: "#909191" }}
            >
              Personal Information
            </ThemedText>
            <Ionicons name="create-outline" size={24} color="#4F63AC" />
          </ThemedView>

          <LinkBlock
            label="Elina Hovakimyan"
            description="Name"
            isChevron={false}
            reverse={true}
          />
          <LinkBlock
            label="bruno203@gmail.com"
            description="Email"
            isChevron={false}
            reverse={true}
          />
        </ThemedView>
        <ThemedView style={styles.main}>
          <ThemedText
            type="nunitoBold"
            style={{ fontSize: 20, color: "#909191" }}
          >
            Help Center
          </ThemedText>

          <LinkBlock
            label="Elina Hovakimyan"
            description="Name"
            isChevron={false}
            reverse={true}
          />
          <LinkBlock
            label="bruno203@gmail.com"
            description="Email"
            isChevron={false}
            reverse={true}
          />
        </ThemedView>
      </ThemedView>
    </MainScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignContent: "space-between",
  },
  category: {
    height: 80,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
