import React, { use, useContext, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "@screens/auth/Login";
import Register from "@screens/auth/Register";
import ROUTE from "@routes/index";
import { useTheme } from "@context/ThemeContext";
import {
  Switch,
  View,
  TouchableOpacity,
  Text,
  Animated,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Home from "@screens/home/Home";
import Menu from "@screens/home/Menu";
import MenuItemPage from "@screens/home/MenuItemPage";
import UserContext from "@context/UserContext";
import CartContext from "@context/CartContext";
import { deleteToken } from "src/api/token";
import { Ionicons } from "@expo/vector-icons";
import Cart from "@screens/checkout/Cart";
import { DARKMODE_COLORS } from "src/colors/colors";

const Stack = createNativeStackNavigator();

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const HomeNavigator = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isAuthenticated, setIsAuthenticated] = useContext(UserContext);
  const [cart] = useContext(CartContext); // Access the cart context to get the number of items
  const [totalItems, setTotalItems] = useState(0);
  const navigation = useNavigation();

  const toggleSwitch = () => {
    toggleTheme();
  };

  const handleLogout = async () => {
    await deleteToken();
    setIsAuthenticated(false);
  };

  // Calculate total number of items in the cart
  useEffect(() => {
    console.log(cart);
    const total = cart.reduce((count, item) => count + 1, 0);
    setTotalItems(total);
  }, [cart]);

  return (
    <Stack.Navigator
      initialRouteName={ROUTE.HOMEPAGES.HOME}
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkMode ? "#2C2C3A" : "#f8f8f8",
        },
        headerTintColor: isDarkMode ? "#fff" : "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
        headerRight: () => (
          <View style={styles.headerRightContainer}>
            <AnimatedTouchable
              onPress={toggleSwitch}
              style={[
                styles.toggleContainer,
                {
                  backgroundColor: isDarkMode ? "#2C2C3A" : "#F8F8F8",
                  borderColor: isDarkMode ? "#ffffff" : "transparent",
                  borderWidth: isDarkMode ? 1 : 0,
                },
              ]}
            >
              <Animated.View style={styles.iconContainer}>
                {isDarkMode ? (
                  <Ionicons name="moon" size={20} color="#FFF" />
                ) : (
                  <Ionicons name="sunny" size={20} color="#FFA500" />
                )}
              </Animated.View>
            </AnimatedTouchable>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate(ROUTE.NAVPAGES.HOMENAV, {
                  screen: ROUTE.HOMEPAGES.CART,
                })
              }
              style={styles.cartButton}
            >
              <Ionicons
                name="cart-outline"
                size={24}
                color={isDarkMode ? "#fff" : "#000"}
              />
              {totalItems > 0 && (
                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>{totalItems}</Text>
                </View>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleLogout}
              style={styles.logoutButton}
            >
              <Ionicons
                name="log-out-outline"
                size={24}
                color={isDarkMode ? "#fff" : "#000"}
              />
            </TouchableOpacity>
          </View>
        ),
      }}
    >
      <Stack.Screen name={ROUTE.HOMEPAGES.HOME} component={Home} />
      <Stack.Screen name={ROUTE.HOMEPAGES.RESTAURANTMENU} component={Menu} />
      <Stack.Screen
        name={ROUTE.HOMEPAGES.RESTAURANTMENUITEM}
        component={MenuItemPage}
      />
      <Stack.Screen name={ROUTE.HOMEPAGES.CART} component={Cart} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
  },
  toggleContainer: {
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    padding: 2,
    marginRight: 10,
  },
  iconContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cartButton: {
    position: "relative",
    marginRight: 10,
  },
  cartBadge: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: DARKMODE_COLORS.accent,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  logoutButton: {
    marginLeft: 10,
  },
});
