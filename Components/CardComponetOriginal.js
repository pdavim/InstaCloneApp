import React from 'react';

import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import {Icon, Card, CardItem, Thumbnail, Body, Left, Right, Button} from 'native-base'

const {wWidth, hHeight} = Dimensions.get('screen')

const myUserData =[
     {     
            userName: "Vorum",  
           email:"vorum@vorum.com",
           userImage:require('../assets/me.png'),
           userPosts:[
               {
                postId:1,   
                "postImage":require('../assets/feed_images/1.jpg'),
                postDescription:'É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica.',
                postDate:"Jan 12, 2019",
                postLikes: 101,
                postComments:[ 
                    [{1:"grest"},{2:"Lovelly"}],
                ],
                postLatitude: 0,
                postLongitute: 0
               },
               {
                postId:2,   
                postImage:require('../assets/feed_images/2.jpg'),
                postDescription:'O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão',
                postDate:"Jan 12, 2019",
                postLikes: 89,
                postComments:[[{1:"grest"},{2:"Lovelly"}],],
                postLatitude: 0,
                postLongitute: 0
               },
               {
                postId:3,   
                postImage:require('../assets/feed_images/3.png'),
                postDescription:'Existem muitas variações das passagens do Lorem Ipsum disponíveis, mas a maior parte sofre',
                postDate:"Jan 12, 2019",
                postLikes: 67,
                postComments: [{1:"grest"},{2:"Lovelly"}],
                postLatitude: 0,
                postLongitute: 0
               },
           ]
           },
         {
           userName: "CptAmerica",  
            email:"cptamerica@cptamerica.com",
            userImage:require('../assets/me.png'),
            userPosts:[
                {
                 postId:4,   
                 postImage:require('../assets/feed_images/1.jpg'),
                 postDescription:'É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica.',
                 postDate:"Jan 12, 2019",
                 postLikes: 101,
                 postComments:[ 
                     [{1:"grest"},{2:"Lovelly"}],
                 ],
                 postLatitude: 0,
                 postLongitute: 0
                },
                {
                 postId:5,   
                 postImage:require('../assets/feed_images/2.jpg'),
                 postDescription:'O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão',
                 postDate:"Jan 12, 2019",
                 postLikes: 89,
                 postComments:[[{1:"grest"},{2:"Lovelly"}],],
                 postLatitude: 0,
                 postLongitute: 0
                },
                {
                 postId:6,   
                 postImage:require('../assets/feed_images/3.png'),
                 postDescription:'Existem muitas variações das passagens do Lorem Ipsum disponíveis, mas a maior parte sofre',
                 postDate:"Jan 12, 2019",
                 postLikes: 67,
                 postComments: [{1:"grest"},{2:"Lovelly"}],
                 postLatitude: 0,
                 postLongitute: 0
                },
            ]
            
           },
          {
               "userName": "ZePovinho",  
               "email":"zepovinho@zepovinho.com",
               "userImages":require('../assets/me.png'),
               userPosts:[
                {
                 postId:7,   
                 postImage:require('../assets/feed_images/1.jpg'),
                 postDescription:'É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica.',
                 postDate:"Jan 13, 2019",
                 postLikes: 101,
                 postComments:[ 
                     [{1:"grest"},{2:"Lovelly"}],
                 ],
                 postLatitude: 0,
                 postLongitute: 0
                },
                {
                 postId:8,   
                 postImage:require('../assets/feed_images/2.jpg'),
                 postDescription:'O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão',
                 postDate:"Jan 12, 2019",
                 postLikes: 89,
                 postComments:[[{1:"grest"},{2:"Lovelly"}],],
                 postLatitude: 0,
                 postLongitute: 0
                },
                {
                 postId:9,   
                 postImage:require('../assets/feed_images/3.png'),
                 postDescription:'Existem muitas variações das passagens do Lorem Ipsum disponíveis, mas a maior parte sofre',
                 postDate:"Jan 14, 2019",
                 postLikes: 67,
                 postComments: [{1:"grest"},{2:"Lovelly"}],
                 postLatitude: 0,
                 postLongitute: 0
                },
            ]
            
          }]
       


const data = {
  
    images :{
        "1":require('../assets/feed_images/1.jpg'),
        "2":require('../assets/feed_images/2.jpg'),
        "3":require('../assets/feed_images/3.png'),
    },
    userName:{
        "1":"Vorum",
        "2":"CptAmerica",
        "3":"ZePovinho",
    },
    postDate:{
        "1":"Jan 15, 2019",
        "2":"Jan 16, 2019",
        "3":"Jan 12, 2019",
    }, 
    likes:{
        "1":"101",
        "2":"76",
        "3":"83",
    },
    userImages:{
        "1":require('../assets/me.png'),
        "2":require('../assets/me.png'),
        "3":require('../assets/me.png')
    }
}
class CardComponent extends React.Component {
     uPost=[]
     feedPost=[]

    constructor(props){
        super(props)
        this.state={
          
           
        }
    }

  
//Map section using my data, pre test for using an external data
    arrayimages = ()=> {
        return  myUserData.map((mapData, index)=>{
           // console.log("My data is myData", mapData)
           
           uPost = mapData.userPosts
          
             console.log("uPost data",uPost[0])
             feedPost = uPost.slice(0,1)
            return (
              
                    <Card key={index} style={{ flex:1}} >
                      <CardItem>
                         <Left>
                          <Thumbnail source={mapData.userImage}></Thumbnail>
                            <Body>
                               <Text>{mapData.userName}</Text>
                                         
                                {feedPost.map((uPosts,index)=>{
                                    return(
                                           <View key={index}>
                                          <Text>{uPosts.postDate}</Text>
                                          </View>
                                         )
                                         })}
                              </Body>
                    </Left>    
                    </CardItem>


                    <CardItem cardBody>
               <Image source={uPost.postImage} style={{height:200, width:wWidth, flex:1}} />
               
           </CardItem>


                    <CardItem style={{height:45}}>
               <Left>
                   <Button transparent
                   
                   >
                       <Icon name="ios-heart" style={{color:'black'}}></Icon>
                   </Button>
                   <Button transparent>
                       <Icon name="ios-chatbubbles" style ={{color:'black'}}></Icon>
                   </Button>
                   <Button transparent>
                       <Icon name="ios-send" style ={{color:'black'}}></Icon>
                   </Button>
               </Left>
           </CardItem>
           <CardItem style={{height:40}}>
                   <Text>{uPost.postLikes} Likes</Text>
           </CardItem>
           <CardItem>
               <Body>
                   <Text>
                       <Text style={{fontWeight:"900"}}>@Pdavim</Text>
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
    //console.log("user data",this.state.mydata)
   // console.log("myUserData Email",myUserData)
    //console.log("myUserData userName",myUserData)

    //console.log("myUserData userImages",myUserData.map((mapData)=>
     //console.log(myData)
    //))
    //fetch('myData.json').then(data=>data.json()).then(json =>console.log('my json',json))
  
   

    const images ={
        "1":require('../assets/feed_images/1.jpg'),
        "2":require('../assets/feed_images/2.jpg'),
        "3":require('../assets/feed_images/3.png'),
    }
     
    

    //console.log(myData)
   

    return (
    
   <Card>
     
       <CardItem>
           <Left>
               <Thumbnail source={data.userImages[this.props.imageSource]}></Thumbnail>
               <Body>
                   <Text>{data.userName[this.props.imageSource]}</Text>
                   <Text note>{data.postDate[this.props.imageSource]}</Text>
               </Body>
           </Left>
           </CardItem>
           <CardItem cardBody>
               <Image source={data.images[this.props.imageSource]} style={{height:200, width:null, flex:1}} />
               
           </CardItem>
          
           <CardItem style={{height:45}}>
               <Left>
                   <Button transparent
                   
                   >
                       <Icon name="ios-heart" style={{color:'black'}}></Icon>
                   </Button>
                   <Button transparent>
                       <Icon name="ios-chatbubbles" style ={{color:'black'}}></Icon>
                   </Button>
                   <Button transparent>
                       <Icon name="ios-send" style ={{color:'black'}}></Icon>
                   </Button>
               </Left>
           </CardItem>
           <CardItem style={{height:40}}>
                   <Text>{data.likes[this.props.imageSource]} Likes</Text>
           </CardItem>
           <CardItem>
               <Body>
                   <Text>
                       <Text style={{fontWeight:"900"}}>@Pdavim</Text>
                   O Lorem Ipsum tem vindo a ser o texto padrão usado por estas
                    indústrias desde o ano de 1500, quando uma misturou os 
                    caracteres de um texto para criar um espécime de livro. 
                    Este texto não só sobreviveu 5 séculos, um espécime de livro.
                   </Text>
               </Body>
           </CardItem>
           
          
   </Card>
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



