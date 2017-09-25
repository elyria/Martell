/**
 * Created by cy on 2017/9/25.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomePage from './pages/home/HomePage';
import Chat from './pages/home/Chat';
import Detail from './pages/home/Detail';

const Martell = StackNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: ({navigation}) => StackOptions({navigation})
    },
    Chat: {
        screen: Chat,
        navigationOptions: ({navigation}) => StackOptions({navigation})
    },
    Detail: {
        screen: Detail
    }
}, {
    headerStyle: {
        backgroundColor: 'blue',
        color: 'white'
    }
});

const StackOptions = ({navigation}) => {

    let {state,goBack} = navigation;

    // 用来判断是否隐藏或显示header
    const visible= state.params ? state.params.isVisible : false;
    let header;
    if (visible === true){
        header = null;
    }
    const headerStyle = {backgroundColor:'#4ECBFC'};
    const headerTitle = state.params ? state.params.title : 'Welcome';
    const headerTitleStyle = {fontSize:20,color:'white',fontWeight:'500'};
    const headerBackTitle = '返回';

    return {headerStyle,headerTitle,headerTitleStyle,headerBackTitle, header}
};


AppRegistry.registerComponent('Martell', () => Martell);
