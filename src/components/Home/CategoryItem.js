import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@context/ThemeContext";
import { LIGHTMODE_COLORS } from "src/colors/colors";
import { CATEGORY_IMAGE_URLS } from "src/replacements/replacementCategoryImages";

const CategoryItem = ({
  id,
  categoryName,
  categoryImage,
  onPress,
  isSelected,
}) => {
  const { isDarkMode } = useTheme();

  // Use the constant URL if it exists, otherwise fallback to the passed-in categoryImage prop
  const imageSource = CATEGORY_IMAGE_URLS[categoryName]
    ? CATEGORY_IMAGE_URLS[categoryName]
    : categoryImage;

  return (
    <TouchableOpacity
      style={[styles.item, isSelected && styles.selectedItem]}
      onPress={onPress}
    >
      <Image source={{ uri: imageSource }} style={styles.image} />
      <Text
        style={
          isDarkMode
            ? {
                color: "white",
                marginTop: 5,
                fontSize: 12,
                fontWeight: "bold",
                textAlign: "center",
              }
            : styles.categoryText
        }
      >
        {categoryName}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "transparent",
    width: 70,
  },
  selectedItem: {
    borderWidth: 2,
    borderColor: LIGHTMODE_COLORS.accent,
  },
  image: {
    height: 40,
    width: 60,
    resizeMode: "stretch",
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "bold",
    color: "#555555",
    textAlign: "center",
  },
});
