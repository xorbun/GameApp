import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/Title";
import GameText from "../components/Text";
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
    <View style={styles.inputContainer}>
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
      
    </View>
    </View>
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer:{
      alignItems:'center',
      marginTop:50,
      
  },
  inputContainer: {
    marginHorizontal: 24,
    padding: 30,
    marginTop: 50,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, //ombre solo su android
    //ombre su ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
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
