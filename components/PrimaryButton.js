import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/colors";
const PrimaryButton = ({onPress,children}) => {
  
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={(feedback) =>
          feedback.pressed
            ? [styles.buttonInnerContainer, styles.pressedButton]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor:Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressedButton: {
    opacity: 0.75,
  },
});
