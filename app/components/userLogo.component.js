import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

/*
* UserLogoComponent is reusable Component- represent circle user logo.
* @parameters- 'size' of logo in the circle and 'url' of the image.
* */
const UserLogoComponent = (props) => {
    return (
        <View style={styles.circle}>
            <Image
                style={props.style}
                source={{uri: props.url}}
            />
        </View>
    );
}

export default UserLogoComponent;


const styles = StyleSheet.create({
    circle : {
        marginTop: 30,
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        backgroundColor:'grey',
        borderRadius:100,
    }
})