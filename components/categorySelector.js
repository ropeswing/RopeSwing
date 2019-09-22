import React from 'react';
import { View, Image, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import MainStyle from '../styles/Main.style';

export default class SingleListItem extends React.Component{  
  constructor(props) {
    super(props); 
    this.state = {
      theLiked: false,
      returnedIcons: ["movie", "music", 'fashion'],
    };   
  }; 
  componentDidMount() {
    this.setState({ theLiked: this.props.liked })
  }
  toggleCheck= event =>{
    let inList = this.state.returnedIcons.filter((txt, i) => {
      return txt === this.props.theItem.filter;
    }).length > 0;
    let temp = this.state.returnedIcons;
    if(!inList){
      temp.push(this.props.theItem.filter);
      this.setState({returnedIcons: temp});
    }else{
      temp = this.state.returnedIcons.filter(item => item !==this.props.theItem.filter);
      this.setState({returnedIcons: temp}); 
    }
    
    
  }
  render(){
    return(
      <TouchableHighlight onPress={this.toggleCheck} underlayColor={'rgba(252, 225, 129, 0.7)'} >
        <View style={[MainStyle.container, {flexDirection:'row', paddingVertical:12, borderBottomWidth:1, borderBottomColor:"#fce181"}]}>
        <FontAwesomeIcon 
          style={{marginTop:4}} 
          color={'#fce181'} 
          size={18} 
          icon={this.state.returnedIcons.filter(theText => 
            theText === this.props.theItem.filter
          ).length > 0 ? ['far', "check-square"] : ['far', "square"] } />
        <Text style={{marginLeft:12, fontSize:18, color:'#fce181'}}>{this.props.theItem.displayName}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}