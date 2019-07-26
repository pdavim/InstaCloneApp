// TODO arrange style
// STYLEME
// FIXME camera trigger 

import React from 'react';
import Camara from './TabComponents/Camara'

import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {Icon, Container, Content, Header, Left, Body, Right, Button} from 'native-base'




class AddMediaTab extends React.Component {

  static navigationOptions = {
    tabBarVisible:false,
    tabBarIcon: ({tintColor}) => (
     <Icon name="ios-add-circle" style={{color: tintColor}} />
     )
  }

  getScreenSize = () => {  
    const screenWidth =  Math.round(Dimensions.get('window').width);  
    const screenHeight = Math.round(Dimensions.get('window').height);  
    this.setState({ screenWidth: screenWidth, screenHeight: screenHeight })  
    console.log("Height window",screenHeight);
    console.log("Width window",screenWidth);
    }

  render() {
    return (
    <View style={styles.container}>
   
   <Camara style={styles.cameraStyle}/>
    
   
    </View>
    )
  }

}

export default AddMediaTab;

const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection: 'column',
      //height:Dimensions.get('window').height,
     // alignItems: 'center',
     // justifyContent:'center',
      backgroundColor: "#F5F5F5",

    },

    cameraStyle:{
     flex:1,
      height:Dimensions.get('window').height,
      flexDirection:"row",
      
    

    }
})