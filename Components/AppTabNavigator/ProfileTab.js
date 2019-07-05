import React from 'react';

import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import {Icon, Container, Content, Header, Left, Body, Right, Button} from 'native-base'

import EntypoIcon from 'react-native-vector-icons/Entypo'
import CardComponent from '../CardComponent';


var images = [
  require('../../assets/feed_images/1.jpg'),
  require('../../assets/feed_images/2.jpg'),
  require('../../assets/feed_images/3.png'),
  require('../../assets/feed_images/4.jpg'),
  require('../../assets/feed_images/5.jpg'),
  require('../../assets/feed_images/6.jpg'),
  require('../../assets/feed_images/7.jpg'),
  require('../../assets/feed_images/8.jpg'),
  require('../../assets/feed_images/9.jpg'),
  require('../../assets/feed_images/10.jpg'),
  require('../../assets/feed_images/11.jpg'),
  require('../../assets/feed_images/12.jpg'),
  require('../../assets/feed_images/13.jpg'),
  require('../../assets/feed_images/14.jpg'),
  require('../../assets/feed_images/15.jpg'),
]

var{width, height} =Dimensions.get('window')

class ProfileTab extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeIndex:0
    }
  }


  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
     <Icon name="person" style={{color: tintColor,}} />
     )
  }
  

  segmentClicked = (index)=>{
    this.setState({
      activeIndex:index
    })
  }

  renderSectionOne=()=>{
    return images.map((image,index)=>{
      return (
        <View key={index} style={[{width:(width)/3},{ height:(width/3)},{marginBottom: 2},
        index % 3 !=0?{paddingLeft:2}:{paddingLeft:0}
        ]}>
<Image style={{flex:1, width:undefined, height:undefined}} source={image} />
        </View>
      )
    })
  }

  renderSection = () =>{
    if(this.state.activeIndex == 0){
      return (
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          {this.renderSectionOne()}
      </View>
     )
    }
    else if(this.state.activeIndex==1)
    {
      return(
        <View>

        <CardComponent imageSource="1" likes="101" />
       <CardComponent imageSource="2" likes="101" />
       <CardComponent imageSource="3" likes="101" />
        </View>
      )
    }
  }

  render() {
    return (
    <Container style={{flex:1, backgroundColor:'white'}}>
       <Header>
        <Left>
          <Icon name='md-person-add' style={{paddingLeft: 10,}} />
          </Left>
          <Body><Text>PDAVIM</Text></Body>
          <Right>
          <EntypoIcon name='back-in-time' style={{paddingRight: 10, fontSize:32}} />
          </Right>
      </Header>
      <Content>
      <View style={{paddingTop:10}}>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:1, alignItems:'center'}}>
            <Image source={require('../../assets/me.png')}
                   style={{width:75, height:75, borderRadius: 37.5}} />
          </View>
          <View style={{flex:3}}>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
              <View style={{alignItems:"center"}}>
               <Text >20</Text>
               <Text style={{fontSize:10, color:'grey'}}>posts</Text>
              </View>
              <View style={{alignItems:"center"}}>
               <Text>206</Text>
               <Text style={{fontSize:10, color:'grey'}}>Followers</Text>
              </View>
              <View style={{alignItems:"center"}}> 
               <Text>167</Text>
               <Text style={{fontSize:10, color:'grey'}}>Following</Text>
              </View>
            </View>
            <View style={{flexDirection:'row', paddingTop:10}}>
              <Button bordered dark 
              style={{flex:3, marginLeft:10, justifyContent:'center', height:30}} >
                <Text>Edit Profile</Text>
              </Button>
              <Button bordered dark style={{flex:1, marginRight:10, justifyContent:'center', height:30, marginLeft:5,}}>
                <Icon name='settings' style={{marginTop: -5,}}></Icon>
              </Button>
            </View>


          </View>
        </View>
        <View style={{paddingVertical:10, paddingHorizontal:10}}>
          <Text style={{fontWeight:'bold'}}>Varum Math</Text>
          <Text>Lark | Computer Jack | Commercial Pilot</Text>
          <Text>pdavim.com</Text>
        </View>
      </View>
      <View >
        <View style={{flexDirection:'row', justifyContent:'space-around', borderTopWidth:1, borderTopColor:'#eae5e5'}}>
        <Button transparent
          onPress={()=> this.segmentClicked(0)}
          active={this.state.activeIndex == 0}
          >
            <Icon name='ios-apps' 
            style={[this.state.activeIndex == 0 ? {} : {color:'grey'}]}
            />
          </Button>
          <Button transparent
            onPress={()=> this.segmentClicked(1)}
            active={this.state.activeIndex == 1}
          >
            <Icon name='ios-list'
            style={[this.state.activeIndex == 1 ? {} : {color:'grey'}]}
            /> 
          </Button>
          <Button transparent
          onPress={()=> this.segmentClicked(2)}
          active={this.state.activeIndex == 2}
          >
            <Icon name='ios-people' 
            style={[this.state.activeIndex == 2 ? {} : {color:'grey'}]}
            />
           
          </Button>
          <Button transparent
          onPress={()=> this.segmentClicked(3)}
          active={this.state.activeIndex == 3}
          >
            <Icon name='ios-bookmark'
             style={[this.state.activeIndex == 3 ? {} : {color:'grey'}]}
            />
          </Button>
         
        </View>
        {this.renderSection()}
      </View>
      </Content>

    </Container>
    )
  }

}

export default ProfileTab;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: "#F5F5F5",

    }
})