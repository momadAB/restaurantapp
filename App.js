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

import RootNavigator from "@navigation/RootNav/RootNavigator";

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
  return (
    <ThemeProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          {/* <Header /> */}
          <RootNavigator />
          {/* <Home /> */}
          {/* <Menu restaurant={restaurants[0]} /> */}
          {/* <MenuItemPage menuItem={restaurants[0].menuItems[0]} /> */}
          {/* <Cart /> */}
          {/* <Register /> */}
          {/* <Login /> */}
        </SafeAreaView>
      </NavigationContainer>
    </ThemeProvider>
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
