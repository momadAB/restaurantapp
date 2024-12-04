import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@context/ThemeContext";
import ROUTE from "@routes/index";

const MenuItem = ({ name, price, image, description }) => {
  const { isDarkMode } = useTheme();

  const navigation = useNavigation();

  const handleViewItem = () => {
    navigation.navigate(ROUTE.HOMEPAGES.RESTAURANTMENUITEM, {
      menuItem: {
        name,
        price,
        image,
        description,
      },
    });
  };

  return (
    <TouchableOpacity
      style={isDarkMode ? darkStyles.card : styles.card}
      onPress={handleViewItem}
    >
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
            ${price}
          </Text>
        </View>
        <Button title="ADD TO CART" />
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;

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
    color: "#ddd",
  },
  description: {
    fontSize: 14,
    color: "#ccc",
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
    color: "#ccc",
  },
});
