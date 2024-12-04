import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import { useTheme } from "@context/ThemeContext";

import { useNavigation } from "@react-navigation/native";
import ROUTE from "@routes/index";

const RestaurantItem = ({
  name,
  rating,
  deliveryTime,
  category,
  firstItemImage,
  image,
  restaurant,
}) => {
  const { isDarkMode } = useTheme();

  const navigation = useNavigation();

  const handleViewMenu = () => {
    navigation.navigate(ROUTE.HOMEPAGES.RESTAURANTMENU, {
      restaurant,
    });
  };

  return (
    <TouchableOpacity
      style={isDarkMode ? darkStyles.card : styles.card}
      onPress={handleViewMenu}
    >
      {/* Left Section with First Item Image and Logo */}
      <View style={styles.leftSection}>
        <Image source={{ uri: firstItemImage }} style={styles.firstItemImage} />
        <Image source={{ uri: image }} style={styles.logo} />
      </View>

      {/* Right Section with Restaurant Info */}
      <View style={styles.infoContainer}>
        <Text style={isDarkMode ? darkStyles.name : styles.name}>{name}</Text>
        <Text style={isDarkMode ? darkStyles.category : styles.category}>
          {category}
        </Text>

        <View style={isDarkMode ? darkStyles.details : styles.details}>
          <Text style={isDarkMode ? darkStyles.rating : styles.rating}>
            ⭐ {rating} ⬤{" "}
          </Text>
          <Text
            style={isDarkMode ? darkStyles.deliveryTime : styles.deliveryTime}
          >
            {deliveryTime}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "transparent",
    borderRadius: 10,
    // elevation: 3,
    margin: 10,
    padding: 10,
  },
  leftSection: {
    position: "relative",
    marginRight: 10,
  },
  firstItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  logo: {
    position: "absolute",
    width: 30,
    height: 30,
    borderRadius: 15,
    bottom: 5,
    right: 5,
    backgroundColor: "#fff",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  category: {
    fontSize: 14,
    color: "#888",
    // marginVertical: 5,
  },
  details: {
    flexDirection: "row",
    justifyContent: "",
    // marginTop: 5,
  },
  rating: {
    fontSize: 14,
    color: "#444",
  },
  deliveryTime: {
    fontSize: 14,
    color: "#444",
  },
});

const darkStyles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#2C2C3A",
    borderRadius: 10,
    // elevation: 3,
    margin: 10,
    padding: 10,
  },
  leftSection: {
    position: "relative",
    marginRight: 10,
  },
  firstItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  logo: {
    position: "absolute",
    width: 30,
    height: 30,
    borderRadius: 15,
    bottom: 5,
    right: 5,
    backgroundColor: "#fff",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  category: {
    fontSize: 14,
    color: "#ccc",
    // marginVertical: 5,
  },
  details: {
    flexDirection: "row",
    justifyContent: "",
  },
  rating: {
    fontSize: 14,
    color: "#fff",
  },
  deliveryTime: {
    fontSize: 14,
    color: "#fff",
  },
});
