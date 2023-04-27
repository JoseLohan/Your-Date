import React from "react";
import { View, StyleSheet, Text } from "react-native"
import AppTitle from "../components/appTitle";

export default class EditSchedule extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
            <AppTitle titleText ={"Cronogramas Criados"} />
            <View style = {styles.lowerContainer}>
            <Text>
                Editar Cronograma
            </Text>
            </View>           
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#9fdde3",
    },
    lowerContainer: {
        flex: 0.8,
        justifyContent: "center",
        alignItems: "center",
    },
})