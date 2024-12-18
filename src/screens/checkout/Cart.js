import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import CartItem from "../../components/Cart/CartItem";
import { useTheme } from "../../context/ThemeContext";
import { LIGHTMODE_COLORS, DARKMODE_COLORS } from "src/colors/colors";
import CartContext from "@context/CartContext";

const Cart = () => {
  const [cart] = useContext(CartContext);
  const { isDarkMode } = useTheme();

  // Count the occurrences of each item in the cart
  const cartItemCounts = cart.reduce((acc, item) => {
    if (!acc[item._id]) {
      acc[item._id] = { ...item, count: 0 };
    }
    acc[item._id].count += 1;
    return acc;
  }, {});

  // Convert cart item counts back to an array
  const cartItems = Object.values(cartItemCounts);

  return (
    <View style={isDarkMode ? darkStyles.body : styles.body}>
      {/* <Text style={isDarkMode ? darkStyles.title : styles.title}>Cart</Text> */}
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CartItem
            key={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
            description={item.description}
            count={item.count}
            item={item}
          />
        ))
      ) : (
        <Text
          style={isDarkMode ? darkStyles.emptyMessage : styles.emptyMessage}
        >
          Your cart is empty.
        </Text>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: "100%",
    backgroundColor: LIGHTMODE_COLORS.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
    alignSelf: "center",
    color: LIGHTMODE_COLORS.textPrimary,
  },
  emptyMessage: {
    fontSize: 18,
    fontWeight: "normal",
    marginTop: 20,
    alignSelf: "center",
    color: LIGHTMODE_COLORS.textSecondary,
  },
});

const darkStyles = StyleSheet.create({
  body: {
    flex: 1,
    width: "100%",
    backgroundColor: DARKMODE_COLORS.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
    alignSelf: "center",
    color: DARKMODE_COLORS.textPrimary,
  },
  emptyMessage: {
    fontSize: 18,
    fontWeight: "normal",
    marginTop: 20,
    alignSelf: "center",
    color: DARKMODE_COLORS.textSecondary,
  },
});
