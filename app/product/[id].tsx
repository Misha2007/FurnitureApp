import { StyleSheet, TouchableOpacity } from "react-native";

import ThemedButton from "@/components/themed-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React from "react";

export const products = [
  {
    id: "1",
    title: "Minimal Wooden Stand",
    price: 12.0,
    description:
      "Minimal Stand is made of natural wood. Simple and elegant design, perfect for your home or office. Available in three colors.",
    image:
      "https://images.squarespace-cdn.com/content/v1/67aa40fec34c4c2ce301880b/1739211026153-LLQR58NR62PQZYLPH4WU/plant_stand_8_empty_HWW_compressed.jpg",
  },
  {
    id: "2",
    title: "Modern Lamp",
    price: 35.0,
    description:
      "A modern lamp with adjustable brightness and a minimalist design. Ideal for desks and bedside tables.",
    image: "https://m.media-amazon.com/images/I/61B4tfCyffL._AC_SX679_.jpg",
  },
  {
    id: "3",
    title: "Comfortable Chair",
    price: 120.0,
    description:
      "Ergonomic and stylish chair with soft cushioning. Perfect for long hours of work or study.",
    image: "https://m.media-amazon.com/images/I/61DRhYv8yoL._AC_SX679_.jpg",
  },
  {
    id: "4",
    title: "Glass Coffee Table",
    price: 80.0,
    description:
      "Sleek glass coffee table with metal legs. Adds a modern touch to your living room.",
    image:
      "https://m.media-amazon.com/images/I/81-a1cUJElL._AC_SY300_SX300_QL70_FMwebp_.jpg",
  },
  {
    id: "5",
    title: "Decorative Vase",
    price: 25.0,
    description:
      "Elegant ceramic vase for flowers or as a decorative piece. Handcrafted and unique.",
    image: "https://m.media-amazon.com/images/I/71022DxZwjL._AC_SX679_.jpg",
  },
];

export default function product() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <ThemedView style={styles.main}>
        <ThemedText>Product not found</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.main}>
      <Image source={product.image} style={styles.image} />

      <ThemedView style={styles.textCont}>
        <ThemedView>
          <ThemedText type="nunitoRegular" style={{ fontSize: 24 }}>
            {product.title}
          </ThemedText>
          <ThemedText type="nunitoBold" style={{ fontSize: 30 }}>
            ${product.price}
          </ThemedText>
          <ThemedText type="nunitoBold">{product.description}</ThemedText>
        </ThemedView>
        <ThemedView style={styles.actionRow}>
          <TouchableOpacity>
            <Ionicons
              name="bookmark"
              size={24}
              color="#4F63AC"
              style={styles.bookmarkIcon}
            />
          </TouchableOpacity>
          <ThemedButton style={styles.contactButton}>
            Contact Seller
          </ThemedButton>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  textCont: {
    width: "100%",
    padding: 40,
    paddingBottom: 80,
    gap: 50,
  },
  actionRow: {
    flexDirection: "row",
    height: 60,
    gap: 10,
  },
  bookmarkIcon: {
    backgroundColor: "rgba(240, 240, 240, 1)",
    borderRadius: 8,
    padding: 20,
    flex: 1,
  },
  contactButton: {
    flex: 1,
  },
});
