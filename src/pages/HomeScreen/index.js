import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import styles from "./style";
import { useAuth } from "../../provider/Auth";

const HomeScreen = ({ navigation }) => {
  const { gameOn } = useAuth();

  return (
    <ImageBackground
      source={require("../../../assets/bg.webp")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require("../../../assets/image-mascote.png")}
          style={styles.mascot}
        />
        <Text style={styles.title}>Bem-vindo ao Quiz!</Text>
        <TouchableOpacity
          style={styles.playButton}
          onPress={() => {
            gameOn();
            setTimeout(() => {
              navigation.navigate("Game");
            }, 500);
          }}
        >
          <Text style={styles.playButtonText}>JOGAR</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
