import React from "react";
import { View, StyleSheet, Text } from "react-native"
import AppTitle from "../components/appTitle";

export default class Home extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <AppTitle titleText ={"Your Date"} />
                <View style = {styles.lowerContainer}>
                <Text>
                    Tela Inicial
                </Text>
                </View>           
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ff6a9b",
    },
    lowerContainer: {
        flex: 0.8,
        justifyContent: "center",
        alignItems: "center",
    }
})