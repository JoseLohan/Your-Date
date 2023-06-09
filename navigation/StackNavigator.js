import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import CreateSchedule from "../screens/createSchedule";
import EditSchedule from "../screens/editSchedule";
import Schedules from "../screens/schedules";
import BackButton from "../components/backButton";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={TabNavigator} />
            <Stack.Screen name="Editar Cronograma" component={EditSchedule} />
            <Stack.Screen name="Criar Cronograma" component={CreateSchedule} />
            <Stack.Screen name="Cronogramas" component={Schedules} />
            <Stack.Screen name="Botao Voltar" component={BackButton}/>
        </Stack.Navigator>
    );
};

export default StackNavigator