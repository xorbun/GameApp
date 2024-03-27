import { Text,StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Title=({children})=>{
    return(
<Text style={styles.textStyle}>{children}</Text>
    )
}
export default Title;

const styles=StyleSheet.create({
    textStyle: {
        color: 'white' ,
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "center",
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
      },
})