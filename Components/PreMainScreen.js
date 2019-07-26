import React from 'react';

import firebase from 'firebase'


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
import MainScreen from './MainScreen';
import Login from './AppTabNavigator/Login';

//import Login from './AppTabNavigator/Login';


class PreMainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      loggedin:false,
      email:'',
      password:''
  
     };
 
  }
 
  componentDidMount(){
    var that = this;
  
     f.auth().onAuthStateChanged(function(user){
      if(user){
        that.setState({
          loggedin:true,
          
        })
        console.log('Logged in',user)
      }else{
        that.setState({
          loggedin:false
        })
        console.log('Logged out')

      }
    })
  }

  loginUser = async (email,password) => {
    var { email, password } = this.state;
    if(email !='' && password !=''){
      try{
        await auth.signInWithEmailAndPassword(email,
          password)
      }catch(error){
        console.log("loggin error ",error)
      }
    }else{
      //
      alert("Email or pass is missing")
    }
  }

 

signUserOut=()=>{
  f.auth.signOut()
  .then(()=>{
    console.log('LoogedOut')
  }).catch((error)=>{
    console.log(error)
  })
}
  
  registerUser=(email, password) =>{
    console.log(email, password)
    auth.createUserWithEmailAndPassword(email,password)
    .then((userObj)=>console.log('your login data is',email,password,userObj))
    .catch((error)=> console.log('error logging in', error))
  }
  


  static navigationOptions = {
  header:null
  }


  

  render() {
    {if(this.state.loggedin ==true){
  return(
   <MainScreen />

     ) } else{
       return(
     
      
          <View style={styles.containerLogin}>
    
    <TextInput
      
      onChangeText={(email) => this.setState({ email })}
     // onChangeText={(text) => this.setState({ email:text })}
      placeholder="user@mail.com"
     style={styles.input}
     placeholderTextColor='#CBCBCB'
      value={this.state.email}
    />
    <TextInput
      
      onChangeText={(password) => this.setState({password})}
      placeholder='password'
      secureTextEntry={true}
      style={styles.input}
      placeholderTextColor='#CBCBCB'
      value={this.state.pass}
    />
    
    <Button
      title={'Login'}
      style={styles.input}
      onPress={this.loginUser}
    />
    </View>   )
        }
     
       
      } 
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



//export default createAppContainer(AppTabNavigatorBottom);
export default PreMainScreen

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
