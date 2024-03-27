import { createStackNavigator } from "@react-navigation/stack"
import GameScreens from "../screens/GameScreen";
import StartGameScreen from "../screens/StartGameScreen";

const Stack=createStackNavigator();

const MainNavigator=()=>{

    return(
        <Stack.Navigator>
            <Stack.Screen name="StartGameScreen" component={StartGameScreen}/>
            <Stack.Screen name="GameScreen" component={GameScreens}/>
        </Stack.Navigator>
    )
}
export default MainNavigator