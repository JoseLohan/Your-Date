import React from "react";
import { View, StyleSheet, Text } from "react-native"

export default class CreateSchedule extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>
                    Criar Cronograma
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "RGB(0,80,227)",
        alignItems: "center",
        justifyContent: "center"
    },
})