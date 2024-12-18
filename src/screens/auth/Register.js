import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useTheme } from "@context/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import { register } from "src/api/auth";
import { useMutation } from "@tanstack/react-query";
import ROUTE from "@routes/index";
import { LIGHTMODE_COLORS, DARKMODE_COLORS } from "src/colors/colors";

const Register = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState("");
  const [userInfo, setUserInfo] = useState({
    password: "",
    name: "",
  });

  const { isDarkMode } = useTheme();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const {
    mutate: handleRegister,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: () => register(userInfo, image),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error("Error object:", error);
    },
  });

  return (
    <View style={isDarkMode ? darkStyles.container : styles.container}>
      <View style={isDarkMode ? darkStyles.form : styles.form}>
        <Text style={isDarkMode ? darkStyles.title : styles.title}>
          Join Us Today!
        </Text>

        <TextInput
          placeholder="Username"
          placeholderTextColor={
            isDarkMode
              ? DARKMODE_COLORS.textSecondary
              : LIGHTMODE_COLORS.textSecondary
          }
          style={isDarkMode ? darkStyles.input : styles.input}
          value={userInfo.name}
          onChangeText={(text) => setUserInfo({ ...userInfo, name: text })}
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
          value={userInfo.password}
          onChangeText={(text) => setUserInfo({ ...userInfo, password: text })}
        />

        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          <Text
            style={
              isDarkMode ? darkStyles.uploadButtonText : styles.uploadButtonText
            }
          >
            Upload Profile Image
          </Text>
        </TouchableOpacity>

        {image && <Image source={{ uri: image }} style={styles.image} />}

        <TouchableOpacity
          style={isDarkMode ? darkStyles.submitButton : styles.submitButton}
          onPress={handleRegister}
          disabled={isLoading}
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
              Register
            </Text>
          )}
        </TouchableOpacity>

        {isError && (
          <Text style={styles.errorText}>
            Error: {error?.response?.data?.message || "An error occurred"}
          </Text>
        )}

        {isSuccess && (
          <Text style={styles.successText}>Registration Successful!</Text>
        )}

        <View style={isDarkMode ? darkStyles.loginRow : styles.loginRow}>
          <Text
            style={isDarkMode ? darkStyles.haveUserText : styles.haveUserText}
          >
            Already registered with us?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ROUTE.AUTHPAGES.LOGIN);
            }}
          >
            <Text style={isDarkMode ? darkStyles.loginLink : styles.loginLink}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;

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
  uploadButton: {
    backgroundColor: LIGHTMODE_COLORS.accent,
    paddingVertical: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  uploadButtonText: {
    color: LIGHTMODE_COLORS.buttonText,
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 20,
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
  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  haveUserText: {
    fontSize: 14,
    color: LIGHTMODE_COLORS.textSecondary,
  },
  loginLink: {
    fontSize: 14,
    color: LIGHTMODE_COLORS.accent,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
  successText: {
    color: "green",
    marginTop: 10,
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
  uploadButton: {
    backgroundColor: DARKMODE_COLORS.accent,
    paddingVertical: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  uploadButtonText: {
    color: DARKMODE_COLORS.buttonText,
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 20,
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
  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  haveUserText: {
    fontSize: 14,
    color: DARKMODE_COLORS.textSecondary,
  },
  loginLink: {
    fontSize: 14,
    color: DARKMODE_COLORS.accent,
    fontWeight: "bold",
  },
});
