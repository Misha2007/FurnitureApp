import { ScrollView, StyleSheet } from "react-native";

import Category from "@/components/category";
import Item from "@/components/item";
import MainScrollView from "@/components/main-scroll-view";
import { ThemedView } from "@/components/themed-view";
import React from "react";

export default function home() {
  return (
    <MainScrollView>
      <ThemedView style={styles.main}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[styles.items, styles.categories]}
        >
          <Category isSelected={true} />
          <Category />
          <Category />
          <Category />
          <Category />
        </ScrollView>
        <ThemedView style={styles.items}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </ThemedView>
      </ThemedView>
    </MainScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    flex: 1,
  },
  items: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 25,
    flexWrap: "wrap",
  },
  categories: {
    marginBottom: 20,
    flexWrap: "nowrap",
  },
});
