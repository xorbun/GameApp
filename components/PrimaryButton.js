import { View, Text, StyleSheet, Pressable } from "react-native";

const PrimaryButton = (props) => {
  const PressHandler = () => {};
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={(feedback) =>
          feedback.pressed
            ? [styles.buttonInnerContainer, styles.pressedButton]
            : styles.buttonInnerContainer
        }
        onPress={PressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
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
    backgroundColor: "#72063c",
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
