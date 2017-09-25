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
 export default class Chat extends Component {
    static navigationOptions = {
        title: '',
        headerBackTitle: '返回',
        headerRight: <Button title='info'></Button>,
        headerStyle: {
            backgroundColor: 'red',
            height: 100
        },
        headerTintColor: 'white'
    };
    render() {
        let {navigate} = this.props.navigation;
        return (
            <View>
                <Button title="跳转Detail页面" onPress={() => navigate('Detail')}></Button>
            </View>
        );
    }
}