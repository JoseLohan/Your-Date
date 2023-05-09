import React from "react";
import { View, StyleSheet, Text } from "react-native"
import AppTitle from "../components/appTitle";

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AppTitle titleText={"Your Date"} />
                <View style={styles.lowerContainer}>
                    <View style={styles.doTodayContainer}>
                        <Text style={styles.textCases}>
                            Lista De Hoje:
                        </Text>
                    </View>
                    <View style={styles.holdaysContainer}>
                    <Text style={styles.textCases}>
                            Proximos Feriados:
                        </Text>
                    </View>
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
        flex: 0.9,
        justifyContent: "center",
        alignItems: "center",
    },
    doTodayContainer: {
        flex: 0.8,
        backgroundColor: "#f2dfe6",
        height: 80,
        width: 400,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: "#474f5c",
        margin: 20,
    },
    holdaysContainer: {
        flex: 0.55,
        backgroundColor: "#f2dfe6",
        height: 75,
        width: 400,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: "#474f5c",
        marginBottom: 20,
    },
    textCases: {
        fontSize: 25,
        fontFamily: "kanit",
        margin: 10
    },
})