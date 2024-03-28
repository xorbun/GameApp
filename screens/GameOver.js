import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import { StyleSheet } from "react-native";
import Colors from "../constants/colors";
import { View, Image } from "react-native";
import GameText from "../components/Text";

const GameOver = ({ victoryNum, numberOfTry, newGame }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title>il numero vincente {victoryNum}</Title>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.titleContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
          <GameText style={styles.message}>
            numero di tentativi: {numberOfTry}
          </GameText>
          <PrimaryButton onPress={newGame}>ricomincia</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default GameOver;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    margin: 8,
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 400,
    height: 400,
    borderRadius: 200,
    marginBottom: 10,
    borderWidth: 5,
    borderColor: Colors.primary500,
  },
  message: {
    color: Colors.primary500,
    fontSize: 28,
  },
});
