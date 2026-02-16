import { Pressable, StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView, ThemedViewProps } from "@/components/themed-view";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Href, useRouter } from "expo-router";
import React from "react";

export type linkBlockProps = ThemedViewProps & {
  label: string;
  description: string;
  isChevron?: boolean;
  redirect?: Href;
  reverse?: boolean;
};

export default function LinkBlock({
  label,
  description,
  isChevron = false,
  redirect,
  reverse = false,
  style,
  ...otherProps
}: linkBlockProps) {
  const router = useRouter();

  return (
    <Pressable
      style={styles.category}
      onPress={() => router.push(redirect ?? "/")}
    >
      <ThemedView>
        {reverse ? (
          <>
            <ThemedText
              type="nunitoRegular"
              style={{ color: "#808080", fontSize: 12 }}
            >
              {description}
            </ThemedText>

            <ThemedText
              type="nunitoBold"
              style={{ fontSize: 18, color: "#4F63AC" }}
            >
              {label}
            </ThemedText>
          </>
        ) : (
          <>
            <ThemedText
              type="nunitoBold"
              style={{ fontSize: 18, color: "#4F63AC" }}
            >
              {label}
            </ThemedText>

            <ThemedText
              type="nunitoRegular"
              style={{ color: "#808080", fontSize: 12 }}
            >
              {description}
            </ThemedText>
          </>
        )}
      </ThemedView>

      {isChevron && (
        <Ionicons name="chevron-forward-outline" size={24} color="#4F63AC" />
      )}
    </Pressable>
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
