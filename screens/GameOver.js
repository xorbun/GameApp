import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import { StyleSheet } from "react-native";
import Colors from "../constants/colors";
import { View } from "react-native";

const GameOver = ({ victoryNum }) => {
 
  return (
    
    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <Title>il numero vincente è {victoryNum}</Title>
      </View>
      <PrimaryButton>ricomincia</PrimaryButton>
    </View>
    
  );
};

export default GameOver;
const styles=StyleSheet.create({
 
  container:{
    flex:0.6,
    padding:26,
    margin:8,
    justifyContent:'center',
    alignItems:'center'
  },
  titleContainer:{
    margin:8
  }
})