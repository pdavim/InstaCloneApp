import React from 'react';

import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import {Icon, Card, CardItem, Thumbnail, Body, Left, Right, Button} from 'native-base'

import customData from './data'

const {wWidth, hHeight} = Dimensions.get('screen')

const myUserDataV = customData
 
class CardComponent extends React.Component {
     

    constructor(props){
        super(props)
        this.state={
            uPost:[],
           feedPost:[],
           imageLikes:0,
           myUserData : myUserDataV,
           finalData:0
        }
        this.handleChange = this.handleChange.bind(this);
       // console.log('this stae',this.state.imageLikes)
    }

    //   console.log('multiImages',multiImages)
    handleChange =  (props) => {
        z=this.state.finalData
        y =this.props.likes
        this.setState({
             //props : props + 1,
             
             finalData:z+1
        })
       // console.log('this stae', y)
      //  alert("your task is", props);
        console.log("This task is", props+1);
        console.log("This task is", z + props);
        console.log("This task is", this.state.finalData + props);
         x = this.state.finalData + props
         console.log(x)
      };
   
  
//Map section using my data, pre test for using an external data
    arrayimages = ()=> {
        let t = this.state.finalData 
        return  this.state.myUserData.map((mapData, index)=>{
           // console.log("My data is myData", mapData)
           
           uPost = mapData.userPosts

             feedPost = uPost.slice(0,1)
            return (
              
                    <Card key={index} >
                      <CardItem>
                         <Left>
                          <Thumbnail source={mapData.userImage}></Thumbnail>
                            <Body>
                               <Text>{mapData.userName}</Text>
                                         
                                {feedPost.map((feedPosts,index)=>{
                                    return(
                                           <View key={index}>
                                          <Text>{feedPosts.postDate}</Text>
                                          </View>
                                         )
                                         })}
                              </Body>
                    </Left>    
                    </CardItem>
                    {feedPost.map((imagePosts,index)=>{
                        return(
                        <CardItem cardBody key={index}>
               <Image source={imagePosts.postImage} style={{height:200, width:wWidth, flex:1}} />
           </CardItem>
               )
            })}

                    <CardItem style={{height:45}}>
               <Left>
               {feedPost.map((likes,index)=>{
                   console.log(likes.postLikes)
                        return(
                   <Button transparent key={index}
                   onPress={() => this.handleChange(likes.postLikes)}
                  /*  onPress={() => {
                   imageLikes= this.state.imageLikes
                    count = likes.postLikes
                        imageLikes = count + 1
                        console.log(imageLikes)
                        alert(imageLikes)

                }} */
                   >
                       <Icon name="ios-heart" style={{color:'black'}}></Icon>
                   </Button>
                      )
                    })}
                   <Button transparent>
                       <Icon name="ios-chatbubbles" style ={{color:'black'}}></Icon>
                   </Button>
                   <Button transparent>
                       <Icon name="ios-send" style ={{color:'black'}}></Icon>
                   </Button>
               </Left>
           </CardItem>
           
           {feedPost.map((likePosts,index)=>{
               return(
                   <CardItem style={{height:40}} key={index}>
                       <Text>{this.finalData}</Text>
                   <Text>{likePosts.postLikes} Likes</Text>
           </CardItem>
              )
            })}
           <CardItem>
               <Body>
                   <Text>
                       <Text style={{fontWeight:"900"}}>@Pdavim{t}</Text>
                   O Lorem Ipsum tem vindo a ser o texto padrão usado por estas
                    indústrias desde o ano de 1500, quando uma misturou os 
                    caracteres de um texto para criar um espécime de livro. 
                    Este texto não só sobreviveu 5 séculos, um espécime de livro.
                   </Text>
               </Body>
           </CardItem>

                    </Card>     
            )
            })}


    componentDidMount() {
   

    }

  render() {
  

    return (
    
        <View>
           {this.arrayimages()}    
        </View>
    )
  }
}

export default CardComponent;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: "#F5F5F5",

    }
})



