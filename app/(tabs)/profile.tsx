import { StyleSheet } from "react-native";

import LinkBlock from "@/components/link-block";
import MainScrollView from "@/components/main-scroll-view";
import ThemedButton from "@/components/themed-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import React from "react";

export default function profile() {
  return (
    <MainScrollView contentContainerStyle={{ flex: 1 }}>
      <ThemedView style={styles.main}>
        <ThemedView style={styles.main}>
          <ThemedText type="nunitoBold" style={{ fontSize: 20 }}>
            Elina Hovakimyan
          </ThemedText>
          <ThemedText type="nunitoRegular" style={{ color: "#808080" }}>
            hello@gmail.com
          </ThemedText>
          <LinkBlock
            label="My Listings"
            description="Already have 10 listing"
            isChevron={true}
          />
          <LinkBlock
            label="Settings"
            description="Account, FAQ, Contact"
            isChevron={true}
            redirect={"/settings"}
          />
        </ThemedView>
        <ThemedButton
          style={{ marginBottom: 20, marginLeft: "auto", marginRight: "auto" }}
        >
          Add a new listing
        </ThemedButton>
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
    marginTop: 20,
    marginBottom: 20,
    shadowColor: "#8A959E33",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 40,
    elevation: 40,
    padding: 10,
  },
});
