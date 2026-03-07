import ThemedForm from "@/components/themed-form";
import { StyleSheet } from "react-native";

import MainScrollView from "@/components/main-scroll-view";
import { ThemedView } from "@/components/themed-view";

export default function newListing() {
  return (
    <MainScrollView>
      <ThemedView style={styles.main}>
        <ThemedForm
          inputs={[
            {
              title: "Upload photos",
              type: "photoUpload",
            },
            {
              title: "Title",
              placeHolder: "Listing Title",
            },
            {
              title: "Category",
              type: "select",
              placeHolder: "Select the category",
              icon: "chevron-down-outline",
              options: [
                { label: "Electronics", value: "electronics" },
                { label: "Furniture", value: "furniture" },
                { label: "Clothing", value: "clothing" },
                { label: "Vehicles", value: "vehicles" },
              ],
            },
            {
              title: "Price",
              placeHolder: "Enter price in USD",
            },
            {
              title: "Description",
              placeHolder: "Tell us more...",
              multiline: true,
            },
          ]}
          buttonTitle="Submit"
          style={{ marginBottom: 100 }}
        ></ThemedForm>
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
