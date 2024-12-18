import React, { useContext } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { useTheme } from "@context/ThemeContext";
import { LIGHTMODE_COLORS, DARKMODE_COLORS } from "src/colors/colors";
import CartContext from "@context/CartContext";

const MenuItemPage = ({ route }) => {
  const { menuItem } = route.params;
  const { name, price, description, image, _id } = menuItem;
  const { isDarkMode } = useTheme();
  const [cart, addToCart, removeFromCart] = useContext(CartContext);

  // Calculate the number of items of this kind in the cart
  const itemCount = cart.reduce(
    (count, cartItem) => (cartItem._id === _id ? count + 1 : count),
    0
  );

  return (
    <View style={isDarkMode ? darkStyles.container : styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={isDarkMode ? darkStyles.details : styles.details}>
        <Text style={isDarkMode ? darkStyles.name : styles.name}>{name}</Text>
        <Text style={isDarkMode ? darkStyles.price : styles.price}>
          ${price.toFixed(2)}
        </Text>
        <Text style={isDarkMode ? darkStyles.description : styles.description}>
          {description}
        </Text>
      </View>

      <View style={isDarkMode ? darkStyles.cartSection : styles.cartSection}>
        <TouchableOpacity
          style={
            isDarkMode ? darkStyles.addToCartButton : styles.addToCartButton
          }
          onPress={() => addToCart(menuItem)}
        >
          <Text
            style={isDarkMode ? darkStyles.addToCartText : styles.addToCartText}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>

        {itemCount > 0 && (
          <TouchableOpacity
            style={isDarkMode ? darkStyles.removeButton : styles.removeButton}
            onPress={() => removeFromCart(menuItem)}
          >
            <Text
              style={isDarkMode ? darkStyles.buttonText : styles.buttonText}
            >
              -
            </Text>
          </TouchableOpacity>
        )}

        {itemCount > 0 && (
          <View
            style={
              isDarkMode ? darkStyles.itemCountBadge : styles.itemCountBadge
            }
          >
            <Text
              style={
                isDarkMode ? darkStyles.itemCountText : styles.itemCountText
              }
            >
              {itemCount}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default MenuItemPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: LIGHTMODE_COLORS.background,
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
    color: LIGHTMODE_COLORS.textPrimary,
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: LIGHTMODE_COLORS.textSecondary,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: LIGHTMODE_COLORS.textSecondary,
    lineHeight: 22,
  },
  cartSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addToCartButton: {
    backgroundColor: LIGHTMODE_COLORS.accent,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
  },
  addToCartText: {
    color: LIGHTMODE_COLORS.buttonText,
    fontSize: 18,
    fontWeight: "bold",
  },
  removeButton: {
    backgroundColor: LIGHTMODE_COLORS.accent,
    borderRadius: 12,
    height: 24,
    width: 24,
    alignItems: "center",
    marginLeft: 10,
  },
  buttonText: {
    color: LIGHTMODE_COLORS.buttonText,
    fontSize: 18,
    fontWeight: "bold",
  },
  itemCountBadge: {
    backgroundColor: LIGHTMODE_COLORS.accent,
    borderRadius: 12,
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  itemCountText: {
    color: LIGHTMODE_COLORS.buttonText,
    fontSize: 16,
    fontWeight: "bold",
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: DARKMODE_COLORS.background,
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
    color: DARKMODE_COLORS.textPrimary,
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: DARKMODE_COLORS.textSecondary,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: DARKMODE_COLORS.textSecondary,
    lineHeight: 22,
  },
  cartSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addToCartButton: {
    backgroundColor: DARKMODE_COLORS.accent,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
  },
  addToCartText: {
    color: DARKMODE_COLORS.buttonText,
    fontSize: 18,
    fontWeight: "bold",
  },
  removeButton: {
    backgroundColor: DARKMODE_COLORS.accent,
    borderRadius: 12,
    alignItems: "center",
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  buttonText: {
    color: DARKMODE_COLORS.buttonText,
    fontSize: 18,
    fontWeight: "bold",
  },
  itemCountBadge: {
    backgroundColor: DARKMODE_COLORS.accent,
    borderRadius: 12,
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  itemCountText: {
    color: DARKMODE_COLORS.buttonText,
    fontSize: 16,
    fontWeight: "bold",
  },
});
