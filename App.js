import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreens from "./screens/GameScreen";
import Colors from "./constants/colors";


export default function App() {
  const [useNumber, setUseNumber] = useState();

  const startGameHandler = (pickedNumber) => {
    setUseNumber(pickedNumber);
  };
  let screen = <StartGameScreen onPicked={startGameHandler} />;
  if (useNumber) {
    screen = <GameScreens chosenNumber={useNumber}/>;
  }
  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent200]} style={styles.rootScreen}>
      <ImageBackground
        style={styles.rootScreen}
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        imageStyle={styles.backGroundContainer}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backGroundContainer: {
    opacity: 0.15,
  },
});
