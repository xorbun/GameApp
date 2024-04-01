import { Text, StyleSheet, View, Dimensions } from "react-native";
import Colors from "../constants/colors";
const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>{children}</Text>
    </View>
  );
};
export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent200,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    width: deviceWidth < 380 ? 100 : 100,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    color: Colors.accent200,
    fontSize: deviceWidth < 380 ? 18 : 36,
    fontWeight: "bold",
  },
});
