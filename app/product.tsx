import { ScrollView, StyleSheet } from "react-native";

import Category from "@/components/category";
import ThemedButton from "@/components/themed-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Image } from "expo-image";
import React from "react";

export default function product() {
  return (
    <ThemedView style={styles.main}>
      <Image
        source={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Bethany_%285%29.JPG/1280px-Bethany_%285%29.JPG"
        }
        style={styles.image}
      />

      <ThemedText type="nunitoRegular">New</ThemedText>
      <ThemedText type="nunitoBold">$ 12.00</ThemedText>
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
      <ThemedButton>Contact Seller</ThemedButton>
    </ThemedView>
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
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
