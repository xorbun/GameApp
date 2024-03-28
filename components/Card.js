import { View, StyleSheet } from "react-native";
import Colors from "../constants/colors";
const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};
export default Card;
const styles = StyleSheet.create({
  inputContainer: {
    padding: 30,
    marginTop: 50,
    marginHorizontal: 24,
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
});
