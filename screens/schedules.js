import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import AppTitle from "../components/appTitle";

export default class Schedules extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AppTitle titleText={"Seus Cronogramas"} />
                <View style={styles.lowerContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("Criar Cronograma")}>
                            <Text style={styles.textButton}>
                                Criar Novo Cronograma
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("Editar Cronograma")}>
                            <Text style={styles.textButton}>
                                Editar Cronograma Semanal
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.calendarContainer}>
                        <Text>
                            aa
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
        backgroundColor: "#9fdde3",
    },
    lowerContainer: {
        flex: 0.9,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        flex: 0.3,
        //backgroundColor: "#9fa2a6",
        marginBottom: 20,
        
    },
    button: {
        backgroundColor: "#eeeeee",
        height: 60,
        margin: 10,
        width: 400,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        borderWidth: 3,
        borderColor: "#474f5c",
    },
    textButton:{
        fontSize: 20,
        fontFamily: "kanit",
    },
    calendarContainer:{
        flex:0.65,
        backgroundColor: "#ffffff",
        height: 100,
        width: 400,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: "#474f5c",
        justifyContent: "center",
        alignItems: "center",
    },
})