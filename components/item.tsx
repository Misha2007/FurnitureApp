import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Pressable, StyleSheet, TouchableOpacityProps } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

export type Product = {
  title: string;
  price: number;
  image: string;
};

type ItemProps = TouchableOpacityProps & {
  product: Product;
};

export default function Item({
  product,
  onPress,
  style,
  ...otherProps
}: ItemProps) {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  const [isChecked, setChecked] = useState(false);
  const [isShown, setIShown] = useState(false);

  if (!fontsLoaded) return null;

  return (
    <Pressable onPress={onPress} style={[style]} {...otherProps}>
      <ThemedView activeOpacity={0.7} style={[style]} {...otherProps}>
        <ThemedView style={styles.inputWrapper}>
          <ThemedView>
            <Image source={product.image} style={styles.image} />
          </ThemedView>

          <ThemedText type="nunitoRegular">{product.title}</ThemedText>
          <ThemedText type="nunitoBold">${product.price}</ThemedText>
        </ThemedView>
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    position: "relative",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
});
