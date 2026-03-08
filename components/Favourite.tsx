import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView, ThemedViewProps } from "@/components/themed-view";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import React from "react";

type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
};

export type ThemedFavProps = ThemedViewProps & {
  type?: string;
  product: Product;
};

export default function Favourite({
  style,
  type,
  product,
  ...rest
}: ThemedFavProps) {
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
        style,
      ]}
      {...rest}
    >
      <ThemedView style={styles.favourite}>
        <Image
          source={{ uri: product.image }}
          style={{ width: 100, height: 100, borderRadius: 10 }}
        />

        <ThemedView>
          <ThemedText type="nunitoRegular">{product.title}</ThemedText>

          <ThemedText type="nunitoBold" style={{ fontSize: 16 }}>
            $ {product.price}
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {type === "fav" ? (
        <Ionicons name="close-circle-outline" size={24} color="#4F63AC" />
      ) : (
        <Feather name="trash" size={24} color="black" />
      )}
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
