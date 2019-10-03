import React, { Component } from "react";
import { View, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
 
const images = [
    'https://raw.githubusercontent.com/Jacse/react-native-app-intro-slider/master/Example/assets/1.jpg',
    'https://raw.githubusercontent.com/Jacse/react-native-app-intro-slider/master/Example/assets/2.jpeg',
    'https://raw.githubusercontent.com/Jacse/react-native-app-intro-slider/master/Example/assets/3.jpeg'
        
];

export default class SlidesPage extends Component{
  
    toProductDetailsPage = () => {
        this.props.navigation.navigate('Home');
    }


    render() {
        return (
            <View style={styles.container}>
   
                <SliderBox
                    images={images}
                    sliderBoxHeight={'100%'}
                    onCurrentImagePressed={this.toProductDetailsPage}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});