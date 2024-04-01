import { View, StyleSheet,Dimensions } from "react-native";
import Colors from "../constants/colors";
const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};
export default Card;
const cardWidth= Dimensions.get('window').width
const styles = StyleSheet.create({
  inputContainer: {
    padding: cardWidth<380 ? 15:30,
    marginTop: cardWidth<380 ? 25:50,
    marginHorizontal: cardWidth<380 ? 12:24,
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
