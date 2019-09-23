import React from 'react';
import { View, Image, StyleSheet, Text, TouchableHighlight } from 'react-native';



export default class SingleInnerCircle extends React.Component{  
  constructor(props) {
    super(props); 
    this.state = {
      theLiked: false
    };   
  }; 
  
  render(){
    return(
      <TouchableHighlight onPress={()=> {this.props.clickNav(this.props.id, this.props.theKey)}} underlayColor='#026670'>
          <View style={[{ justifyContent:'space-between', flexDirection: 'row' }]}>
            <View>
                <Text style={
                  [
                  {fontWeight:'bold', fontSize:20}
                  ]}>
                    {this.props.title}
                </Text>    
                <View style={{ justifyContent:'flex-start', flexDirection: 'row', color:'yellow' }} >
                  <Text style={[{fontSize:10}]}>
                    {this.props.outerCircle} - Outer Circle 
                  </Text>
                  <Text style={[{fontSize:10}]}>
                      {this.props.innerCircle} - Inner Circle 
                  </Text>   
                </View>
            </View>
                   
          </View>
      </TouchableHighlight>
    )
  }  
};