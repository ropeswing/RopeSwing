import React, { Component } from 'react';
import {StyleSheet, FlatList, PanResponder, View, Animated, Text, Dimensions, Image  }from 'react-native';
import styleMain from '../../styles/Main.style.js';
import SingleListItem from "../../components/SingleListItem";

let discRadius = (Dimensions.get('window').width*0.375);
const iconDiameter = 48;
let innerRadius = 15;

const returnResults = [
  { type:'movie', title: "Avengers: End Game", liked: true, outerCircle: 654, innerCircle: 34, image_url: "youTube.png", key:"1"},
  { type:'movie', title: "Lion King", liked: false, outerCircle: 349, innerCircle: 12, image_url: "ab", key:"2" },
  { type:'movie', title: "Once Upon a Time in Hollywood", liked: false, outerCircle: 3663, innerCircle: 18, image_url: "ab", key:"4" },
  { type:'movie', title: "Spider-Man: Far From Home", liked: true, outerCircle: 127, innerCircle: 42, image_url: "ab", key:"3" },
  { type:'movie', title: "Top Gun", liked: false, outerCircle: 110, innerCircle: 2, image_url: "ab", key:"5" },
  { type:'movie', title: "Crawl", liked: true, outerCircle: 65, innerCircle: 7, image_url: "ab", key:"6" },
  { type:'book', title: "Thinner", liked: true, outerCircle: 654, innerCircle: 34, image_url: "a", key:"7"},
  { type:'book', title: "Coma", liked: false, outerCircle: 349, innerCircle: 12, image_url: "ab", key:"8" },
  { type:'book', title: "Cinderella", liked: false, outerCircle: 3663, innerCircle: 18, image_url: "ab", key:"9" },
  { type:'book', title: "Game of Thrones", liked: true, outerCircle: 127, innerCircle: 42, image_url: "ab", key:"10" },
  { type:'book', title: "Smoke Screen", liked: false, outerCircle: 110, innerCircle: 2, image_url: "ab", key:"11" },
  { type:'book', title: "Deal with the Devil", liked: true, outerCircle: 65, innerCircle: 7, image_url: "ab", key:"12" },
  { type:'youtube', title: "Video 1", liked: true, outerCircle: 654, innerCircle: 34, image_url: "a", key:"27"},
  { type:'youtube', title: "Video 2", liked: false, outerCircle: 349, innerCircle: 12, image_url: "ab", key:"28" },
  { type:'youtube', title: "Video 3", liked: false, outerCircle: 3663, innerCircle: 18, image_url: "ab", key:"29" },
  { type:'youtube', title: "Video 4", liked: true, outerCircle: 127, innerCircle: 42, image_url: "ab", key:"30" },
  { type:'youtube', title: "Video 5", liked: false, outerCircle: 110, innerCircle: 2, image_url: "ab", key:"31" },
  { type:'youtube', title: "Video 6", liked: true, outerCircle: 65, innerCircle: 7, image_url: "ab", key:"32" },
  { type:'youtube', title: "Video 7", liked: true, outerCircle: 654, innerCircle: 34, image_url: "a", key:"13"},
  { type:'youtube', title: "Video 8", liked: false, outerCircle: 349, innerCircle: 12, image_url: "ab", key:"15" },
  { type:'youtube', title: "Video 9", liked: false, outerCircle: 3663, innerCircle: 18, image_url: "ab", key:"14" },
  { type:'youtube', title: "Video 10", liked: true, outerCircle: 127, innerCircle: 42, image_url: "ab", key:"16" },
  { type:'youtube', title: "Video 11", liked: false, outerCircle: 110, innerCircle: 2, image_url: "ab", key:"17" },
  { type:'youtube', title: "Video 12", liked: true, outerCircle: 65, innerCircle: 7, image_url: "ab", key:"19" },
];


export default class CircleNav extends Component{
  state = {
    panStyle:{
      transform: [{ rotate: '0deg'}]
    },
    antiPanStyle: {
      transform: [{ rotate: '0deg'}]
    },
    startAng:90,
    differAng: 0,
    listData:{},
  };
  numIcons = 3;   
  radius = discRadius- innerRadius - (iconDiameter/2);
  icons = [
    {top:0, left: 0,  hide:true, filter:"youtube", icon: require('../../assets/youTube.png')},    
    {top:0, left: 0,  hide:true, filter:"movie", icon: require('../../assets/film.png')},
    {top:0, left: 0,  hide:true, filter:"book", icon: require('../../assets/book.png')},
    {top:0, left: 0,  hide:true, filter:"news", icon:'a'},
    {top:0, left: 0,  hide:true, filter:"concert", icon:'a'},
    {top:0, left: 0,  hide:true, filter:"restaurant", icon:'a'},
    {top:0, left: 0,  hide:true, filter:"fashion", icon:'a'},
    {top:0, left: 0,  hide:true, filter:"music", icon:'a'},
  ]

  componentWillMount =() => {
    this.icons.forEach((item, index)=>{
      if(index >= this.numIcons)
      return;
      let arc = 360/this.numIcons;
      item.left = discRadius - (iconDiameter/2) + Math.sin((Math.PI /180) * (arc* index)) * (this.radius);
      item.top = discRadius - (iconDiameter/2) - Math.cos((Math.PI /180) * (arc* index)) * (this.radius);
      item.hide = false;
      this.setState({listData:returnResults.filter(x => x.type === this.icons[0].filter)});
    })

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => {
        let differAng = 90 + Math.atan2(e.nativeEvent.pageY - discRadius - 40, e.nativeEvent.pageX - (Dimensions.get('window').width/2)) * 180 / Math.PI;
        this.setState({differAng: differAng});        
        return true;
      },
      onPanResponderMove: Animated.event([null], 
      {listener: (e, gestureState) => {        
        let ang = this.state.startAng - this.state.differAng + Math.atan2(e.nativeEvent.pageY - discRadius - 40, e.nativeEvent.pageX - (Dimensions.get('window').width/2)) * 180 / Math.PI;
        this.setState({
          panStyle : {
            transform: [{rotate: ang+'deg'}]
          },
          antiPanStyle : {
            transform: [{rotate: (-1*ang)+'deg'}]
          }
        });
      }}
      ),
      onPanResponderRelease: (e, gestureState) => {  
        let ang =  this.state.startAng - this.state.differAng + Math.atan2(e.nativeEvent.pageY - discRadius - 40, e.nativeEvent.pageX - (Dimensions.get('window').width/2)) * 180 / Math.PI;
        ang = ang < 0 ? 360 + ang : ang;
        let arcs = 360 / this.numIcons;
        let halfway = arcs/2;
        let snapValue = ang % arcs > halfway ? (Math.ceil(ang / arcs) * arcs) % 360 : (Math.floor(ang / arcs) * arcs) % 360;        
        this.setState({
          panStyle : {
            transform: [{rotate: snapValue+'deg'}]
          },
          antiPanStyle : {
            transform: [{rotate: (-1*snapValue)+'deg'}]
          },
          startAng: 90 + snapValue
        });
        let index = (((360-snapValue)%360)/arcs)
        this.setState({listData:returnResults.filter(x => x.type === this.icons[index].filter)});
      }, 
    });  
  };
  
  render(){         
    return (       
      <View style={[styleMain.mainBackground, {display:'flex', paddingTop:40}]}>
        <View {...this.panResponder.panHandlers} style={[this.state.panStyle, styles.circle]}>
          <Image style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.icons[0].top, left: this.icons[0].left, display: this.icons[0].hide ? 'none':'flex', position: this.icons[0].hide ? 'relative':'absolute'}]} source={this.icons[0].icon} /> 
          <Image style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.icons[1].top, left: this.icons[1].left, display: this.icons[1].hide ? 'none':'flex', position: this.icons[1].hide ? 'relative':'absolute'}]} source={this.icons[1].icon} /> 
          <Image style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.icons[2].top, left: this.icons[2].left, display: this.icons[2].hide ? 'none':'flex', position: this.icons[2].hide ? 'relative':'absolute'}]} source={this.icons[2].icon} /> 
          {/* <View style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.icons[0].top, left: this.icons[0].left, display: this.icons[0].hide ? 'none':'flex', position: this.icons[0].hide ? 'relative':'absolute'}]}><Text style={styles.circleText}>{this.icons[0].filter}</Text></View>
          <View style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.icons[1].top, left: this.icons[1].left, display: this.icons[1].hide ? 'none':'flex', position: this.icons[1].hide ? 'relative':'absolute'}]}><Text style={styles.circleText}>{this.icons[1].filter}</Text></View>
          <View style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.icons[2].top, left: this.icons[2].left, display: this.icons[2].hide ? 'none':'flex', position: this.icons[2].hide ? 'relative':'absolute'}]}><Text style={styles.circleText}>{this.icons[2].filter}</Text></View> */}
          <View style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.icons[3].top, left: this.icons[3].left, display: this.icons[3].hide ? 'none':'flex', position: this.icons[3].hide ? 'relative':'absolute'}]}><Text style={styles.circleText}>{this.icons[3].filter}</Text></View>
          <View style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.icons[4].top, left: this.icons[4].left, display: this.icons[4].hide ? 'none':'flex', position: this.icons[4].hide ? 'relative':'absolute'}]}><Text style={styles.circleText}>{this.icons[4].filter}</Text></View>
          <View style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.icons[5].top, left: this.icons[5].left, display: this.icons[5].hide ? 'none':'flex', position: this.icons[5].hide ? 'relative':'absolute'}]}><Text style={styles.circleText}>{this.icons[5].filter}</Text></View>
          <View style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.icons[6].top, left: this.icons[6].left, display: this.icons[6].hide ? 'none':'flex', position: this.icons[6].hide ? 'relative':'absolute'}]}><Text style={styles.circleText}>{this.icons[6].filter}</Text></View>
          <View style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.icons[7].top, left: this.icons[7].left, display: this.icons[7].hide ? 'none':'flex', position: this.icons[7].hide ? 'relative':'absolute'}]}><Text style={styles.circleText}>{this.icons[7].filter}</Text></View>
        </View> 
        
               
        <FlatList
          id="flt"
          ref="flt"
          data={this.state.listData}
          renderItem={({ item }) => (
            <SingleListItem
              title={item.title}
              innerCircle={item.innerCircle}
              outerCircle={item.outerCircle}              
              liked={item.liked}
            />
          )}
        />
      </View>                 
    );    
  }
};

let styles = StyleSheet.create({
  circle: {
    backgroundColor: "#cacdbb",
    width: discRadius * 2,
    height: discRadius * 2,
    borderRadius: discRadius,
    alignSelf:"center"
  },
  innnerCircle:{
    width:iconDiameter, 
    height:iconDiameter, 

    borderRadius:iconDiameter, 
    position:'absolute',
    alignItems: 'center',
    display: 'flex'
  },
  circleText:{
    color:'white',
    textAlign:'center',
    lineHeight:iconDiameter
  }
});