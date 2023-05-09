import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/login';
import NewUser from './screens/newUser';

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./navigation/DrawerNavigator"
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import * as Font from 'expo-font';
import { Kanit_300Light } from '@expo-google-fonts/kanit';

import firebase from "firebase";
import { firebaseConfig } from "./config";
import { Drawer } from 'react-native-paper';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

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
          <AppNavigator/>
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

const SwitchNavigator = createSwitchNavigator ({
  Login:Login,
  NewUser:NewUser,
  dashboard:DrawerNavigator
})
const AppNavigator = createAppContainer (SwitchNavigator)