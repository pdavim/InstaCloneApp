import React from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Text } from 'react-native';
import {f, auth,storage,database} from '../../config/config'



class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      loggedin:false,
      
     };
  
    // this.registerUser('teste@test.com', 'fakepassword')
     var that = this;
     this.loginUser = this.loginUser.bind(this)
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
 

  loginUser = async(email,pass)=>{
    if(email !='' && pass !=''){
      //
      try{
        let user = await auth.signInWithEmailAndPassword(email,pass)
        console.log('user',user)
      }catch(error){
        console.log(error)
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


  render() {
    return (
        <View style={styles.container}>
        {this.state.loggedin == !false ? (
          <View>
          <Text>LoggedIn....</Text>
          </View>
        ) :(
          <View style={styles.containerLogin}>
    
    <TextInput
      value={this.state.email}
      onChangeText={(email) => this.setState({ email })}
      placeholder={'Username'}
      style={styles.input}
      placeholderTextColor='#CBCBCB'
      value={this.state.email}
    />
    <TextInput
      value={this.state.pass}
      onChangeText={(pass) => this.setState({ pass})}
      placeholder={'Password'}
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
      </View>
    );
  }

 
}

export default Login;


const styles = StyleSheet.create({
    container: {
      //flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      height:'100%'
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
  });