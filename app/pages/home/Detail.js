/**
 * Created by cy on 2017/9/12.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
export default class Detail extends Component {
    static navigationOptions = {
        title: 'Detail',
        headerRight: <Button title='detail'></Button>,
        headerStyle: {
            backgroundColor: 'blue',
            height: 80
        },
        headerTintColor: 'white',
        headerBackTitle: '返回'
    };
    render() {
        return (
            <View>
                <Text>Detail-screen</Text>
            </View>
        );
    }
}