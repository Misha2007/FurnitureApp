import type { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import Animated, { useAnimatedRef } from "react-native-reanimated";

import { ThemedView } from "@/components/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";

type Props = PropsWithChildren<{}>;

export default function MainScrollView({ children }: Props) {
  const backgroundColor = useThemeColor({}, "background");
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  return (
    <Animated.ScrollView
      ref={scrollRef}
      style={{ backgroundColor }}
      contentContainerStyle={styles.container}
      scrollEventThrottle={16}
    >
      <ThemedView style={[styles.main]}>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </ThemedView>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
  main: {
    marginTop: 150,
    padding: 20,
    gap: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
