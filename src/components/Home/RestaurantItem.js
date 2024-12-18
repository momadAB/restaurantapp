import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@context/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import ROUTE from "@routes/index";
import { LIGHTMODE_COLORS, DARKMODE_COLORS } from "src/colors/colors";

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
    navigation.navigate(ROUTE.HOMEPAGES.RESTAURANTMENU, { restaurant });
  };

  return (
    <TouchableOpacity
      style={isDarkMode ? darkStyles.card : styles.card}
      onPress={handleViewMenu}
    >
      <View style={styles.leftSection}>
        <Image source={{ uri: firstItemImage }} style={styles.firstItemImage} />
        <Image source={{ uri: image }} style={styles.logo} />
      </View>

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
    backgroundColor: LIGHTMODE_COLORS.cardBackground,
    borderRadius: 10,
    // margin: 10,
    marginBottom: 0,
    marginTop: 0,
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
    backgroundColor: LIGHTMODE_COLORS.cardBackground,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: LIGHTMODE_COLORS.textPrimary,
  },
  category: {
    fontSize: 14,
    color: LIGHTMODE_COLORS.textSecondary,
  },
  details: {
    flexDirection: "row",
  },
  rating: {
    fontSize: 14,
    color: LIGHTMODE_COLORS.textPrimary,
  },
  deliveryTime: {
    fontSize: 14,
    color: LIGHTMODE_COLORS.textPrimary,
  },
});

const darkStyles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: DARKMODE_COLORS.cardBackground,
    borderRadius: 10,
    // margin: 10,
    marginBottom: 0,
    marginTop: 0,
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
    backgroundColor: DARKMODE_COLORS.cardBackground,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: DARKMODE_COLORS.textPrimary,
  },
  category: {
    fontSize: 14,
    color: DARKMODE_COLORS.textSecondary,
  },
  details: {
    flexDirection: "row",
  },
  rating: {
    fontSize: 14,
    color: DARKMODE_COLORS.textPrimary,
  },
  deliveryTime: {
    fontSize: 14,
    color: DARKMODE_COLORS.textPrimary,
  },
});
