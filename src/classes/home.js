import React, { Component } from 'react';
import { Image } from 'react-native';

import image from '../resources/images/home_background.jpeg';

export default class Home extends Component{
    componentDidMount(){
        localStorage.setItem('url', 'http://www.benz-prints.com:3004/dnd');
    }

    render(){
        return(
            <div>
                <Image style={styles.image} source={image} alt="" />
            </div>
        );
    }
}

const styles = {
    image: {
        width: '100%',
        height: '100%'
    }
}