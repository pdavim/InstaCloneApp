import React from 'react';

import { StyleSheet, Text, View, Platform } from 'react-native';
import {TabNavigator,
        createBottomTabNavigator,
        BottomTabBar,
        createAppContainer,
        createMaterialTopTabNavigator} from 'react-navigation'

import {Icon} from 'native-base'

import AddMediaTab from './AppTabNavigator/AddMediaTab'
import HomeTab from './AppTabNavigator/HomeTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'
import SearchTab from './AppTabNavigator/SearchTab'


class MainScreen extends React.Component {

  static navigationOptions = {
  header:null
  }
  

  render() {
    return (
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
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#BBBBBB",
  }
});
