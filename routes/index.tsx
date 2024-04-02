import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome';
import SignIn from '../screens/SignIn';
import DrawerRoutes from './drawer.routes';
 
const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Welcome'
                    component={Welcome}           
                />

                <Stack.Screen
                    name='SignIn'
                    component={SignIn}           
                />         
            </Stack.Navigator>
            <DrawerRoutes />
        </NavigationContainer>
    )
}
