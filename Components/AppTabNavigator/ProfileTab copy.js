import React from 'react';
import Lightbox from 'react-native-lightbox';


import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity,TouchableHighlight,FlatList,Platform } from 'react-native';
//import {Constants} from 'expo'

import {Icon, Container, Content, Header, Left, Body, Right, Button} from 'native-base'

import EntypoIcon from 'react-native-vector-icons/Entypo'
import CardComponent from '../CardComponent';
//import Lightbox from './TabComponents/Lightbox'
//import ImageView from 'react-native-image-view'
const WINDOW_WIDTH = Dimensions.get('window').width;

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




var lightboxImagesSingle = [
  {
    source: {
        uri: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
    },
    title: 'Paris',
    width: 806,
    height: 720,
},
]



var{width, height} =Dimensions.get('window')

const tabs = [
  {title: 'Cities', images: cities},
  {title: 'Nature', images: nature},
];

const cities = [
  {
    source: {
        uri:
            'https://avatars.mds.yandex.net/get-pdb/49816/d9152cc6-bf48-4e44-b2d5-de73b2e94454/s800',
    },
    title: 'London',
}, {
  // eslint-disable-next-line
  source: require('../../assets/feed_images/15.jpg'),
  title: 'St-Petersburg',
  width: 1200,
  height: 800,
},{
  source: {
      uri:
          'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
  },
  title: 'Paris',
  width: 806,
  height: 720,
},
]

const nature = [
  {
    source: {
        uri: 'https://s4.insidehook.com/Switzerland_Hea_1493053457.jpg',
    },
    title: 'Switzerland',
},

{
    source: {
        uri:
            'https://i.pinimg.com/564x/a5/1b/63/a51b63c13c7c41fa333b302fc7938f06.jpg',
    },
    title: 'USA',
    width: 400,
    height: 800,
},
{
    source: {
        uri:
            'https://guidetoiceland.imgix.net/4935/x/0/top-10-beautiful-waterfalls-of-iceland-8?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-2.1.1&w=883&s=1fb8e5e1906e1d18fc6b08108a9dde8d',
    },
    title: 'Iceland',
    width: 880,
    height: 590,
},
]

class ProfileTab extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeIndex:0,
      isImageViewVisible: false,
      activeTab: 0,
      imageIndex: 0,
      isImageViewVisible: false,
      likes: [...cities, ...nature].reduce((acc, image) => {
          acc[image.title] = 0;

          return acc;
      }, {}),
    };
    this.renderFooter = this.renderFooter.bind(this);
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
        <View  key={index} style={styles.containerSection}>
       

    <View  style={[{width:(width)/3},{ height:(width/3)},{marginBottom: 2},
        index % 3 !=0?{paddingLeft:2}:{paddingLeft:0}
        ]}>
     

            <Image  style={{flex:1, width:undefined, height:undefined}} source={image} />
     
        
        </View>
        </View>
        
      )
    })
  }


  imageSelectedHandler = (index) => {
    this.setState(prevState => {
      return {
        ...prevState,
        imageSelected: index
      }
    })
  }
  closeLightboxHandler = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        imageSelected: null
      }
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
    else if(this.state.activeIndex==2){
      
        
      return(
        <View>
         <Text>third section</Text>
        
          </View>
      )
    }
  }

  renderFooter({title}) {
    const {likes} = this.state;

    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>{title}</Text>
            <TouchableOpacity
                style={styles.footerButton}
                onPress={() => {
                    const imageLikes = likes[title] + 1;
                    this.setState({likes: {...likes, [title]: imageLikes}});
                }}
            >
                <Text style={styles.footerText}>♥</Text>
                <Text style={[styles.footerText, {marginLeft: 7}]}>
                    {likes[title]}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

  render() {
   // const {isImageViewVisible, activeTab, imageIndex} = this.state;
     //   const images = tabs[activeTab].images || [];
       
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

    },

    brick: {
      flex: 1,
      position: 'relative',
      width: '33.333%',
      paddingBottom: '33.333%',
      marginHorizontal: 1,
      marginBottom: 2
    },
    imageWrap: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    image: {
      width: '100%',
      height: '100%'
    },
    tabs: {
      flexDirection: 'row',
  },
  tab: {
      flex: 1,
      height: 30,
      alignItems: 'center',
      justifyContent: 'flex-end',
  },
  tabTitle: {
      color: '#a4a4a4',
  },
  tabTitleActive: {
      fontWeight: '700',
      color: '#000',
  },
  footer: {
      width,
      height: 1250,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      paddingHorizontal: 10,
      paddingVertical: 5,
  },
  footerButton: {
      flexDirection: 'row',
      marginLeft: 15,
  },
  footerText: {
      fontSize: 46,
      color: '#000',
      textAlign: 'center',
  },
  contain: {
    flex: 1,
   height: WINDOW_WIDTH/3,
   
    width:"100%",
    //height:undefined
  },
  containerSection:{
    width:WINDOW_WIDTH/3,
    //height:WINDOW_WIDTH/3

  }
})