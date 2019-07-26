import React from 'react';

import { StyleSheet, View, Platform, TextInput, Button, Text} from 'react-native';
import {
        createAppContainer,
        createMaterialTopTabNavigator} from 'react-navigation'


import AddMediaTab from './AppTabNavigator/AddMediaTab'
import HomeTab from './AppTabNavigator/HomeTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'
import SearchTab from './AppTabNavigator/SearchTab'
import {f, auth,storage,database} from '../config/config'

//import Login from './AppTabNavigator/Login';


class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      loggedin:false,
      email:'',
      pass:''
     };
  
  }
 
  

  
  componentDidMount(){
   
  }


  static navigationOptions = {
  header:null
  }


  render() {
   
 return(
 
    <BottomContainer/> 
   
  
  )
}
}


const AppTabNavigatorBottom = createMaterialTopTabNavigator({
  
  HomeTab:{
    screen:HomeTab
  },
  SearchTab:{
    screen:SearchTab
  },
  AddMediaTab:{
    screen:AddMediaTab
  },
  LikesTab:{
    screen:LikesTab
  },
  ProfileTab:{
    screen:ProfileTab
  }
},{

  animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
  tabBarOptions: {
      style: {
          ...Platform.select({
              android: {
                  backgroundColor: 'white'
              }, 
              ios: {
                backgroundColor: 'white'
            }
          }),
         
      },
      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
      showLabel: false,
      showIcon: true,
      tabStyle:{marginBottom:15, paddingTop:10,flex:1}
  
}})


const BottomContainer = createAppContainer(AppTabNavigatorBottom)

//export default createAppContainer(AppTabNavigatorBottom);
export default MainScreen

const styles = StyleSheet.create({
  containerLogin:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F2B3C',
    height:'100%'
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
    color:'white',
    
  },
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#BBBBBB",
  }
});
