import React, { Component } from 'react';
import {StyleSheet, PanResponder, View, Animated, Text }from 'react-native';

const iconDiameter = 40;
let discRadius = 160;
let innerRadius = 15;

export default class CircleNav extends Component{
  state = {
    panStyle:{
      transform: [{ rotate: '0deg'}]
    },
    antiPanStyle: {
      transform: [{ rotate: '0deg'}]
    }
  };
  radius = discRadius- innerRadius - (iconDiameter/2);
  top1 = 0; left1 = 0; hide1 = true;
  top2 = 0; left2 = 0; hide2 = true;
  top3 = 0; left3 = 0; hide3 = true;
  top4 = 0; left4 = 0; hide4 = true;
  top5 = 0; left5 = 0; hide5 = true;
  top6 = 0; left6 = 0; hide6 = true;
  top7 = 0; left7 = 0; hide7 = true;
  top8 = 0; left8 = 0; hide8 = true;
  icons = ["1", "2", "3", "4", '5', "6", '7', '8'];
  
  componentWillMount =() => {
    this.icons.forEach((item, index)=>{
      let arc = 360/this.icons.length;
      this['left'+(index+1)] = discRadius - (iconDiameter/2) + Math.sin((Math.PI /180) * (arc* index)) * (this.radius);
      this['top'+(index+1)] = discRadius - (iconDiameter/2) - Math.cos((Math.PI /180) * (arc* index)) * (this.radius);
      this['hide'+(index+1)] = false;
    })

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => {
        return true;
      },
      onPanResponderMove: Animated.event([null], 
      {listener: (e, gestureState) => {
        let ang = 90 + Math.atan2(e.nativeEvent.pageY - 180, e.nativeEvent.pageX - 180) * 180 / Math.PI;
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
        let ang = 90 + Math.atan2(e.nativeEvent.pageY - 180, e.nativeEvent.pageX - 180) * 180 / Math.PI;
        console.log(ang)
        ang = ang < 0 ? 360 + ang : ang;
        let arcs = 360 / this.icons.length;
        let halfway = arcs/2;
        let snapValue = ang % arcs > halfway ? Math.ceil(ang / arcs) * arcs : Math.floor(ang / arcs) * arcs;
        
        console.log("ang", ang);
        console.log(ang<0)
        console.log("arcs", arcs);
        console.log("modal", ang % arcs);
        
        console.log("snapValue", snapValue)
        this.setState({
          panStyle : {
            transform: [{rotate: snapValue+'deg'}]
          },
          antiPanStyle : {
            transform: [{rotate: (-1*snapValue)+'deg'}]
          }
        });
      }, 
    });  
  };
  
  render(){           
    return (       
      <View style={{display:'flex', paddingTop:40}}>
        <View {...this.panResponder.panHandlers} style={[this.state.panStyle, styles.circle]}>
          <View style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.top1, left: this.left1, display: this.hide1 ? 'none':'flex', position: this.hide1 ? 'relative':'absolute'}]}><Text style={styles.circleText}>1</Text></View>
          <View style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.top2, left: this.left2, display: this.hide2 ? 'none':'flex', position: this.hide2 ? 'relative':'absolute'}]}><Text style={styles.circleText}>2</Text></View>
          <View style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.top3, left: this.left3, display: this.hide3 ? 'none':'flex', position: this.hide3 ? 'relative':'absolute'}]}><Text style={styles.circleText}>3</Text></View>
          <View style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.top4, left: this.left4, display: this.hide4 ? 'none':'flex', position: this.hide4 ? 'relative':'absolute'}]}><Text style={styles.circleText}>4</Text></View>
          <View style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.top5, left: this.left5, display: this.hide5 ? 'none':'flex', position: this.hide5 ? 'relative':'absolute'}]}><Text style={styles.circleText}>5</Text></View>
          <View style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.top6, left: this.left6, display: this.hide6 ? 'none':'flex', position: this.hide6 ? 'relative':'absolute'}]}><Text style={styles.circleText}>6</Text></View>
          <View style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.top7, left: this.left7, display: this.hide7 ? 'none':'flex', position: this.hide7 ? 'relative':'absolute'}]}><Text style={styles.circleText}>7</Text></View>
          <View style={[this.state.antiPanStyle, styles.innnerCircle, {top: this.top8, left: this.left8, display: this.hide8 ? 'none':'flex', position: this.hide8 ? 'relative':'absolute'}]}><Text style={styles.circleText}>8</Text></View>
        </View> 
      </View>                 
    );    
  }
};

let styles = StyleSheet.create({
  circle: {
    backgroundColor: "skyblue",
    width: discRadius * 2,
    height: discRadius * 2,
    borderRadius: discRadius,
    alignSelf:"center"
  },
  innnerCircle:{
    width:iconDiameter, 
    height:iconDiameter, 
    backgroundColor: "black", 
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