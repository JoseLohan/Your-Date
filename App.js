import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./navigation/DrawerNavigator"
import * as Font from 'expo-font';
import { Kanit_300Light } from '@expo-google-fonts/kanit';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      fontLoaded:false,

    }
  }
  async componentDidMount(){
    await Font.loadAsync({
      kanit:Kanit_300Light
    })
    this.setState({fontLoaded:true})
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      );
    } else {
      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
          <Text>
            Carregando...
          </Text>
        </View>
      )
    }
  }
}

