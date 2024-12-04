import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { useTheme } from "@context/ThemeContext";

const MenuItemPage = ({ route }) => {
  const { menuItem } = route.params;
  const { name, price, description, image } = menuItem;
  const { isDarkMode } = useTheme();

  return (
    <View style={isDarkMode ? darkStyles.container : styles.container}>
      {/* Image Section */}
      <Image source={{ uri: image }} style={styles.image} />

      {/* Item Details */}
      <View style={isDarkMode ? darkStyles.details : styles.details}>
        <Text style={isDarkMode ? darkStyles.name : styles.name}>{name}</Text>
        <Text style={isDarkMode ? darkStyles.price : styles.price}>
          ${price.toFixed(2)}
        </Text>
        <Text style={isDarkMode ? darkStyles.description : styles.description}>
          {description}
        </Text>
      </View>

      {/* Add to Cart Button */}
      <TouchableOpacity
        style={isDarkMode ? darkStyles.addToCartButton : styles.addToCartButton}
      >
        <Text
          style={isDarkMode ? darkStyles.addToCartText : styles.addToCartText}
        >
          Add to Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuItemPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  details: {
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: "#666",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#777",
    lineHeight: 22,
  },
  addToCartButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  addToCartText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#2C2C3A",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  details: {
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddd",
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: "#ccc",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#ccc",
    lineHeight: 22,
  },
  addToCartButton: {
    backgroundColor: "#111BFF",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  addToCartText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
