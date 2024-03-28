import { Text,StyleSheet } from "react-native"
import Colors from "../constants/colors"
const GameText=({children,style})=>{
    return(
    <Text style={[styles.textColor,style]}>{children}</Text>
    )
}
export default GameText

const styles=StyleSheet.create({
    textColor:{
        color:Colors.accent200,
        fontFamily: "open-sans-bold",
        fontSize:22,
        padding:8,
        
    }
})