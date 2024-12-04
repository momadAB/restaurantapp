import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "@screens/auth/Register";
import { useTheme } from "@context/ThemeContext";
import { Switch } from "react-native";
import HomeNavigator from "@navigation/HomeNav/HomeNav";
import AuthNavigator from "@navigation/AuthNav/AuthNavigation";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
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
      <Stack.Screen name={"Auth"} component={AuthNavigator} />
      <Stack.Screen name={"Home"} component={HomeNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
