import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { useContext } from "react";
import MenuItem from "@components/Menu/MenuItem";
import { useTheme } from "@context/ThemeContext";
import { LIGHTMODE_COLORS, DARKMODE_COLORS } from "src/colors/colors";
import CartContext from "@context/CartContext";

const Menu = ({ route }) => {
  const { restaurant } = route.params;
  const { name, category, rating, deliveryTime, image, items } = restaurant;
  const { isDarkMode } = useTheme();
  const [cart, addToCart, removeFromCart] = useContext(CartContext);

  return (
    <View style={isDarkMode ? darkStyles.container : styles.container}>
      <View style={isDarkMode ? darkStyles.header : styles.header}>
        <Image
          source={{ uri: image }}
          style={isDarkMode ? darkStyles.image : styles.image}
        />
        <View style={isDarkMode ? darkStyles.headerInfo : styles.headerInfo}>
          <Text
            style={
              isDarkMode ? darkStyles.restaurantName : styles.restaurantName
            }
          >
            {name}
          </Text>
          <Text style={isDarkMode ? darkStyles.category : styles.category}>
            {category?.name}
          </Text>
          <View style={isDarkMode ? darkStyles.details : styles.details}>
            <Text style={isDarkMode ? darkStyles.rating : styles.rating}>
              ⭐ {rating}
            </Text>
            <Text
              style={isDarkMode ? darkStyles.deliveryTime : styles.deliveryTime}
            >
              {deliveryTime} min
            </Text>
          </View>
        </View>
      </View>

      <Text
        style={isDarkMode ? darkStyles.itemsTitleText : styles.itemsTitleText}
      >
        Menu Items
      </Text>

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <MenuItem
            name={item.name}
            price={item.price}
            image={item.image}
            description={item.description}
            item={item}
          />
        )}
        keyExtractor={(item) => item._id.toString()}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHTMODE_COLORS.background,
  },
  header: {
    backgroundColor: LIGHTMODE_COLORS.primary,
    borderRadius: 12,
    margin: 16,
    padding: 16,
    shadowColor: LIGHTMODE_COLORS.shadow,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 12,
  },
  headerInfo: {
    flex: 1,
    justifyContent: "space-around",
  },
  restaurantName: {
    fontSize: 22,
    fontWeight: "bold",
    color: LIGHTMODE_COLORS.textPrimary,
  },
  category: {
    fontSize: 16,
    color: LIGHTMODE_COLORS.textSecondary,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rating: {
    fontSize: 14,
    color: LIGHTMODE_COLORS.accent,
  },
  deliveryTime: {
    fontSize: 14,
    color: LIGHTMODE_COLORS.textSecondary,
  },
  itemsTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: LIGHTMODE_COLORS.textPrimary,
    marginLeft: 20,
    marginVertical: 10,
  },
  menuList: {
    paddingHorizontal: 16,
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARKMODE_COLORS.background,
  },
  header: {
    backgroundColor: DARKMODE_COLORS.primary,
    borderRadius: 12,
    margin: 16,
    padding: 16,
    shadowColor: DARKMODE_COLORS.shadow,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 12,
  },
  headerInfo: {
    flex: 1,
    justifyContent: "space-around",
  },
  restaurantName: {
    fontSize: 22,
    fontWeight: "bold",
    color: DARKMODE_COLORS.textPrimary,
  },
  category: {
    fontSize: 16,
    color: DARKMODE_COLORS.textSecondary,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rating: {
    fontSize: 14,
    color: DARKMODE_COLORS.accent,
  },
  deliveryTime: {
    fontSize: 14,
    color: DARKMODE_COLORS.textSecondary,
  },
  itemsTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: DARKMODE_COLORS.textPrimary,
    marginLeft: 20,
    marginVertical: 10,
  },
  menuList: {
    paddingHorizontal: 16,
  },
});
