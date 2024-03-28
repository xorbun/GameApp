import { View, StyleSheet, Text, Alert, FlatList } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/numberContainer";
import PrimaryButton from "../components/PrimaryButton";
import GameText from "../components/Text";
import { AntDesign } from "@expo/vector-icons";
import Card from "../components/Card";
import Colors from "../constants/colors";

const GameScreens = ({ chosenNumber, onGameOver }) => {
  const [buttonSmash, setButtonSmash] = useState(0);

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
  const initialGuess = generateRandomBetween(1, 100, chosenNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessedRounds, setGuessedRounds] = useState([
    { number: currentGuess, id: Math.random().toString() },
  ]);
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
    setGuessedRounds((prevGuessedRounds) => [
      ...prevGuessedRounds,
      { number: currentGuess, id: Math.random().toString() },
    ]);
    setButtonSmash(buttonSmash + 1);
  };
  useEffect(() => {
    if (currentGuess === chosenNumber) {
      onGameOver(buttonSmash);
    }
  }, [currentGuess, chosenNumber, onGameOver]);

  return (
    <View style={styles.container}>
      <Title>Provo a indovinare...</Title>
      <Card>
        <GameText>Il numero scelto è</GameText>
        <NumberContainer>{currentGuess}</NumberContainer>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessedNumber.bind(this, "lower")}>
              <AntDesign name="minuscircleo" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessedNumber.bind(this, "bigger")}>
              <AntDesign name="pluscircleo" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.prevNumberContainer}>
        <Title style={styles.prevNumberTitles}>i numeri precedenti...</Title>

        <FlatList
          data={guessedRounds}
          renderItem={(itemData) => (
            <View style={styles.flatContainer}>
              <GameText style={styles.prevNumberStyle} id={itemData.item.id}>
                {itemData.item.number}
              </GameText>
            </View>
          )}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
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

  prevNumberContainer: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 12,
    overflow: "hidden",
  },
  prevNumberTitles: {
    borderWidth: 0,
  },
  flatContainer: {
    paddingHorizontal: 110,
    marginBottom: 12,
    borderRadius: 40,
    backgroundColor: Colors.accent200,
    borderWidth: 2,
    borderColor:'black'
  },
  prevNumberStyle: {
    flex: 1,
    textAlign: "center",
    color: Colors.primary500,
    fontSize: 25,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
