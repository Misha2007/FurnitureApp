import { StyleSheet } from "react-native";

import Favourite from "@/components/Favourite";
import MainScrollView from "@/components/main-scroll-view";
import { ThemedView } from "@/components/themed-view";
import React from "react";

export default function favourites() {
  return (
    <MainScrollView>
      <ThemedView style={styles.main}>
        <Favourite />
        <Favourite />
      </ThemedView>
    </MainScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  favourite: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    gap: 25,
  },
});
