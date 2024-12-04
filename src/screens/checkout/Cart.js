import { StyleSheet, Text, View } from "react-native";
import React from "react";
import restaurants from "../../../data/RestaurantsData";
import CartItem from "../../components/Cart/CartItem";

import { useTheme } from "../../context/ThemeContext";

const Cart = () => {
  const restaurant = restaurants[0];
  const { menuItems } = restaurant;

  const { isDarkMode } = useTheme();

  return (
    <View style={isDarkMode ? darkStyles.body : styles.body}>
      <Text style={isDarkMode ? darkStyles.title : styles.title}>Cart</Text>
      {menuItems.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          description={item.description}
          // TODO: replace with actual count
          count={item.id}
        />
      ))}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
    alignSelf: "center",
  },
});

const darkStyles = StyleSheet.create({
  body: {
    flex: 1,
    width: "100%",
    backgroundColor: "#2C2C3A",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
    alignSelf: "center",
    color: "#fff",
  },
});
