import React, {Component} from 'react';
import {Button, View, Text,ScrollView, StyleSheet} from 'react-native';
import ListItem from "../../components/categorySelector";
import NavDrawer from "../../components/NavDrawer"
import styleMain from '../../styles/Main.style.js';

export default class CategoryList extends Component{  
  state = {
    returnedIcons: ["Movies", "Music", 'You Tube', 'Fashion', 'News', 'Concerts', 'Books', 'Restaurants'],
    icons : [
      {top:0, left: 0,  hide:true, order: 0, filter:"youtube", displayName:"You Tube", icon: require('../../assets/youTube.png')},    
      {top:0, left: 0,  hide:true, order: 0, filter:"movie", displayName:"Movies",  icon: require('../../assets/film.png')},
      {top:0, left: 0,  hide:true, order: 0, filter:"book", displayName:"Books",  icon: require('../../assets/book.png')},
      {top:0, left: 0,  hide:true, order: 0, filter:"news", displayName:"News",  icon: require('../../assets/news.png')},
      {top:0, left: 0,  hide:true, order: 0, filter:"concert", displayName:"Concerts",  icon: require('../../assets/guitar.png')},
      {top:0, left: 0,  hide:true, order: 0, filter:"restaurant", displayName:"Restaurants",  icon: require('../../assets/Restaurant-icon.png')},
      {top:0, left: 0,  hide:true, order: 0, filter:"fashion", displayName:"Fashion",  icon: require('../../assets/fashion-icon.png')},
      {top:0, left: 0,  hide:true, order: 0, filter:"music", displayName:"Music",  icon: require('../../assets/music.png')},
    ]
  }
  componentDidMount = () =>{
  }

  render(){    
    return(
    <View style={[styleMain.container, styleMain.formbackground, {alignContent:"stretch"}]}>  
      <NavDrawer navigation={this.props.navigation} title={this.props.title}/>
        <Text style={{paddingHorizontal:12, paddingVertical:6, fontSize:24, color:"rgb(252, 225, 129)"}}>Choose up to 8 categories.</Text>
        <View style={{padding:12, backgroundColor:"#026670"}} >
          <Button title="Go Back" style={[this.pageStyles.button, {flex:25 }]} onPress={()=> this.props.navigation.navigate("Profile")}></Button>     
        </View>
        <ScrollView style={{flexGrow:1, paddingHorizontal:12}}>
          {this.state.icons.map((item, i) => {
            return <ListItem key={i.toString()} theItem={item}></ListItem>
          })}

        </ScrollView>
        
        <View style={{padding:12, backgroundColor:"#026670"}} >
          <Button title="Save" style={{flex:25, alignSelf:'flex-end' }} onPress={()=> this.props.navigation.navigate("Profile")}></Button>
        </View>
      </View>
 
    )
  };
  pageStyles = StyleSheet.create({
    button:{
     color:"#ff0000",
    }
  });
  
}
