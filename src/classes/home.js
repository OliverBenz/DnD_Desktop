import React, { Component } from 'react';

export default class Home extends Component{
    render(){
        return(
            <div>
                <img style={styles.image} source={require('../resources/images/home_background.jpeg')} alt="" />
            </div>
        );
    }
}

const styles = {
    image: {}
}