//TODO connect to firestore

import React from "react";
import { StyleSheet, Text, View, Switch ,TouchableOpacity, Dimensions} from "react-native";
import * as Permissions from 'expo-permissions'
import { Camera } from 'expo-camera'
import {Icon,Card,Title, Container, Content, Header, Left, Body, Right, Button,Footer,FooterTab, CardItem} from 'native-base'

import { BarCodeScanner } from 'expo-barcode-scanner';



export default class Camara extends React.Component {

  state = {
  hasCameraPermission: null,
  type: Camera.Constants.Type.back,
  snapBackgroundColour:'white'
};



async componentDidMount() {
  const { status } = await Permissions.askAsync(Permissions.CAMERA);
  this.setState({ hasCameraPermission: status === 'granted' });
}

snap = async () => {
  console.log("this nap wanna be photo  ")
  if (this.camera) {
    let photo = await this.camera.takePictureAsync();
    console.log("this nap photo is ",photo)
  }
};


render() {
  const { hasCameraPermission } = this.state;
  if (hasCameraPermission === null) {
    return <View />;
  } else if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  } else {
    return (
      <Container style={{ flex: 1, }} scrollEnabled={false}>
      <Header  transparent>
     
<Left style={{ flex: 1, flexDirection: 'row', }}>

<Button transparent
 
  onPress={() => {
    this.setState({
      type:
        this.state.type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back,
    });
  }}>
  <Icon name="ios-reverse-camera" style={{color:'black'}} />
</Button>
<Button transparent
 
 onPress={() => {
   console.log("Video Activated")
 }}>
 <Icon name="ios-videocam" style={{color:'black'}} />
</Button>
</Left>

<Right>


<Button transparent
 
  onPress={() => {
    console.log("settings pressed")
  }}>
 <Icon name="settings" style={{color:'black'}} />
</Button>
</Right>
 

      </Header>
      <Content scrollEnabled={false}>
        <Camera style={{ flex: 1 }} type={this.state.type}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'column',
             // height:Dimensions.get("screen").height,
            }}>
            
            <View style={{
              flex: 5,
              backgroundColor: 'transparent',
              flexDirection: 'row',
              //alignItems:"center",
             height:Dimensions.get("screen").height,
              
             // alignContent:"space-around"
            }}>
            <TouchableOpacity
              style={{
                position: "absolute",
                
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
            // flex: 1,
            //  alignSelf: 'flex-end',
                //alignItems: 'right',
                height:Dimensions.get("screen").height,
                

                //height:Dimensions.get("screen").height,
              }}
              onPress={() => {
                this.snap()
              }}>
              <Text style={{ fontSize: 14, paddingTop:10,color: 'white',textAlign:"center" }}> Click the screen for picture </Text>
            </TouchableOpacity>
            </View>
          </View>
        </Camera>
        </Content>
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