import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";

import { useTheme } from "@context/ThemeContext";
import { LIGHTMODE_COLORS, DARKMODE_COLORS } from "src/colors/colors";
import CartContext from "@context/CartContext";

const CartItem = ({ name, price, image, description, count = 1, item }) => {
  const { isDarkMode } = useTheme();
  const [cart, addToCart, removeFromCart] = useContext(CartContext);

  return (
    <View style={isDarkMode ? darkStyles.card : styles.card}>
      {/* Image */}
      <Image
        source={{ uri: image }}
        style={isDarkMode ? darkStyles.image : styles.image}
      />

      {/* Content */}
      <View style={isDarkMode ? darkStyles.content : styles.content}>
        <Text style={isDarkMode ? darkStyles.name : styles.name}>{name}</Text>
        <Text style={isDarkMode ? darkStyles.description : styles.description}>
          {description}
        </Text>

        {/* Footer */}
        <View style={isDarkMode ? darkStyles.footer : styles.footer}>
          <Text style={isDarkMode ? darkStyles.price : styles.price}>
            {count} x {price} KWD = {(count * price).toFixed(3)} KWD
          </Text>
          <TouchableOpacity
            style={isDarkMode ? darkStyles.removeButton : styles.removeButton}
            onPress={() => removeFromCart(item)}
          >
            <Text
              style={isDarkMode ? darkStyles.buttonText : styles.buttonText}
            >
              -
            </Text>
          </TouchableOpacity>
        </View>
        {/* <Button title="ADD TO CART" /> */}
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    margin: 10,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 20,
    margin: 10,
    alignSelf: "center",
  },
  content: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginVertical: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
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
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

const darkStyles = StyleSheet.create({
  card: {
    backgroundColor: "transparent",
    borderRadius: 10,
    // elevation: 3,
    margin: 10,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 20,
    margin: 10,
    alignSelf: "center",
  },
  content: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#eee",
  },
  description: {
    fontSize: 14,
    color: "#ddd",
    // marginVertical: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ddd",
  },
  removeButton: {
    backgroundColor: DARKMODE_COLORS.accent,
    borderRadius: 12,
    // paddingVertical: 12,
    // paddingHorizontal: 16,
    alignItems: "center",
    width: 24,
    height: 24,
    // marginTop: 10,
    marginLeft: 10,
  },
  buttonText: {
    color: DARKMODE_COLORS.buttonText,
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
