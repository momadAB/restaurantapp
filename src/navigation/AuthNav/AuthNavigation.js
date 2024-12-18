import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "@screens/auth/Login";
import Register from "@screens/auth/Register";
import ROUTE from "@routes/index";
import { useTheme } from "@context/ThemeContext";
import { View, TouchableOpacity, Animated, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

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
          <View style={styles.headerRightContainer}>
            <AnimatedTouchable
              onPress={toggleTheme}
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
          </View>
        ),
      }}
    >
      <Stack.Screen name={ROUTE.AUTHPAGES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTE.AUTHPAGES.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

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
});
