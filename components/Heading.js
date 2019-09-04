//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Heading = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text} >Photos</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor:'#ddd',
        borderBottomWidth:2
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        margin:13
    }
});

//make this component available to the app
export default Heading;
