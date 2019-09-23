import React, { Component } from 'react';
import { BlurView } from 'expo-blur';
import {StyleSheet, FlatList, PanResponder, View, Animated, Dimensions, Image, Text, StatusBar, TouchableOpacity  }from 'react-native';
import styleMain from '../../styles/Main.style.js';
import SingleListItem from "../../components/SingleListItem";
import lo from 'lodash';
import NavDrawer from "../../components/NavDrawer";
import ivent from '../../model/ivent';
import {connect} from 'react-redux';


const iconDiameter = 48;
const topPadding=10;

let discRadius = (Dimensions.get('window').width*0.375);
let innerRadius = 15;
let navigateToCallback = routeName => {};
let chosenIcons;

class CircleNav extends Component{
  constructor(props) {
    super(props);
  }
  state = {
    panStyle:{
      transform: [{ rotate: '0deg'}]
    },
    antiPanStyle: {
      transform: [{ rotate: '0deg'}]
    },
    startAng:90,
    differAng: 0,
    listData:[],
    returnedIcons: ["movie", "music", 'youtube', 'fashion', 'concert', 'book', 'restaurant', 'news'],
    curCategory:"",
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
      chosenIcons = this.icons.filter(item => {
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
    this.setState({listData:this.props.ivents.ivents.filter(x => x.type === chosenIcons[0].filter), curCategory:chosenIcons[0].filter});

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
        this.setState({listData:this.props.ivents.ivents.filter(x => x.type === this.state.returnedIcons[index]), curCategory: this.state.returnedIcons[index]});
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
        </View>                
        <View style={[ {top: (this.radius*2) + topPadding, width:((discRadius - iconDiameter-14)*2), marginHorizontal:(Dimensions.get('window').width - ((discRadius - iconDiameter-14)*2))/2, textAlign:'center', display: 'flex', position: 'absolute'}]}><Text style={styles.circleText}>{chosenIcons.find(x => x.filter === this.state.curCategory).displayName}</Text></View>
        <FlatList
          style={{paddingHorizontal:12, borderTopWidth:1, borderTopColor:'#fce181'}}
          id="flt"
          ref="flt"
          data={this.props.ivents.ivents.filter(x => x.type === this.state.curCategory)}
          renderItem={({ item }) => (
            <SingleListItem title={item.title} innerCircle={item.innerCircle} outerCircle={item.outerCircle} />
          )}
          keyExtractor={(item, index) => item.id}
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
    color:'black',
    textAlign:'center',
    fontWeight:'bold',
    lineHeight:iconDiameter
  }
});

export default connect(state=>state)(CircleNav);