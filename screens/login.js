import React from "react";
import { View, StyleSheet, Text } from "react-native"

export default class Login extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>
                    LogIn
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "RGB(128,0,155)",
        alignItems: "center",
        justifyContent: "center"
    },
})