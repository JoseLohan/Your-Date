import React from "react";
import { View, StyleSheet, Text } from "react-native"
import AppTitle from "../components/appTitle";

export default class NewAlarms extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AppTitle titleText={"Seus Alarmes"} />
                <View style={styles.lowerContainer}>
                    <Text>
                        Alarmes Personalizados
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#80807a",
    },
    lowerContainer: {
        flex: 0.8,
        justifyContent: "center",
        alignItems: "center",
    },
})