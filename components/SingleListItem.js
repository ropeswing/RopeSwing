import React from 'react';
import { View, Image, StyleSheet, Text, TouchableHighlight } from 'react-native';
import guid from '../util/guidMaker';


export default class SingleListItem extends React.Component{  
  constructor(props) {
    super(props); 
    this.state = {
      theLiked: false
    };   
  }; 
  componentDidMount() {
    this.setState({ theLiked: this.props.liked })
  }
  changeLiked = () => {
    this.setState({ theLiked: !this.state.theLiked});
  }
  render(){
    return(
      <TouchableHighlight onPress={() => console.log(this.props.title)} underlayColor='#026670' style={{marginBottom:6}}>
          <View style={[{ justifyContent:'space-between', flexDirection: 'row' }]}>
            <View>
                <Text style={
                  [
                  {marginRight: 18, fontWeight:'bold', fontSize:20}
                  ]}>
                    {this.props.title}
                </Text>    
                <View style={{ justifyContent:'flex-start', flexDirection: 'row', color:'yellow' }} >
                  <Text style={[{marginRight: 18, fontSize:10}]}>
                    {this.props.outerCircle} - Outer Circle 
                  </Text>
                  <Text style={[{marginRight: 18, fontSize:10}]}>
                      {this.props.innerCircle} - Inner Circle 
                  </Text>   
                </View>
            </View>
                   
          </View>
      </TouchableHighlight>
    )
  }  
};