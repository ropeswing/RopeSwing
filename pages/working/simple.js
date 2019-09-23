import React, {Component} from "react";
import { Text, View, ScrollView } from "react-native";
import { connect } from 'react-redux';
import { createStore } from 'redux';
import cats from '../../redux/reducers/categories'

class Simple extends Component{
  
  constructor(props){
    super(props);
    this.state={
      crap:'ssss'
    }
  }
  componentDidMount() {
    this.setState({more:"value", openText:'aaaaaa'});
  }
  render(){
    console.log(this.state)
    return(
      <Text style={{marginTop:32}}>{this.state.openText}</Text>
    )
  }
}

export default connect(state => state.ivents)(Simple);