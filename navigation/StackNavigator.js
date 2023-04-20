import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import CreateSchedule from "../screens/createSchedule";
import EditSchedule from "../screens/editSchedule";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={TabNavigator} />
            <Stack.Screen name="Editar Cronograma" component={EditSchedule} />
            <Stack.Screen name="Criar Cronograma" component={CreateSchedule} />
        </Stack.Navigator>
    );
};

export default StackNavigator