import React  from "react";
import { View, Text, Image, StyleSheet } from "react-native";


class ProductDetailsPage extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { productDetails } = navigation.state.params;
        return { headerTitle: productDetails.name }
    };
    
    render() {
        const { productDetails } = this.props.navigation.state.params;
       
        return (
            <View style={styles.itemStyle}>
                <Image style={styles.image} source={{ uri: productDetails.product_img }} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Weight : {productDetails.weight} </Text>
                    <Text style={styles.text}>Price : {productDetails.price} </Text>
                </View>
            </View>
        )
    }
}

export default ProductDetailsPage;  

const styles = StyleSheet.create({
    itemStyle: {
        margin: 10
    },
    image: {
        width: '100%',
        height: 300
    },
    textContainer: {
        height: 200,
         
    },
    text: {
        color: '#444',
        fontSize: 17,
        margin: 6
    }
})