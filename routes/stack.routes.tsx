import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';


import TabRoutes from './tab.routes';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen
                 name='home'
                 component={TabRoutes}           
             />     
        </Stack.Navigator>
    )
}