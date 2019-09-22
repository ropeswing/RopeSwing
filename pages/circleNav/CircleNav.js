import React, { Component } from 'react';
import { BlurView } from 'expo-blur';
import {StyleSheet, FlatList, PanResponder, View, Animated, Dimensions, Image, Text, StatusBar, TouchableOpacity  }from 'react-native';
import styleMain from '../../styles/Main.style.js';
import SingleListItem from "../../components/SingleListItem";
import lo from 'lodash';
import NavDrawer from "../../components/NavDrawer"
const iconDiameter = 48;
const topPadding=10;
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
  { type:'music', title: "Cake - Going the Distance", liked: true, outerCircle: 654, innerCircle: 34, image_url: "a", key:"7"},
  { type:'music', title: "Offspring - Kids Aren't Alright", liked: false, outerCircle: 349, innerCircle: 12, image_url: "ab", key:"8" },
  { type:'music', title: "Cinderella - Long Cold Winter", liked: false, outerCircle: 3663, innerCircle: 18, image_url: "ab", key:"9" },
  { type:'music', title: "Guns and Roses - November Rain", liked: true, outerCircle: 127, innerCircle: 42, image_url: "ab", key:"10" },
  { type:'music', title: "Toto - Africa", liked: false, outerCircle: 110, innerCircle: 2, image_url: "ab", key:"11" },
  { type:'music', title: "Neil Diamond - America", liked: true, outerCircle: 65, innerCircle: 7, image_url: "ab", key:"12" },
  { type:'fashion', title: "Coach Purse", liked: true, outerCircle: 654, innerCircle: 34, image_url: "a", key:"33"},
  { type:'fashion', title: "Oakley Sunglasses", liked: false, outerCircle: 349, innerCircle: 12, image_url: "ab", key:"34" },
  { type:'fashion', title: "Nike Shoes", liked: false, outerCircle: 3663, innerCircle: 18, image_url: "ab", key:"35" },
  { type:'fashion', title: "Sam Edelman Roza Flats", liked: true, outerCircle: 127, innerCircle: 42, image_url: "ab", key:"36" },
  { type:'fashion', title: "Lulus Lace Popover Wide Leg Jumpsuit", liked: false, outerCircle: 110, innerCircle: 2, image_url: "ab", key:"37" },
  { type:'fashion', title: "BillABong Same Side Hooded Cover-Up Tunic", liked: true, outerCircle: 65, innerCircle: 7, image_url: "ab", key:"38" }
];
let discRadius = (Dimensions.get('window').width*0.375);
let innerRadius = 15;
let navigateToCallback = routeName => {};

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
    returnedIcons: ["movie", "music", 'youtube', 'fashion', 'concert', 'book', 'restaurant', 'news']
  };
  numIcons = this.state.returnedIcons.length;   
  radius = discRadius- innerRadius - (iconDiameter/2);
  icons = [
    {top:0, left: 0,  hide:true, order: 0, filter:"youtube", displayName:"You Tube", icon: require('../../assets/youTube.png')},    
    {top:0, left: 0,  hide:true, order: 0, filter:"movie", displayName:"Movies",  icon: require('../../assets/film.png')},
    {top:0, left: 0,  hide:true, order: 0, filter:"book", displayName:"Books",  icon: require('../../assets/book.png')},
    {top:0, left: 0,  hide:true, order: 0, filter:"news", displayName:"News",  icon: require('../../assets/news.png')},
    {top:0, left: 0,  hide:true, order: 0, filter:"concert", displayName:"Concerts",  icon: require('../../assets/guitar.png')},
    {top:0, left: 0,  hide:true, order: 0, filter:"restaurant", displayName:"Restaurants",  icon: require('../../assets/Restaurant-icon.png')},
    {top:0, left: 0,  hide:true, order: 0, filter:"fashion", displayName:"Fashion",  icon: require('../../assets/fashion-icon.png')},
    {top:0, left: 0,  hide:true, order: 0, filter:"music", displayName:"Music",  icon: require('../../assets/music.png')},
  ]

  componentWillMount =() => {
    let chosenIcons = this.icons.filter(item => {
      item.order = this.state.returnedIcons.indexOf(item.filter);
      return this.state.returnedIcons.includes(item.filter)
    });
    
    chosenIcons = lo.orderBy(chosenIcons, ['order'], ['asc']);
    chosenIcons.forEach((item, index)=>{
         let arc = 360/this.numIcons;
         item.left = discRadius - (iconDiameter/2) + Math.sin((Math.PI /180) * (arc* index)) * (this.radius);
         item.top = discRadius - (iconDiameter/2) - Math.cos((Math.PI /180) * (arc* index)) * (this.radius);
         item.order = index;
         item.hide = false;
    })
    this.setState({listData:returnResults.filter(x => x.type === chosenIcons[0].filter)});

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => {
        let differAng = 90 + Math.atan2(e.nativeEvent.pageY - discRadius - 86, e.nativeEvent.pageX - (Dimensions.get('window').width/2)) * 180 / Math.PI;
        this.setState({differAng: differAng});        
        return true;
      },
      onPanResponderMove: Animated.event([null], 
      {listener: (e, gestureState) => {        
        let ang = this.state.startAng - this.state.differAng + Math.atan2(e.nativeEvent.pageY - discRadius - 86, e.nativeEvent.pageX - (Dimensions.get('window').width/2)) * 180 / Math.PI;
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
        let ang =  this.state.startAng - this.state.differAng + Math.atan2(e.nativeEvent.pageY - discRadius - 86, e.nativeEvent.pageX - (Dimensions.get('window').width/2)) * 180 / Math.PI;
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
        let index = Math.round(((360-snapValue)%360)/arcs);
        this.setState({listData:returnResults.filter(x => x.type === this.state.returnedIcons[index])});
      }, 
    });  
  };
  

  render(){    
    return (       
      <View style={[styleMain.mainBackground, {display:'flex'}]}>                    
        <NavDrawer navigation={this.props.navigation} title={this.props.title}/>
      
        <View {...this.panResponder.panHandlers} style={[this.state.panStyle, styles.circle, {marginTop:topPadding}]} ref="mainSqr">
          <BlurView style={[styles.innerOutline]} intensity={100} ></BlurView>
          <Image style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.icons[0].top, left: this.icons[0].left, display: this.icons[0].hide ? 'none':'flex', position: this.icons[0].hide ? 'relative':'absolute'}]} source={this.icons[0].icon} /> 
          <Image style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.icons[1].top, left: this.icons[1].left, display: this.icons[1].hide ? 'none':'flex', position: this.icons[1].hide ? 'relative':'absolute'}]} source={this.icons[1].icon} /> 
          <Image style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.icons[2].top, left: this.icons[2].left, display: this.icons[2].hide ? 'none':'flex', position: this.icons[2].hide ? 'relative':'absolute'}]} source={this.icons[2].icon} /> 
          <Image style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.icons[3].top, left: this.icons[3].left, display: this.icons[3].hide ? 'none':'flex', position: this.icons[3].hide ? 'relative':'absolute'}]} source={this.icons[3].icon} /> 
          <Image style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.icons[4].top, left: this.icons[4].left, display: this.icons[4].hide ? 'none':'flex', position: this.icons[4].hide ? 'relative':'absolute'}]} source={this.icons[4].icon} /> 
          <Image style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.icons[5].top, left: this.icons[5].left, display: this.icons[5].hide ? 'none':'flex', position: this.icons[5].hide ? 'relative':'absolute'}]} source={this.icons[5].icon} /> 
          <Image style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.icons[6].top, left: this.icons[6].left, display: this.icons[6].hide ? 'none':'flex', position: this.icons[6].hide ? 'relative':'absolute'}]} source={this.icons[6].icon} /> 
          <Image style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.icons[7].top, left: this.icons[7].left, display: this.icons[7].hide ? 'none':'flex', position: this.icons[7].hide ? 'relative':'absolute'}]} source={this.icons[7].icon} /> 
          {/* <View style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.icons[0].top, left: this.icons[0].left, display: this.icons[0].hide ? 'none':'flex', position: this.icons[0].hide ? 'relative':'absolute'}]}><Text style={styles.circleText}>{this.icons[0].filter}</Text></View> */}
        </View>                
        <FlatList
          style={{paddingHorizontal:12}}
          id="flt"
          ref="flt"
          data={this.state.listData}
          renderItem={({ item }) => (
            <SingleListItem
              title={item.title}
              innerCircle={item.innerCircle}
              outerCircle={item.outerCircle}
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
    alignSelf:"center",
    marginBottom:20,
  },
  innerOutline:{
    width:(discRadius * 2) - 70, 
    height:(discRadius * 2 )- 70, 
    borderRadius:(discRadius * 2) - 70, 
    position:'absolute',
    left: 35,
    top:35,
    borderColor:'#026670',
    borderWidth:1,
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