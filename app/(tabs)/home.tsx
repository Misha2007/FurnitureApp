import { ScrollView, StyleSheet } from "react-native";

import Category from "@/components/category";
import Item from "@/components/item";
import MainScrollView from "@/components/main-scroll-view";
import { ThemedView } from "@/components/themed-view";
import { router } from "expo-router";
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
          {products.map((product) => (
            <Item
              key={product.id}
              product={product}
              onPress={() => router.push(`/product/${product.id}`)}
            />
          ))}
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
