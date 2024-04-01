import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Title = ({ children,style }) => {
  return <Text style={[styles.textStyle,style]}>{children}</Text>;
};
export default Title;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "open-sans-bold",
    color: "white",
    fontSize: 25,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    maxWidth:'80%',
  },
});
