import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Register from "@screens/auth/Register";
import { useTheme } from "@context/ThemeContext";
import { Switch } from "react-native";
import HomeNavigator from "@navigation/HomeNav/HomeNav";
import AuthNavigator from "@navigation/AuthNav/AuthNavigation";

import { Ionicons } from "@expo/vector-icons";
import ROUTE from "@routes/index";
import UserContext from "@context/UserContext";

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  const { isDarkMode } = useTheme();
  const [isAuthenticated, setIsAuthenticated] = useContext(UserContext);

  return (
    <Tab.Navigator
      initialRouteName={ROUTE.NAVPAGES.AUTHNAV}
      screenOptions={({ route }) => ({
        headerShown: false,
        headerStyle: {
          backgroundColor: isDarkMode ? "#1E1E2E" : "#FFFFFF",
        },
        headerTintColor: isDarkMode ? "#FFFFFF" : "#000000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarStyle: { display: "none" },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === ROUTE.NAVPAGES.AUTHNAV) {
            iconName = "log-in-outline";
          } else if (route.name === ROUTE.NAVPAGES.HOMENAV) {
            iconName = "home-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      {isAuthenticated ? (
        <Tab.Screen name={ROUTE.NAVPAGES.HOMENAV} component={HomeNavigator} />
      ) : (
        <Tab.Screen name={ROUTE.NAVPAGES.AUTHNAV} component={AuthNavigator} />
      )}
      {/* <Tab.Screen name={ROUTE.NAVPAGES.AUTHNAV} component={AuthNavigator} />
      <Tab.Screen name={ROUTE.NAVPAGES.HOMENAV} component={HomeNavigator} /> */}
    </Tab.Navigator>
  );
};

export default RootNavigator;
