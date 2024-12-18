import instance from ".";
import { saveToken } from "./token";

const login = async (userInfo) => {
  const { data } = await instance.post("/auth/login", userInfo);
  return data;
};

const register = async (userInfo, image) => {
  try {
    const formData = new FormData();
    formData.append("username", userInfo.name);
    formData.append("password", userInfo.password);
    formData.append("image", {
      uri: image,
      type: "image/jpeg",
      name: "profile.jpg",
    });
    const { data } = await instance.post("/auth/register", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    await saveToken(data.token);

    return data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

export { login, register };
