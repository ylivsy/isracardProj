/**
 * Screen LoginSCreen display the login screen of Iscracard Project.
 * the user can choose to login by Google account or Facebook account
 */

import React, { Component } from 'react';
import {View,Text,ActivityIndicator,Image ,StyleSheet,Alert, Dimensions, AsyncStorage} from 'react-native';
import {Icon, SocialIcon, Button} from 'react-native-elements';
import HeaderComponent from '../components/header.component';
import UserLogoComponent from '../components/userLogo.component';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
var { FBLogin, FBLoginManager, FBLoginView} = require('react-native-facebook-login');


let { height, width } = Dimensions.get("window");

export default class LoginScreen extends Component {


    constructor(props){
        super(props);
        this.state = {
            userName: 'Stranger', isLoggedIn: false, userPhoto:'http://thehack.biz/wp-content/uploads/2016/04/user_icon.png',
            isLoading: false,
        }
    }
    // function get parameter e  with all user data from Facebook account, and update component
    onLogFB =(e)=>{
        const data = {
            'username': e.profile.first_name +' '+e.profile.last_name,
            'userLogo': e.profile.picture.data.url
        };
        this.props.navigation.navigate('main',{data});
    }

    // function get parameter e with all user data from Google account, and update component
    onLogGoogle =()=> {
        GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => { // check if the device support Google Play Services.
            GoogleSignin.configure({
                //forceConsentPrompt: true
            })
                .then(()=>{
                    GoogleSignin.signIn()
                        .then((user) => {
                        if (user.name !== null) {
                            const data = {
                                'username': user.name,
                                'userLogo': user.photo
                            };
                            this.props.navigation.navigate('main', {data});
                        }

                        })
                        .catch((err) => {
                            console.log('error ', err);
                        })
                        .done();

                });
        })
            .catch((err) => {
                Alert.alert("Play services error",'please check Google play configurations.');
            })
    }

    render() {
            return (
                <View style={styles.ViewStyle}>
                    <View style={styles.ViewHeader}>

                        <HeaderComponent size={20} headerText={this.state.userName}/>

                        <UserLogoComponent url={this.state.userPhoto} style={{width:100, height:100, borderRadius :110}}/>

                         <View style={styles.ViewHeader}>
                            <Text>please log in to continue</Text>
                            <Text>to the awesomeness</Text>
                        </View>

                    </View>


                     <View style={styles.buttonsView}>
                        <FBLogin
                            buttonView={
                                <SocialIcon
                                    title='Login With Facebook'
                                    button
                                    type='facebook'
                                    style={styles.fbButton}
                                />
                            }
                            ref={(fbLogin) => { this.fbLogin = fbLogin }}
                            //loginBehavior={FBLoginManager.LoginBehaviors.Native}
                            permissions={["email","user_friends"]}
                            onLogin= {(e)=>{ this.onLogFB(e); }}
                            //onLoginFound={function(e){console.log(e)}}
                            //onLoginNotFound={function(e){console.log(e)}}
                            //onLogout={function(e){console.log(e)}}
                            //onCancel={function(e){console.log(e)}}
                            onPermissionsMissing={function(e){console.log(e)}}
                        />
                        <SocialIcon
                            onPress={()=>{this.onLogGoogle();}}
                            title='Or with Google'
                            button
                            type='google-plus-official'
                            style={styles.fbButton}
                        />
                    </View>
                </View>
            );
        }
}

const styles = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    ViewHeader: {
        flex: 0.5,
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
    },


});

