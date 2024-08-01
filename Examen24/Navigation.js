import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Cuadros from "./Screens/Cuadro";
import Inicio from "./Screens/Inicio";

const Tab = createBottomTabNavigator()

const Navigation = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Inicio} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="home" color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name={'Clasificador'} component={Cuadros} options={{
                tabBarLabel: 'Clasificador',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name={'clipboard-list'} color={color} size={size}/>
                )
            }}/>
           
        </Tab.Navigator>
    )
}

export default Navigation