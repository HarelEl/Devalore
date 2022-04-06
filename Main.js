import React, { useState } from 'react'
import { View, Image, StyleSheet, TouchableOpacity, Text, Alert, Button, Linking, TextInput } from 'react-native'
import { List } from 'react-native-paper';
import MyComponent from './MyComponent';
import Bar from './Bar'

const steps = ['1', '2', '3'];
class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            Name: null,
            Age: null,
            PetName: null,
            PetType: null,
            Agreement: false,
            expanded: true
        }
    };
    handlePress = () => {this.state.expanded=!this.state.expanded;}

    render() {
        return (
            <View>
                <Bar></Bar>
                <MyComponent></MyComponent>
            </View>
        );
    }
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,
        alignItems: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonContainer: {
        width: 250,
        height: 80,
        // justifyContent: 'center',
        // paddingBottom: 20 ,
        // borderRadius: 10
    },
    ImageContainer: {
        width: 200,
        height: 80,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default Main;