import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import restaurantCategories from "../../../data/CategoriesData";
import restaurants from "../../../data/RestaurantsData";

import { SafeAreaView } from "react-native-safe-area-context";
import CategoryItem from "@components/Home/CategoryItem";
import RestaurantItem from "@components/Home/RestaurantItem";

import { useTheme } from "@context/ThemeContext";

const Home = () => {
  const { isDarkMode } = useTheme();

  return (
    <SafeAreaView style={isDarkMode ? darkStyles.root : styles.root}>
      {/* <Header /> */}
      {/* <View style={{ flex: 1 }}> */}
      <Text
        style={isDarkMode ? darkStyles.categoriesText : styles.categoriesText}
      >
        Categories
      </Text>
      <FlatList
        style={
          isDarkMode ? darkStyles.horizontalScroll : styles.horizontalScroll
        }
        data={restaurantCategories}
        horizontal={true} // Ensure horizontal scrolling
        renderItem={({ item: category }) => (
          <CategoryItem
            id={category.id}
            categoryName={category.categoryName}
            categoryImage={category.categoryImage}
          />
        )}
        keyExtractor={(item) => item.id.toString()} // Unique key extractor
      />
      {/* </View> */}
      {/* <View style={{ flex: 10 }}> */}
      <Text
        style={isDarkMode ? darkStyles.categoriesText : styles.categoriesText}
      >
        Restaurants
      </Text>
      <FlatList
        style={isDarkMode ? darkStyles.list : styles.list}
        data={restaurants}
        renderItem={({ item: restaurant }) => (
          <RestaurantItem
            key={restaurant.id}
            id={restaurant.id}
            name={restaurant.name}
            image={restaurant.image}
            rating={restaurant.rating}
            deliveryTime={restaurant.deliveryTime}
            category={restaurant.category}
            firstItemImage={restaurant.menuItems[0].image}
            restaurant={restaurant}
          />
        )}
        keyExtractor={(item) => item.id.toString()} // Unique key extractor
      />
      {/* </View> */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f8f8f8", // Dark mode background color
  },
  categoriesText: {
    color: "black", // Text color for categories
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  restaurantsText: {
    color: "black", // Text color for categories
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  horizontalScroll: {
    flexDirection: "row",
    height: 70,
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    marginRight: 50,
    backgroundColor: "#f8f8f8", // Light mode background color
  },
  list: {
    // flex: 6,
    backgroundColor: "#f8f8f8",
    paddingRight: 20,
    margin: 0,
  },
});

const darkStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#2C2C3A", // Dark mode background color
  },
  categoriesText: {
    color: "#fff", // Text color for categories
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  restaurantsText: {
    color: "black", // Text color for categories
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  horizontalScroll: {
    flexDirection: "row",
    height: 70,
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    marginRight: 50,
    backgroundColor: "#2C2C3A", // Dark mode background color
  },
  list: {
    backgroundColor: "#2C2C3A",
    paddingRight: 20,
    margin: 0,
  },
});
