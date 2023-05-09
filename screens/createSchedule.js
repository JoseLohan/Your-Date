import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import AppTitle from "../components/appTitle";

export default class CreateSchedule extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AppTitle titleText={"Crie Um Cronograma!"} />
                <View style={styles.lowerContainer}>
                    <Text>
                        Criar Cronograma
                    </Text>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Text style={styles.buttonText}>
                            Voltar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0050e3",
    },
    lowerContainer: {
        flex: 0.8,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        flex: 0.1,
        backgroundColor: "#eeeeee",
        height: 60,
        margin: 10,
        width: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#474f5c",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 20,
        fontFamily: "kanit",
    },
})