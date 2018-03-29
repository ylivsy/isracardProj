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
                                style={{width: width/1.5, height: height/11,marginLeft:width/7}}
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
                                style={{width: width/1.5, height: height/11}}
                                source={require('../assets/isracard.png')}
                            />
                        </View>
                }
            },

        },
    );
};