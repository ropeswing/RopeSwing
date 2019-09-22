import React, {Component} from 'react';
import {TextInput, Button, View, Text, ScrollView  } from 'react-native';
import { TextInput as TextI } from 'react-native-paper';
import Interests from "../categoryList/CategoryList"

import styleMain from '../../styles/Main.style.js';
import NavDrawer from "../../components/NavDrawer"

const topPadding=24;


export default class Personal extends Component{
  componentDidMount = () =>{
  }

  render(){

    return(
    <View  style={styleMain.container}>
      <NavDrawer navigation={this.props.navigation} title={this.props.title}/>      
      <ScrollView  style={[styleMain.formbackground, {flexGrow:1} ] }>
        <View style={{flexDirection:"row", alignItems:'center', justifyContent:'space-between', padding:12 }}>
          <TextI placeholder="First Name" style={{flex:70 }}></TextI>
          <View style={{flex:5}}></View>
          <Button title="Shared With" style={{flex:25 }}></Button>
        </View>
        <View style={{flexDirection:"row", alignItems:'center', justifyContent:'space-between', padding:12 }}>        
          <TextI placeholder="Last Name" style={{flex:70 }}></TextI> 
          <View style={{flex:5}}></View>
          <Button title="Shared With" style={{flex:25 }}></Button>
        </View>
        <View style={{flexDirection:"row", alignItems:'center', justifyContent:'space-between', padding:12 }}>
          <TextI placeholder="User Id" style={{flex:70 }}></TextI>
          <View style={{flex:5}}></View>
          <Button title="Shared With" style={{flex:25 }}></Button>
        </View>
        <View style={{flexDirection:"row", alignItems:'center', justifyContent:'space-between', padding:12 }}>
          <TextI placeholder="Email" style={{flex:70 }}></TextI> 
          <View style={{flex:5}}></View>
          <Button title="Shared With" style={{flex:25 }}></Button>
        </View>
        <View style={{flexDirection:"row", alignItems:'center', justifyContent:'space-between', padding:12 }}>
          <TextI placeholder="City" style={{flex:70 }}></TextI> 
          <View style={{flex:5}}></View>
          <Button title="Shared With" style={{flex:25 }}></Button>
        </View>
        <View style={{flexDirection:"row", alignItems:'center', justifyContent:'space-between', padding:12 }}>
          <TextI placeholder="State" style={{flex:70 }}></TextI> 
          <View style={{flex:5}}></View>
          <Button title="Shared With" style={{flex:25 }}></Button>
        </View>
        <View style={{flexDirection:"row", alignItems:'center', justifyContent:'space-between', padding:12 }}>
          <TextI placeholder="Gender" style={{flex:70 }}></TextI> 
          <View style={{flex:5}}></View>
          <Button title="Shared With" style={{flex:25 }}></Button>
        </View>
        <View style={{flexDirection:"row", alignItems:'center', justifyContent:'space-between', padding:12 }}>
          <TextI placeholder="City" style={{flex:70 }}></TextI> 
          <View style={{flex:5}}></View>
          <Button title="Shared With" style={{flex:25 }}></Button>
        </View>
        <View style={{flexDirection:"row", alignItems:'center', justifyContent:'space-between', padding:12 }}>
          <TextI placeholder="State" style={{flex:70 }}></TextI> 
          <View style={{flex:5}}></View>
          <Button title="Shared With" style={{flex:25 }}></Button>
        </View>
        <View style={{flexDirection:"row", alignItems:'center', justifyContent:'space-between', padding:12 }}>
          <TextI placeholder="kkkkkk" style={{flex:70 }}></TextI> 
          <View style={{flex:5}}></View>
          <Button title="Shared With" style={{flex:25 }}></Button>
        </View>       
        </ScrollView>
        <View style={{padding:12, backgroundColor:"#026670"}} >
          <Button title="Save"  onPress={()=> this.props.navigation.navigate("Profile")}></Button>
        </View>
    </View>  
    )
  }
}