import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import { StyleSheet } from "react-native";
import Colors from "../constants/colors";
import { View,Image } from "react-native";
import GameText from "../components/Text";

const GameOver = ({ victoryNum,numberOfTry }) => {
 
  return (
    
    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <Title>il numero vincente {victoryNum}</Title>
      <GameText>{numberOfTry}</GameText>
     </View>
      <View style={styles.imageContainer}>
      <View>
        <Image style={styles.image} source={require('../assets/images/success.png')}/>
        <PrimaryButton>ricomincia</PrimaryButton>
      </View>
      </View>
      
    </View>
    
  );
};

export default GameOver;
const styles=StyleSheet.create({
 
  container:{
    flex:1,
    padding:26,
    margin:8,
    justifyContent:'center',
    alignItems:'center'
  },
  titleContainer:{
    margin:8
  },
  imageContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:200,
    height:200,
    borderRadius:100,
    marginBottom:10,
    borderWidth:5,
    borderColor:Colors.primary500
  }
})