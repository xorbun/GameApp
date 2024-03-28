import { View, StyleSheet, Text, Alert } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/numberContainer";
import PrimaryButton from "../components/PrimaryButton";

const GameScreens = ({ chosenNumber, onGameOver }) => {
  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  let minNumber = 1;
  let maxNumber = 100;
  const initialGuess = generateRandomBetween(
    1,
    100,
    chosenNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const nextGuessedNumber = (direction) => {
    if (
      (direction === "lower" && currentGuess < chosenNumber) ||
      (direction === "bigger" && currentGuess > chosenNumber)
    ) {
      Alert.alert("stai mentendo!", "di la verità!", [
        { text: "mi dispiace", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxNumber = currentGuess;
    } else {
      minNumber = currentGuess + 1;
    }
    const newRndmNum = generateRandomBetween(
      minNumber,
      maxNumber,
      currentGuess
    );
    setCurrentGuess(newRndmNum);
  };
  useEffect(() => {
    
    if (currentGuess === chosenNumber) {
       
        onGameOver();
    }
  }, [currentGuess, chosenNumber, onGameOver]);

  return (
    <View style={styles.container}>
      <Title>il numero scelto è</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessedNumber.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessedNumber.bind(this, "bigger")}>
            +
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};
export default GameScreens;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
