import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Home from "./src/screens/home/Home";
import Menu from "./src/screens/home/Menu";
import Cart from "./src/screens/checkout/Cart";
import Register from "./src/screens/auth/Register";
import Login from "./src/screens/auth/Login";
import Header from "./src/components/Header";

import restaurants from "./data/RestaurantsData";
import { ThemeProvider } from "./src/context/ThemeContext";
import MenuItemPage from "./src/screens/home/MenuItemPage";
import { NavigationContainer } from "@react-navigation/native";

import UserContext from "@context/UserContext";
import CartContext from "@context/CartContext";
import RootNavigator from "@navigation/RootNav/RootNavigator";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import getToken from "src/api/token";

export default function App() {
  // Set defaultProps for Text
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.style = {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "NotoSerif",
  };

  // Set defaultProps for TextInput
  TextInput.defaultProps = TextInput.defaultProps || {};
  TextInput.defaultProps.style = {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "NotoSerif",
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (menuItem) => {
    setCart((prevCart) => [...prevCart, menuItem]);
  };

  const removeFromCart = (menuItem) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item._id === menuItem._id);
      if (index > -1) {
        const newCart = [...prevCart];
        newCart.splice(index, 1); // Remove only one item
        return newCart;
      }
      return prevCart;
    });
  };

  const checkAuth = async () => {
    const token = await getToken();
    setIsAuthenticated(!!token);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const queryClient = new QueryClient();

  return (
    <CartContext.Provider value={[cart, addToCart, removeFromCart]}>
      <UserContext.Provider value={[isAuthenticated, setIsAuthenticated]}>
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            <NavigationContainer>
              <SafeAreaView style={styles.container}>
                <RootNavigator />
              </SafeAreaView>
            </NavigationContainer>
          </QueryClientProvider>
        </ThemeProvider>
      </UserContext.Provider>
    </CartContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C2C3A",
  },
});
