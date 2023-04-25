import React from "react";
import { View, StyleSheet, Text } from "react-native"

export default class AppTitle extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.titleText}>
                   {this.props.titleText}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 5
    },
    titleText: {
        fontSize: 50
    }
})