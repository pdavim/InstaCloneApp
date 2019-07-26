import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator,createStackNavigator, createAppContainer } from 'react-navigation'

import MainScreen from './Components/MainScreen'
import PreMainScreen from './Components/PreMainScreen';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
logged:false
     };

    
  }
 


  render() {
    return (
    
      <AppStackNavigator float/>
   
    );
  }

}

const AppStackNavigator = createStackNavigator({

  Main: {
    screen: PreMainScreen
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default createAppContainer(AppStackNavigator)