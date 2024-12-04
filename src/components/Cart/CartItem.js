import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";

import { useTheme } from "../../context/ThemeContext";

const CartItem = ({ name, price, image, description, count = 1 }) => {
  const { isDarkMode } = useTheme();
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
});
