import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import AppTitle from "../components/appTitle";

export default class NewAlarms extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AppTitle titleText={"Seus Alarmes"} />
                <View style={styles.lowerContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textButton}>
                                Criar Novo Alarme
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.alarmsContainer}>
                        <Text style={styles.textAlarm}>
                            Alarmes Criados:
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
        backgroundColor: "#80807a",
    },
    lowerContainer: {
        flex: 0.9,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        flex: 0.85,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#eeeeee",
        height: 60,
        width: 400,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        borderWidth: 3,
        borderColor: "#474f5c",
        marginTop: 20,
    },
    textButton: {
        fontSize: 20,
        fontFamily: "kanit",
    },
    alarmsContainer: {
        flex: 5,
        backgroundColor:"#9e9e9e",
        borderTopWidth: 5,
        borderBottomWidth: 5,
        height: 200,
        width: 480,
        borderColor: "#000000",
        marginBottom: 10
    },
    textAlarm: {
        fontSize: 25,
        fontFamily: "kanit",
        margin:10,
    },
})