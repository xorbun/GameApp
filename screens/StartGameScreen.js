import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";

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
    <View style={styles.inputContainer}>
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
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 24,
    padding: 30,
    marginTop: 100,
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
