import { View, Text, StyleSheet } from "react-native";

const GameScreens = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Il numero scelto è</Text>
    </View>
  );
};
export default GameScreens;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    fontSize: 35,
  },
});
