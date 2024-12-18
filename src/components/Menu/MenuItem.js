import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@context/ThemeContext";
import ROUTE from "@routes/index";
import { LIGHTMODE_COLORS, DARKMODE_COLORS } from "src/colors/colors";
import CartContext from "@context/CartContext";

const MenuItem = ({ name, price, image, description, item }) => {
  const { isDarkMode } = useTheme();
  const navigation = useNavigation();
  const [cart, addToCart, removeFromCart] = useContext(CartContext);

  // Calculate the number of items of this kind in the cart
  const itemCount = cart.reduce(
    (count, cartItem) => (cartItem._id === item._id ? count + 1 : count),
    0
  );

  const handleViewItem = () => {
    navigation.navigate(ROUTE.HOMEPAGES.RESTAURANTMENUITEM, {
      menuItem: {
        name,
        price,
        image,
        description,
        _id: item._id,
      },
    });
  };

  return (
    <TouchableOpacity
      style={isDarkMode ? darkStyles.card : styles.card}
      onPress={handleViewItem}
    >
      <Image
        source={{ uri: image }}
        style={isDarkMode ? darkStyles.image : styles.image}
      />
      <View style={isDarkMode ? darkStyles.content : styles.content}>
        <Text style={isDarkMode ? darkStyles.name : styles.name}>{name}</Text>
        <Text style={isDarkMode ? darkStyles.description : styles.description}>
          {description}
        </Text>
        <View style={isDarkMode ? darkStyles.footer : styles.footer}>
          <Text style={isDarkMode ? darkStyles.price : styles.price}>
            ${price}
          </Text>
        </View>

        <View style={isDarkMode ? darkStyles.cartSection : styles.cartSection}>
          <TouchableOpacity
            style={isDarkMode ? darkStyles.button : styles.button}
            onPress={() => addToCart(item)}
          >
            <Text
              style={isDarkMode ? darkStyles.buttonText : styles.buttonText}
            >
              ADD TO CART
            </Text>
          </TouchableOpacity>

          {itemCount > 0 && (
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
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: LIGHTMODE_COLORS.cardBackground,
    borderRadius: 10,
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
    color: LIGHTMODE_COLORS.textPrimary,
  },
  description: {
    fontSize: 14,
    color: LIGHTMODE_COLORS.textSecondary,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: LIGHTMODE_COLORS.textPrimary,
  },
  button: {
    backgroundColor: LIGHTMODE_COLORS.accent,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    width: "70%",
    // marginTop: 10,
  },
  removeButton: {
    backgroundColor: LIGHTMODE_COLORS.accent,
    borderRadius: 12,
    height: 24,
    width: 24,
    alignItems: "center",
    // marginTop: 10,
  },
  buttonText: {
    color: LIGHTMODE_COLORS.buttonText,
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  cartSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  itemCountBadge: {
    backgroundColor: LIGHTMODE_COLORS.accent,
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  itemCountText: {
    color: LIGHTMODE_COLORS.buttonText,
    fontSize: 14,
    fontWeight: "bold",
  },
});

const darkStyles = StyleSheet.create({
  card: {
    backgroundColor: DARKMODE_COLORS.cardBackground,
    borderRadius: 10,
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
    color: DARKMODE_COLORS.textPrimary,
  },
  description: {
    fontSize: 14,
    color: DARKMODE_COLORS.textSecondary,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: DARKMODE_COLORS.textPrimary,
  },
  button: {
    backgroundColor: DARKMODE_COLORS.accent,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    width: "70%",
    // marginTop: 10,
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
  },
  buttonText: {
    color: DARKMODE_COLORS.buttonText,
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  cartSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  itemCountBadge: {
    backgroundColor: DARKMODE_COLORS.accent,
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  itemCountText: {
    color: DARKMODE_COLORS.buttonText,
    fontSize: 14,
    fontWeight: "bold",
  },
});
