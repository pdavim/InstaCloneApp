import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import {Icon} from 'native-base'



class LikesTab extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
     <Icon name="ios-heart" style={{color: tintColor}} />
     )
  }

  

  render() {
    return (
    <View style={styles.container}>
      <Text>LikesTab</Text>
    </View>
    )
  }

}

export default LikesTab;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: "#F5F5F5",

    }
})