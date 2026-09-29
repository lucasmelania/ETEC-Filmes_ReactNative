import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Detalhes from "../Telas/Detalhes/index.js";
import Home from "../Telas/Home/index.js";


export default function Rotas(){
    const Stack = createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator>
            
                <Stack.Screen component={Home} name="Home" options={{headerShown:false}}/>
                <Stack.Screen component={Detalhes} name = 'Detalhes'/>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}