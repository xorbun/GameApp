import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreens from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOVer from "./screens/GameOver";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";


export default function App() {
  const [useNumber, setUseNumber] = useState();
  const [numberofTry,setNumberOfTry]=useState();
  const [gameIsOver, setGameIsOVer] = useState(false);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const startGameHandler = (pickedNumber) => {
    setUseNumber(pickedNumber);
    setGameIsOVer(false);
  };
  const startNewGameHandler=()=>{
    setUseNumber(null),
    setGameIsOVer(false)
  }
  let screen;
  const gameOverHandler = (numberOfTry) => {
    setNumberOfTry(numberOfTry)
    setGameIsOVer(true);
  };
  if (gameIsOver) {
    screen = <GameOVer victoryNum={useNumber} numberOfTry={numberofTry} newGame={startNewGameHandler}/>;
  } else if (useNumber) {
    screen = (
      <GameScreens chosenNumber={useNumber} onGameOver={gameOverHandler} />
    );
  } else {
    screen = <StartGameScreen onPicked={startGameHandler} />;
  }
  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent200]}
      style={styles.rootScreen}
    >
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
