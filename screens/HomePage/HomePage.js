import React  from "react";
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from "react-native";


class HomePage extends React.Component {
    state = {
        categories: []
    }

    

    toProductsPage = (products, title) => {
        this.props.navigation.navigate('Products', {
            products: products,
            title: title
        })
    }
    
    componentDidMount() {
        return fetch('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
            .catch(() => {
                alert("Something went wroing");
            })
            .then(res => res.json())
            .then(parsedRes => {
                console.log(parsedRes);
                this.setState({categories: parsedRes})
            })
    }
    

    render() {
        return (
            <View style={styles.container}>
                
                <FlatList
                    data={this.state.categories}
                    keyExtractor={item => item.id}
                    renderItem={
                        (itemData) => {
                            return (
                                <TouchableOpacity 
                                    style={styles.itemStyle} 
                                    onPress={() => this.toProductsPage(itemData.item.products, itemData.item.name)} >
                                    <Image style={styles.image} source={{ uri: itemData.item.category_img}} /> 
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

export default HomePage;

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