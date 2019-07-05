import React from 'react';

import { StyleSheet, Text, View , ScrollView} from 'react-native';

import {Icon, Container, Content, Thumbnail, Header, Left, Right, Body} from 'native-base'

import CardComponent from '../CardComponent'


class HomeTab extends React.Component {

    static navigationOptions = {
      tabBarIcon: ({tintColor}) => (
       <Icon name="ios-home" style={{color: tintColor}} />
       )
    }
  

  render() {
    return (
   <Container style={styles.container}>
     <Content>
      <Header>
        <Left>
          <Icon name='ios-camera' style={{paddingLeft: 10,}} />
          </Left>
          <Body><Text>InstaClone App</Text></Body>
          <Right>
          <Icon name='ios-send' style={{paddingRight: 10,}} />
          </Right>
      </Header>


       <View style={{height:100}}>
         <View style={{
           flex:1,
           flexDirection:'row',
           justifyContent:'space-between',
           alignItems:'center',
           paddingHorizontal:7}}
           >
         <Text style={{fontWeight:'bold'}}>Stories</Text>
         <View style={{flexDirection:'row', alignItems:'center'}}>
          <Icon style={{fontSize:13,paddingEnd:4}} name='md-play'></Icon> 
         <Text style={{fontWeight:'bold'}}>Watch All</Text>
         </View>
         </View>
         <View style={{flex:3}}>
          <ScrollView horizontal='true' 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems:'center',
            paddingStart: 5,
            paddingEnd:5
          }}
          >
            <Thumbnail 
            style={{marginHorizontal:5, borderColor:'pink', borderWidth:2}}
            source={require('../../assets/StoriesHeaderThumbnails/1.jpg')} />
              <Thumbnail 
            style={{marginHorizontal:5, borderColor:'pink', borderWidth:2}}
            source={require('../../assets/StoriesHeaderThumbnails/2.jpg')} />
              <Thumbnail 
            style={{marginHorizontal:5, borderColor:'pink', borderWidth:2}}
            source={require('../../assets/StoriesHeaderThumbnails/3.jpg')} />
              <Thumbnail 
            style={{marginHorizontal:5, borderColor:'pink', borderWidth:2}}
            source={require('../../assets/StoriesHeaderThumbnails/4.jpg')} />
              <Thumbnail 
            style={{marginHorizontal:5, borderColor:'pink', borderWidth:2}}
            source={require('../../assets/StoriesHeaderThumbnails/5.jpg')} />
              <Thumbnail 
            style={{marginHorizontal:5, borderColor:'pink', borderWidth:2}}
            source={require('../../assets/StoriesHeaderThumbnails/6.jpg')} />
             <Thumbnail 
            style={{marginHorizontal:5, borderColor:'pink', borderWidth:2}}
            source={require('../../assets/StoriesHeaderThumbnails/7.jpg')} />
          </ScrollView>
         </View>
       </View>
       <CardComponent imageSource="1" likes="101" />
       <CardComponent imageSource="2" likes="101" />
       <CardComponent imageSource="3" likes="101" />
     </Content>
   </Container>
    )
  }

}

export default HomeTab;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#F5F5F5",
    }
})