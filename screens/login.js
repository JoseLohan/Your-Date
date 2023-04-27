import React from "react";
import { View, StyleSheet, Text } from "react-native"
import AppTitle from "../components/appTitle";

export default class Login extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
            <AppTitle titleText={"Log In"} />
             <View style={styles.lowerContainer}>
                 <Text>
                     Log In
                 </Text>
             </View>
         </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#80009b",
    },
    lowerContainer: {
        flex: 0.8,
        justifyContent: "center",
        alignItems: "center",
    },
})