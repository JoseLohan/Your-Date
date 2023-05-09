import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default class BackButton extends React.Component {
    // constructor(props) {
    //     super(props)
        // this.state = {
        //     screen: this.props.route.params.screen
        // }
    // }
    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => this.props.navigation.goBack()}
                >
                <Text style={styles.buttonText}>
                    Voltar
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
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
});