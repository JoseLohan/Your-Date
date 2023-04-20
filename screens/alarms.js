import React from "react";
import { View, StyleSheet, Text } from "react-native"

export default class NewAlarms extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>
                   Alarmes Personalizados
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "RGB(128,128,122)",
        alignItems: "center",
        justifyContent: "center"
    },
})