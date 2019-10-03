import React  from "react";
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from "react-native";


class ProductsPage extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params;
        return { headerTitle: title }
    };

    toProductDetailsPage = (productDetails) => {
        this.props.navigation.navigate('Product', {
            productDetails: productDetails
        })
    }
    
    render() {
        const { products } = this.props.navigation.state.params;
        console.log(products)
        return (
            <View style={styles.container}>
                <FlatList
                    data={products}
                    keyExtractor={item => item.id}
                    renderItem={
                        (itemData) => {
                            return (
                                <TouchableOpacity
                                    style={styles.itemStyle}
                                    onPress={() => this.toProductDetailsPage(itemData.item)} >
                                    <Image style={styles.image} source={{ uri: itemData.item.product_img }} />
                                    <View style={styles.textContainer}>
                                        <Text style={styles.text}>  {itemData.item.name} </Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    }
                />
            </View>
        )
    }
}

export default ProductsPage;  

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    itemStyle: {
        width: '100%',
        height: 200,
        flexDirection: 'row',
        margin: 5
    },
    image: {
        width: '100%',
        height: 200,
        position: 'absolute'
    },
    textContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignSelf: 'flex-end'
    },
    text: {
        color: 'white',
        fontSize: 20,
        margin: 6
    }
})