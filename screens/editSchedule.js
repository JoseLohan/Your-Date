import React from "react";
import { View, StyleSheet, Text } from "react-native"

export default class EditSchedule extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>
                   Editar Cronograma
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "RGB(159,221,227)",
        alignItems: "center",
        justifyContent: "center"
    },
})