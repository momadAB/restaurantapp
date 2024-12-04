import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import MenuItem from "@components/Menu/MenuItem";

import { useTheme } from "@context/ThemeContext";

const Menu = ({ route }) => {
  const { restaurant } = route.params;
  const { name, category, rating, deliveryTime, image, menuItems } = restaurant;
  const { isDarkMode } = useTheme();

  // console.log(restaurant);
  return (
    <View style={isDarkMode ? darkStyles.container : styles.container}>
      {/* Restaurant Header */}
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
            {category}
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

      {/* Menu Items */}
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <MenuItem
            name={item.name}
            price={item.price}
            image={item.image}
            description={item.description}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        // style={styles.menuList}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f8f8f8",
  },
  header: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    elevation: 3,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  headerInfo: {
    flex: 1,
    justifyContent: "space-around",
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  category: {
    fontSize: 14,
    color: "#888",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rating: {
    fontSize: 14,
    color: "#444",
  },
  deliveryTime: {
    fontSize: 14,
    color: "#444",
  },
  itemsTitleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 20,
    marginTop: 10,
  },

  menuList: {
    paddingHorizontal: 10,
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#2C2C3A",
  },
  header: {
    backgroundColor: "transparent",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    // elevation: 3,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  headerInfo: {
    flex: 1,
    justifyContent: "space-around",
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ddd",
  },
  category: {
    fontSize: 14,
    color: "#ccc",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rating: {
    fontSize: 14,
    color: "#ccc",
  },
  deliveryTime: {
    fontSize: 14,
    color: "#ccc",
  },
  itemsTitleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ddd",
    marginLeft: 20,
    marginTop: 10,
  },
  menuList: {
    paddingHorizontal: 10,
  },
});
