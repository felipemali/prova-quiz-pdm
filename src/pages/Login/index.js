import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./style";
import { useAuth } from "../../provider/Auth";

const Login = ({ navigation }) => {
  const { loginExist } = useAuth();

  const [loginUser, setLoginUser] = useState({
    user: "",
    password: "",
  });
  const updateUser = (user) => {
    setLoginUser((prevState) => ({
      ...prevState,
      user: user.toLowerCase(),
    }));
  };
  const updatePassword = (password) => {
    setLoginUser((prevState) => ({
      ...prevState,
      password: password.toLowerCase(),
    }));
  };

  const verification = () => {
    loginExist(loginUser, navigation);
    setLoginUser({ user: "", password: "" });
  };

  return (
    <ImageBackground
      source={{
        uri: "https://www.fonewalls.com/wp-content/uploads/2023/05/Nature-4K-Wallpaper-2160x3840-289.jpg",
      }}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <View style={styles.header}>
          <FontAwesome5 name="question-circle" size={36} color="#000" />
          <Text style={styles.title}>Quiz Login</Text>
        </View>

        <TextInput
          style={styles.input}
          onChangeText={updateUser}
          value={loginUser.user}
          placeholder="Usuário..."
          placeholderTextColor="#343a40"
        />
        <TextInput
          style={styles.input}
          onChangeText={updatePassword}
          value={loginUser.password}
          placeholder="Senha..."
          placeholderTextColor="#343a40"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.loginButton} onPress={verification}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigation.navigate("CreateUser")}
        >
          <Text style={styles.signupText}>Criar uma Conta</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Login;
