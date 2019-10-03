import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';


import SlidesPage from './screens/SlidePage/SlidesPage';
import HomePage from './screens/HomePage/HomePage';
import ProductsPage from './screens/ProductsPage/ProductsPage';
import ProductDetailsPage from './screens/ProductDetailsPage/ProductDetailsPage';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Slides: {
    screen: SlidesPage,
    navigationOptions: ({ navigation }) => {
      return {
        header: null
      }
    }
  },
  Home: {
    screen: HomePage,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Categories'
      }
    }
  },
  Products: {
    screen: ProductsPage
  },
  Product: {
    screen: ProductDetailsPage,
  },
  
  
});


const AppContainer = createAppContainer(AppStackNavigator);