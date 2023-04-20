import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Login from "../screens/login";
import NewUser from "../screens/newUser";

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
    render() {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name="Tela Inicial" component={StackNavigator} />
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Novo Usuario" component={NewUser} />
            </Drawer.Navigator>
        );
    };
};