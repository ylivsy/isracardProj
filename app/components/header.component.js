import React from 'react';
import {Text, View} from 'react-native';

/*
* HeaderComponent is reusable Component- represent Welcome Header.
* @parameters- size and headerText
* */

const HeaderComponent = (props) => {
    return (
        <View>
            <Text style={{fontSize: props.size}}>Welcome {props.headerText}!</Text>
        </View>
    );
}

export default HeaderComponent;