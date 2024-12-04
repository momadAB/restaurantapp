import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import React from "react";

import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <View style={isDarkMode ? darkStyles.header : styles.header}>
      <TouchableOpacity>
        <Text style={styles.backButtonText}> {"<"} </Text>
      </TouchableOpacity>
      <View style={styles.rightButtons}>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          thumbColor={"#aaa"}
          trackColor={{ true: "#fff", false: "#ccc" }}
        />
        <TouchableOpacity>
          <Text style={styles.cartIcon}>🛒</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 50,
    width: "auto",
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  backButtonText: {
    fontSize: 28,
    marginLeft: 10,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#ccc",
  },
  cartIcon: {
    fontSize: 20,
    marginRight: 10,
    marginLeft: 10,
    fontWeight: "bold",
    color: "#ccc",
  },
  rightButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
});

const darkStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 50,
    width: "auto",
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    backgroundColor: "black",
    borderBottomColor: "#fff",
  },
  backButtonText: {
    fontSize: 28,
    marginLeft: 10,
    fontWeight: "bold",
    color: "#fff",
  },
  cartIcon: {
    fontSize: 20,
    marginRight: 10,
    marginLeft: 10,
    fontWeight: "bold",
    color: "#ccc",
  },
  rightButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
});
