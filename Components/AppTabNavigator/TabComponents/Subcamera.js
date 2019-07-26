//TODO connect to firestore

import React from "react";
import { StyleSheet, Text, View, Switch ,TouchableOpacity, Dimensions} from "react-native";
import * as Permissions from 'expo-permissions'
import { Camera } from 'expo-camera'
import {Icon,Card, Container, Content, Header, Left, Body, Right, Button,Footer,FooterTab, CardItem} from 'native-base'

import { BarCodeScanner } from 'expo-barcode-scanner';


export default class Camara extends React.Component {
  constructor() {  
    super();  
    this.state = { 
      screenWidth: "", 
      screenHeight: "", 
      switchValue: false ,
      hasCameraPermission: null, //Permission value
      type: Camera.Constants.Type.back,
      iconCamera: "ios-reverse-camera" //specifying app start with back camera }  
    }
  }

   getScreenSize = () => {  
    const screenWidth =  Math.round(Dimensions.get('window').width);  
    const screenHeight = Math.round(Dimensions.get('window').height);  
    this.setState({ screenWidth: screenWidth, screenHeight: screenHeight })  
    console.log("Height window",screenHeight);
    console.log("Width window",screenWidth);
    }
    
  

  async componentWillMount() {
    //Getting Permission result from app details.
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    this.getScreenSize();
 
  }

  cameraChange = () => {
    this.setState({
      iconCamera: this.state.type === Camera.Constants.Type.back ? "ios-camera" : "ios-reverse-camera" ,
      type:
        this.state.type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
    });
  };


  snap = async () => {
    console.log("photo");
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      console.log("photo", photo);
    }
  };



  render() {
    screenHeight = this.screenHeight
    const { hasCameraPermission } = this.state;
  if (hasCameraPermission === null) {
    return <View  />;
  } else if (hasCameraPermission === false) {
    return (
      <View style={{flex: 1}}>
        <Text>No access to camera</Text>
      </View>
    );
  } else {
    return (
      <Container 
      style={{
        //flex: 1,
        height:Dimensions.get('window').height,
        flexDirection: 'column',
       // justifyContent: 'flex-end',
      }}
      >
         <Header >
           <Left>
           
             </Left>
             <Body><Text>Camera</Text></Body>
             <Right>
             <TouchableOpacity  onPress={this.cameraChange} >
                  <Text style={{ fontSize: 18, marginBottom: 10, color: "black" }} >
                   <Icon name={this.state.iconCamera}/>
                  </Text>
                </TouchableOpacity>

             </Right>
         </Header>
      <Content >
       


            <Camera type={this.state.type}  style={{height:600}}
            
            barCodeScannerSettings={{
              barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
            }}
            
            >
           
            </Camera>
      
  
      </Content>
      <Footer>
          <FooterTab>
            <Button>
            <TouchableOpacity  onPress={this.snap} >
                  <Icon name="ios-play-circle" style={{color:"black", fontSize: 34, marginBottom: 10, }}/>
                </TouchableOpacity>
            </Button>
          </FooterTab>
        </Footer>
</Container>
    
    );
  }
}}

const styles = StyleSheet.create({
  container:{
    //flex:1,
    //height:'100%',
    //salignItems:'center'
  },
  cameraview:{
   // flex:1,
    //height:'100%',
    //width:'100%',
    //backgroundColor:'grey',
    //alignItems:'center',
    

  },

  camera:{
    flex:1,
  },
  camerabuttonview:{
   // flex:1
  },
  cameraButtons:{
    //flex:1,
  },

  switchview:{
   // flex:1,
    //paddingTop:30
  },
  switch:{
    //flex:1,
  },
  
});