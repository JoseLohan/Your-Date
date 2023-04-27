import React from "react";
import { View, StyleSheet, Text } from "react-native"
import AppTitle from "../components/appTitle";

export default class NewUser extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
            <AppTitle titleText={"Cadastro"} />
             <View style={styles.lowerContainer}>
                 <Text>
                     Cadastro
                 </Text>
             </View>
         </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8000ff",
    },
    lowerContainer: {
        flex: 0.8,
        justifyContent: "center",
        alignItems: "center",
    },
})