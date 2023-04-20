import React from "react";
import { Text, View, StyleSheet } from "react-native"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "react-native-vector-icons"
import { RFValue } from "react-native-responsive-fontsize";
import Home from "../screens/home";
import Schedules from "../screens/schedules";
import NewAlarms from "../screens/alarms";


const Tab = createMaterialBottomTabNavigator()

export default class TabNavigator extends React.Component {
    render() {
        return (
            <Tab.Navigator
                labeled={false}
                barStyle={styles.bottomTabStyle}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName
                        if (route.name == "Inicio") {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (route.name == "Alarmes") {
                            iconName = focused ? 'alarm' : 'alarm-outline'
                        } else if (route.name == "Cronogramas") {
                            iconName = focused ? 'calendar' : 'calendar-outline'
                        }
                        return (
                            <Ionicons name={iconName} size={RFValue(25)} color={color} style={styles.icons} />

                        )
                    }
                })}
                activeColor={"#ee8249"}
                inactiveColor={"grey"}
            >
                <Tab.Screen name="Inicio" component={Home}/>
                <Tab.Screen name="Alarmes" component={NewAlarms}/>
                <Tab.Screen name="Cronogramas" component={Schedules}/>
            </Tab.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "#2f345d",
        height: "8%",
        borderTopLeftRadius: RFValue(30),
        borderTopRightRadius: RFValue(30),
        overflow: "hidden",
        position: "absolute"
    },
    icons: {
        width: RFValue(30),
        height: RFValue(30)
    }
});
