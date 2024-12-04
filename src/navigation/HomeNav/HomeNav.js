import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "@screens/auth/Login";
import Register from "@screens/auth/Register";
import ROUTE from "@routes/index";
import { useTheme } from "@context/ThemeContext";
import { Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Home from "@screens/home/Home";
import Menu from "@screens/home/Menu";
import MenuItemPage from "@screens/home/MenuItemPage";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName={ROUTE.HOMEPAGES.HOME}
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkMode ? "#2C2C3A" : "#f8f8f8", // Dark or light header background
        },
        headerTintColor: isDarkMode ? "#fff" : "#000", // Text color for the header
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
        headerRight: () => (
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            thumbColor={"#aaa"}
            trackColor={{ true: "#fff", false: "#ccc" }}
          />
        ),
      }}
    >
      <Stack.Screen name={ROUTE.HOMEPAGES.HOME} component={Home} />
      <Stack.Screen name={ROUTE.HOMEPAGES.RESTAURANTMENU} component={Menu} />
      <Stack.Screen
        name={ROUTE.HOMEPAGES.RESTAURANTMENUITEM}
        component={MenuItemPage}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
