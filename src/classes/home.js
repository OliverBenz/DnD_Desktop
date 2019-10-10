import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Image
} from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View>
                <Image style={styles.image} source={require('../resources/images/home_background.jpeg')} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    }
});