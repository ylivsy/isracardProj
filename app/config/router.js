import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import {StackNavigator,TabNavigator,DrawerNavigator} from 'react-navigation'
import MainViewScreen from '../screens/MainView.Screen'
import LoginScreen from '../screens/LogIn.Screen'
let { height, width } = Dimensions.get("window");


export default createRootNavigator = () => {
    return StackNavigator(
        {
            logIn : {
                screen:  LoginScreen,
                navigationOptions : {
                    headerTitle:
                        <View>
                            <Image
                                style={{width: width/2.2, height: height/17,marginLeft:width/3.7}}
                                source={require('../assets/isracard.png')}
                            />
                        </View>
                }
            },
            main : {
                screen:  MainViewScreen,
                navigationOptions : {
                    headerTitle:
                        <View>
                            <Image
                                style={{width: width/2.2, height: height/17,marginLeft:width/8}}
                                source={require('../assets/isracard.png')}
                            />
                        </View>
                }
            },

        },
    );
};