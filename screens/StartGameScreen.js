import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/Title";
import GameText from "../components/Text";
import Card from "../components/Card";

const StartGameScreen = ({onPicked}) => {
  const [inputNumber, setInputNumber] = useState();

  const numberInputHandler = (text) => {
    setInputNumber(text);
  };
  const resetHandler = () => {
    setInputNumber("");
  };

  const confirmHandler = () => {
    const number = parseInt(inputNumber);
    if (isNaN(number) || number < 0 || number > 99) {
      Alert.alert("numero non accettato", "inserisci un numero valido", [
        { text: "ok", style: "destructive", onPress: resetHandler },
      ]);
      return;
    } else {
      {
        onPicked(number);
      }
    }
  };

  return (
    <View>
      <View style={styles.rootContainer}>
    <Title>Indovina il numero!</Title>
    </View>
    <Card>
      <GameText>scegli un numero</GameText>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={inputNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetHandler}>reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmHandler}>conferma</PrimaryButton>
        </View>
      </View>
      
    </Card>
    </View>
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer:{
      alignItems:'center',
      marginTop:50,
  },
  biggerText:{
    fontSize:50,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent200,
    borderBottomWidth: 2,
    color: Colors.accent200,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
