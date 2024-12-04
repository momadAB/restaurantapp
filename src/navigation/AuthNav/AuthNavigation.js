import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "@screens/auth/Login";
import Register from "@screens/auth/Register";
import ROUTE from "@routes/index";
import { useTheme } from "@context/ThemeContext";
import { Switch } from "react-native";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName={ROUTE.AUTHPAGES.LOGIN}
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
      <Stack.Screen name={ROUTE.AUTHPAGES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTE.AUTHPAGES.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
