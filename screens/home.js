import React from "react";
import { View, StyleSheet, Text } from "react-native"

export default class Home extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>
                    Tela Inicial
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "RGB(255,106,155)",
        alignItems: "center",
        justifyContent: "center"
    },
})