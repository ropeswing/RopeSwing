import React from 'react';
import {TextInput, Button, View, Text, FlatList } from 'react-native';

export default class NavBtns extends Component{
  render(){
    return(
      <View>
        <Button>Profile Page</Button>
        <Button>Add Event Page</Button>
        <Button>Inner Circle Page</Button>
        <Button>Outer Circle Page</Button>
        <Button>Likes Page</Button>
        <Button>Dislikes Page</Button>
        <Button>Search Page</Button>      
      </View>
    )
  }
}