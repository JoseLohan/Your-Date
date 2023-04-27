import React from "react";
import { View, StyleSheet, Text } from "react-native"
import AppTitle from "../components/appTitle";

export default class CreateSchedule extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <AppTitle titleText ={"Crie Um Cronograma!"} />
                <View style = {styles.lowerContainer}>
                <Text>
                    Criar Cronograma
                </Text>
                </View>           
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0050e3",
    },
    lowerContainer: {
        flex: 0.8,
        justifyContent: "center",
        alignItems: "center",
    },
})