/**
 * Screnn MainView display the Main screen of Iscracard Project.
 * After user logged in , screen display the user name and user logo from the account he chose.
 */


import React, { Component } from 'react';
import {View,Text,ActivityIndicator,Image ,StyleSheet,Alert, Dimensions, AsyncStorage} from 'react-native';
import {Icon, SocialIcon, Button} from 'react-native-elements';
import HeaderComponent from '../components/header.component';
import UserLogoComponent from '../components/userLogo.component';


let { height, width } = Dimensions.get("window");

export default class MainViewScreen extends Component {


    constructor(props){
        super(props);
        this.state = {
            userName:'', isLoggedIn: false, userPhoto:'http://thehack.biz/wp-content/uploads/2016/04/user_icon.png',
            isLoading: false,
        }
    }

    componentWillMount() {
        this.setState({userName:this.props.navigation.state.params.data.username})
        if (this.props.navigation.state.params.data.userLogo !== null) {
            this.setState({userPhoto: this.props.navigation.state.params.data.userLogo})
        }
        this.setState({isLoading: true})
    }

    render() {
        if (!this.state.isLoading) {
            return (
                <ActivityIndicator/>
            );

        }
        else {
            return (
                <View style={styles.ViewStyle}>

                    <HeaderComponent size={20} headerText={this.state.userName}/>

                    <UserLogoComponent url={this.state.userPhoto} style={{width:100, height:100, borderRadius :100}}/>

                </View>
            );
        }

    }
}

const styles = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ViewHeader: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fbButton: {
        width: (width/2)-15,
        height: height/15
    },
    buttonsView: {
        flexDirection:'row',
        margin:10
    }

});

