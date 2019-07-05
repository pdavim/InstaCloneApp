import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';

import {Icon, Card, CardItem, Thumbnail, Body, Left, Right, Button} from 'native-base'



class CardComponent extends React.Component {

 

  render() {
    const images ={
        "1":require('../assets/feed_images/1.jpg'),
        "2":require('../assets/feed_images/2.jpg'),
        "3":require('../assets/feed_images/3.png'),
    }
     

    const myData = [
        {user01:{ 
        id:"01",
        userName:"Vorum",
        listPost:[{
            post01:{
                postId:"01",
                postDate:"",
                likes:"101",
                images:require('../assets/feed_images/1.jpg'),
                postTextContent:"O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, um espécime de livro."
                }
            }
        ]
    }},
    {user02:{ 
        id:"02",
        userName:"CptAmerica",
        listPost:[{
            post01:{
                postId:"01",
                postDate:"",
                likes:"101",
                images:require('../assets/feed_images/1.jpg'),
                postTextContent:"O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, um espécime de livro."
                }
            }
        ]
    }},
    {user03:{ 
        id:"03",
        userName:"ZePovinho",
        listPost:[{
            post01:{
                postId:"01",
                postDate:"",
                likes:"101",
                images:require('../assets/feed_images/1.jpg'),
                postTextContent:"O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, um espécime de livro."
                }
            }
        ]
    }},
]
    

    const data ={
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
    console.log(myData)

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
                   <Button transparent>
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
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: "#F5F5F5",

    }
})



