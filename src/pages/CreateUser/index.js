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

const CreateUser = ({ navigation }) => {
  const { addUser } = useAuth();

  const [dataAccount, setDataAccount] = useState({
    user: "",
    password: "",
    level: 0,
  });

  const updateUser = (user) => {
    setDataAccount((prevState) => ({ ...prevState, user: user.toLowerCase() }));
  };
  const updatePassword = (password) => {
    setDataAccount((prevState) => ({
      ...prevState,
      password: password.toLowerCase(),
    }));
  };

  const verification = async () => {
    if (dataAccount.user && dataAccount.password) {
      console.log("entrou na função do create");
      await addUser(dataAccount, navigation);
    }
    // login();
    setDataAccount({ user: "", password: "", level: 0 });
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
          value={dataAccount.user}
          placeholder="Usuário..."
          placeholderTextColor="#343a40"
        />
        <TextInput
          style={styles.input}
          onChangeText={updatePassword}
          value={dataAccount.password}
          placeholder="Senha..."
          placeholderTextColor="#343a40"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.loginButton} onPress={verification}>
          <Text style={styles.loginButtonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default CreateUser;
