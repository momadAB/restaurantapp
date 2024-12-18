import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryItem from "@components/Home/CategoryItem";
import RestaurantItem from "@components/Home/RestaurantItem";
import { useTheme } from "@context/ThemeContext";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories, getAllRestaurants } from "src/api/action";
import { LIGHTMODE_COLORS, DARKMODE_COLORS } from "src/colors/colors";

const Home = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const { data: restaurantCategories, isLoading: isLoadingCategories } =
    useQuery({ queryKey: ["categories"], queryFn: getAllCategories });
  const { data: restaurants, isLoading: isLoadingRestaurants } = useQuery({
    queryKey: ["restaurants"],
    queryFn: getAllRestaurants,
  });

  const filteredRestaurants = selectedCategoryId
    ? restaurants.filter(
        (restaurant) => restaurant.category?._id === selectedCategoryId
      )
    : restaurants;

  if (isLoadingCategories || isLoadingRestaurants) {
    return (
      <View
        style={
          isDarkMode ? darkStyles.loadingContainer : styles.loadingContainer
        }
      >
        <ActivityIndicator
          size="large"
          color={isDarkMode ? DARKMODE_COLORS.accent : LIGHTMODE_COLORS.accent}
        />
      </View>
    );
  }

  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId((prevCategoryId) =>
      prevCategoryId === categoryId ? null : categoryId
    );
  };

  return (
    <SafeAreaView style={isDarkMode ? darkStyles.root : styles.root}>
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
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item: category }) => (
          <CategoryItem
            id={category._id}
            categoryName={category.name}
            categoryImage={category.image}
            isSelected={selectedCategoryId === category._id}
            onPress={() => handleCategorySelect(category._id)}
          />
        )}
        keyExtractor={(item) => item._id.toString()}
      />
      <Text
        style={isDarkMode ? darkStyles.restaurantsText : styles.restaurantsText}
      >
        Restaurants
      </Text>
      <FlatList
        style={isDarkMode ? darkStyles.list : styles.list}
        data={filteredRestaurants}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: restaurant }) => (
          <RestaurantItem
            key={restaurant._id}
            id={restaurant._id}
            name={restaurant.name}
            image={restaurant.image}
            rating={restaurant.rating}
            deliveryTime={restaurant.deliveryTime}
            category={restaurant.category?.name}
            firstItemImage={restaurant.items[0]?.image}
            restaurant={restaurant}
          />
        )}
        keyExtractor={(item) => item._id.toString()}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: LIGHTMODE_COLORS.background,
    paddingHorizontal: 16,
  },
  categoriesText: {
    color: LIGHTMODE_COLORS.textPrimary,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  restaurantsText: {
    color: LIGHTMODE_COLORS.textPrimary,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  horizontalScroll: {
    flexDirection: "row",
    height: 100,
    // marginBottom: 20,
    flexGrow: 0,
  },
  list: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: LIGHTMODE_COLORS.background,
  },
});

const darkStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: DARKMODE_COLORS.background,
    paddingHorizontal: 16,
  },
  categoriesText: {
    color: DARKMODE_COLORS.textPrimary,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  restaurantsText: {
    color: DARKMODE_COLORS.textPrimary,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  horizontalScroll: {
    flexDirection: "row",
    height: 100,
    flexGrow: 0,
    // marginBottom: 20,
  },
  list: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: DARKMODE_COLORS.background,
  },
});
