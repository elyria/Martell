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

export default class HomePage extends Component {

    static navigationOptions = {
        title: 'Welcome',
    };

    render() {

        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Button
                    style={styles.instructions}
                    title="跳转Chat页面"
                    onPress={() => {
                        navigate('Chat', {title: 'Chat',  isVisible: false})
                    }}
                >
                </Button>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});