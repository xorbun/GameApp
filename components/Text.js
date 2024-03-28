import { Text,StyleSheet } from "react-native"
import Colors from "../constants/colors"
const GameText=({children})=>{
    return(
    <Text style={styles.textColor}>{children}</Text>
    )
}
export default GameText

const styles=StyleSheet.create({
    textColor:{
        color:Colors.accent200,
        fontWeight:'bold',
        fontSize:22,
        padding:8,
        
    }
})