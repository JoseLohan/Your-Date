import React from "react";
import { View, StyleSheet, Text } from "react-native"

export default class NewUser extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>
                    Cadastro
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "RGB(128,0,255)",
        alignItems: "center",
        justifyContent: "center"
    },
})