import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { useTheme } from "../../context/ThemeContext";
import { useNavigation } from "@react-navigation/native";

import ROUTE from "@routes/index";

const Login = () => {
  const navigation = useNavigation();
  const { isDarkMode } = useTheme();

  const handleLogin = () => {
    navigation.getParent().navigate("HomeNav");
  };

  return (
    <View style={isDarkMode ? darkStyles.container : styles.container}>
      <View style={isDarkMode ? darkStyles.form : styles.form}>
        <Text style={isDarkMode ? darkStyles.title : styles.title}>
          Welcome Back!
        </Text>
        {/* <Text style={isDarkMode ? darkStyles.label : styles.label}>
          Username:
        </Text> */}
        <TextInput
          placeholder="Username"
          style={isDarkMode ? darkStyles.input : styles.input}
        />

        {/* <Text style={isDarkMode ? darkStyles.label : styles.label}>
          Password:
        </Text> */}
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={isDarkMode ? darkStyles.input : styles.input}
        />
        <TouchableOpacity
          style={isDarkMode ? darkStyles.submitButton : styles.submitButton}
          onPress={handleLogin}
        >
          <Text
            style={
              isDarkMode ? darkStyles.submitButtonText : styles.submitButtonText
            }
          >
            Login
          </Text>
        </TouchableOpacity>
        <View style={isDarkMode ? darkStyles.registerRow : styles.registerRow}>
          <Text
            style={
              isDarkMode
                ? darkStyles.notRegisteredText
                : styles.notRegisteredText
            }
          >
            Not registered with us?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ROUTE.AUTHPAGES.REGISTER);
            }}
          >
            <Text
              style={isDarkMode ? darkStyles.registerLink : styles.registerLink}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
        {/* <Button title="Login" style={styles.submitButton} /> */}
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 20,
    backgroundColor: "#f8f8f8",
    width: "80%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    alignSelf: "flex-start",
    marginBottom: 5,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",

    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "white",
  },
  submitButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: "30%",
    borderRadius: 5,
    width: "100%",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    margin: "auto",
  },
  registerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  notRegisteredText: {
    fontSize: 14,
    color: "#333",
  },
  registerLink: {
    fontSize: 14,
    color: "#007bff",
    fontWeight: "bold",
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C2C3A",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 20,
    backgroundColor: "#2C2C3A",
    width: "80%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#eee",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    alignSelf: "flex-start",
    marginBottom: 5,
    color: "#eee",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",

    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "white",
  },
  submitButton: {
    backgroundColor: "#007bff",

    paddingVertical: 10,
    paddingHorizontal: "30%",
    borderRadius: 5,
    width: "100%",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",

    margin: "auto",
  },
  registerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  notRegisteredText: {
    fontSize: 14,
    color: "#eee",
  },
  registerLink: {
    fontSize: 14,
    color: "#007bff",
    fontWeight: "bold",
  },
});
