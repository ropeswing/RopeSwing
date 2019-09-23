import React, { Component } from 'react';
import {StyleSheet, FlatList, PanResponder, View, Animated, Dimensions, Image, Text, StatusBar, TouchableOpacity  }from 'react-native';
import NavDrawer from "../../components/NavDrawer";
import styleMain from '../../styles/Main.style.js';
import SinglePerson from "../../components/SingleInnerCircle";
import createGuid from '../../util/guidMaker'


const returnResults = [
  { name: "Dalton Whitaker", liked: true, outerCircle: 654, innerCircle: 34, id: 123, key:createGuid()},
  { name: "Marcelina Dominguez", liked: false, outerCircle: 349, innerCircle: 12, id: 379, key:createGuid() },
  { name: "Tommie Cullen", liked: false, outerCircle: 3663, innerCircle: 18, id: 874, key:createGuid() },
  { name: "Yvette Mcpherson", liked: true, outerCircle: 127, innerCircle: 42, id: 342, key:createGuid() },
  { name: "Ayomide Best", liked: false, outerCircle: 110, innerCircle: 2, id: 9932, key:createGuid() },
  { name: "Dalton Whitaker", liked: true, outerCircle: 654, innerCircle: 34, id: 123, key:createGuid()},
  { name: "Marcelina Dominguez", liked: false, outerCircle: 349, innerCircle: 12, id: 379, key:createGuid() },
  { name: "Tommie Cullen", liked: false, outerCircle: 3663, innerCircle: 18, id: 874, key:createGuid() },
  { name: "Yvette Mcpherson", liked: true, outerCircle: 127, innerCircle: 42, id: 342, key:createGuid() },
  { name: "Ayomide Best", liked: false, outerCircle: 110, innerCircle: 2, id: 9932, key:createGuid() },
  { name: "Dalton Whitaker", liked: true, outerCircle: 654, innerCircle: 34, id: 123, key:createGuid()},
  { name: "Marcelina Dominguez", liked: false, outerCircle: 349, innerCircle: 12, id: 379, key:createGuid() },
  { name: "Tommie Cullen", liked: false, outerCircle: 3663, innerCircle: 18, id: 874, key:createGuid() },
  { name: "Yvette Mcpherson", liked: true, outerCircle: 127, innerCircle: 42, id: 342, key:createGuid() },
  { name: "Ayomide Best", liked: false, outerCircle: 110, innerCircle: 2, id: 9932, key:createGuid() },
  { name: "Dalton Whitaker", liked: true, outerCircle: 654, innerCircle: 34, id: 123, key:createGuid()},
  { name: "Marcelina Dominguez", liked: false, outerCircle: 349, innerCircle: 12, id: 379, key:createGuid() },
  { name: "Tommie Cullen", liked: false, outerCircle: 3663, innerCircle: 18, id: 874, key:createGuid() },
  { name: "Yvette Mcpherson", liked: true, outerCircle: 127, innerCircle: 42, id: 342, key:createGuid() },
  { name: "Ayomide Best", liked: false, outerCircle: 110, innerCircle: 2, id: 9932, key:createGuid() },
  { name: "Ayomide Best", liked: false, outerCircle: 110, innerCircle: 2, id: 9932, key:createGuid() },
  { name: "Dalton Whitaker", liked: true, outerCircle: 654, innerCircle: 34, id: 123, key:createGuid()},
];

export default class InnderCircleList extends Component{

  goToPerson = (arg, key) => {
    console.log(arg, key)
    this.props.navigation.navigate("OtherPerson", {userId: arg})
  }

render(){    
  return (       
    <View  style={styleMain.container}>           
      <NavDrawer navigation={this.props.navigation} title={this.props.title + " (" + returnResults.length.toString()+")"}/>
      <FlatList
          style={[styleMain.formbackground, {flexGrow:1, paddingHorizontal:12}]}
          id="flt"
          ref="flt"
          data={returnResults}
          renderItem={({ item }) => (
            <SinglePerson
              clickNav = {this.goToPerson}
              title={item.name}
              id={item.id}
              theKey={item.key}
              innerCircle={item.innerCircle}
              outerCircle={item.outerCircle}
            />
          )}
        />
      </View>
  )
          }
        }