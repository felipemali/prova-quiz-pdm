import React from "react";
import { Text, Image, ImageBackground, View } from "react-native";
import { styles } from "./style";
import { useAuth } from "../../provider/Auth";

export default function ProfileScreen() {
  const { userLogado } = useAuth();

  return (
    <ImageBackground
      source={{
        uri: "https://www.fonewalls.com/wp-content/uploads/2023/05/Nature-4K-Wallpaper-2160x3840-289.jpg",
      }}
      style={styles.container}
    >
      <View style={styles.overlay} />
      <Text style={styles.title}>Perfil</Text>
      <Image
        source={require("../../../assets/icone-user.png")}
        style={styles.icon}
      />
      <Text style={styles.name}>Usuário: {userLogado.user}</Text>
      <Text style={styles.info}>Level:{userLogado.level}</Text>
    </ImageBackground>
  );
}
