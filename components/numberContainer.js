import { Text, StyleSheet, View } from "react-native";
import Colors from "../constants/colors";
const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>{children}</Text>
    </View>
  );
};
export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent200,
    padding: 12,
    width:80,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    color: Colors.accent200,
    fontSize: 36,
    fontWeight:'bold'
  },
});
