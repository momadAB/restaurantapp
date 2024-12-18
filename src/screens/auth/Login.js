import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import ROUTE from "@routes/index";
import { login } from "src/api/auth";
import { saveToken } from "src/api/token";
import UserContext from "@context/UserContext";
import { LIGHTMODE_COLORS, DARKMODE_COLORS } from "src/colors/colors";

const Login = () => {
  const navigation = useNavigation();
  const { isDarkMode } = useTheme();
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });
  const [isAuthenticated, setIsAuthenticated] = useContext(UserContext);

  const { mutate: loginMutate, isLoading } = useMutation({
    mutationFn: () => login(userInput),
    onSuccess: (data) => {
      saveToken(data.token);
      setIsAuthenticated(true);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleLogin = async () => {
    try {
      loginMutate();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <View style={isDarkMode ? darkStyles.container : styles.container}>
      <View style={isDarkMode ? darkStyles.form : styles.form}>
        <Text style={isDarkMode ? darkStyles.nameText : styles.nameText}>
          DEVOUR
        </Text>
        <Text style={isDarkMode ? darkStyles.title : styles.title}>
          Welcome Back!
        </Text>

        <TextInput
          placeholder="Username"
          placeholderTextColor={
            isDarkMode
              ? DARKMODE_COLORS.textSecondary
              : LIGHTMODE_COLORS.textSecondary
          }
          style={isDarkMode ? darkStyles.input : styles.input}
          onChangeText={(text) => {
            setUserInput({ ...userInput, username: text });
          }}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={
            isDarkMode
              ? DARKMODE_COLORS.textSecondary
              : LIGHTMODE_COLORS.textSecondary
          }
          secureTextEntry={true}
          style={isDarkMode ? darkStyles.input : styles.input}
          onChangeText={(text) => {
            setUserInput({ ...userInput, password: text });
          }}
        />
        <TouchableOpacity
          style={isDarkMode ? darkStyles.submitButton : styles.submitButton}
          onPress={handleLogin}
        >
          {isLoading ? (
            <ActivityIndicator
              color={
                isDarkMode
                  ? DARKMODE_COLORS.buttonText
                  : LIGHTMODE_COLORS.buttonText
              }
            />
          ) : (
            <Text
              style={
                isDarkMode
                  ? darkStyles.submitButtonText
                  : styles.submitButtonText
              }
            >
              Login
            </Text>
          )}
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
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHTMODE_COLORS.background,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: LIGHTMODE_COLORS.primary,
    borderRadius: 20,
    width: "90%",
    alignSelf: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: LIGHTMODE_COLORS.textPrimary,
    marginBottom: 20,
  },
  nameText: {
    fontSize: 36,
    fontWeight: "bold",
    color: LIGHTMODE_COLORS.accent,
    marginBottom: 20,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 1 },
    letterSpacing: 20,
    textShadowRadius: 4,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: LIGHTMODE_COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: LIGHTMODE_COLORS.inputBackground,
    color: LIGHTMODE_COLORS.textPrimary,
  },
  submitButton: {
    backgroundColor: LIGHTMODE_COLORS.accent,
    paddingVertical: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  submitButtonText: {
    color: LIGHTMODE_COLORS.buttonText,
    fontSize: 18,
    fontWeight: "bold",
  },
  registerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  notRegisteredText: {
    fontSize: 14,
    color: LIGHTMODE_COLORS.textSecondary,
  },
  registerLink: {
    fontSize: 14,
    color: LIGHTMODE_COLORS.accent,
    fontWeight: "bold",
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARKMODE_COLORS.background,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "transparent",
    borderRadius: 20,
    width: "90%",
    alignSelf: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: DARKMODE_COLORS.textPrimary,
    marginBottom: 20,
  },
  nameText: {
    fontSize: 36,
    fontWeight: "bold",
    color: DARKMODE_COLORS.accent,
    marginBottom: 20,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 1 },
    letterSpacing: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: DARKMODE_COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: DARKMODE_COLORS.inputBackground,
    color: DARKMODE_COLORS.textPrimary,
  },
  submitButton: {
    backgroundColor: DARKMODE_COLORS.accent,
    paddingVertical: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  submitButtonText: {
    color: DARKMODE_COLORS.buttonText,
    fontSize: 18,
    fontWeight: "bold",
  },
  registerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  notRegisteredText: {
    fontSize: 14,
    color: DARKMODE_COLORS.textSecondary,
  },
  registerLink: {
    fontSize: 14,
    color: DARKMODE_COLORS.accent,
    fontWeight: "bold",
  },
});
