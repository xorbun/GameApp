import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import {
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Colors from "../constants/colors";
import { View, Image } from "react-native";
import GameText from "../components/Text";

const GameOver = ({ victoryNum, numberOfTry, newGame }) => {
  const { width, heigth } = useWindowDimensions();
  let imagesize = 300;
  if (width > 500) {
    imagesize = 80;
  }
  if (heigth < 340) {
    imagesize = 150;
  }
  const imageStyle = {
    width: imagesize,
    height: imagesize,
    borderRadius: imagesize / 2,
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Title>il numero vincente {victoryNum}</Title>
        </View>
        <View style={[styles.imageContainer]}>
          <View style={styles.titleContainer}>
            <Image
              style={[styles.image, imageStyle]}
              source={require("../assets/images/success.png")}
            />
            <GameText style={styles.message}>
              numero di tentativi:{numberOfTry}
            </GameText>
            <PrimaryButton onPress={newGame}>ricomincia</PrimaryButton>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default GameOver;
const deviceWidth = Dimensions.get("window").width;
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
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: 200,
    marginBottom: deviceWidth < 380 ? 5 : 10,
    borderWidth: 5,
    borderColor: Colors.primary500,
  },
  message: {
    color: Colors.primary500,
    fontSize: deviceWidth < 380 ? 12.5 : 25,
  },
});
