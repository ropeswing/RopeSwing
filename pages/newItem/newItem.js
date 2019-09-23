import React, {Component} from 'react';
import {Text, View, Picker, ScrollView} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styleMain from '../../styles/Main.style.js';
import DatePicker from 'react-native-datepicker'
import NavDrawer from "../../components/NavDrawer";
import ivent from '../../model/ivent';
import guid from '../../util/guidMaker'

import {connect} from 'react-redux';
const topPadding=0;

class AddItem extends Component{
  constructor(props) {
    super(props);
  };
  state = {
    itemDate: new Date(),
    text:"",
    category:""
  };

  addEvent = () =>{
    let gui = guid();
    let e = {
      id: gui,
      date: new Date(), 
      title: this.state.text, 
      type: this.state.category.toLowerCase(),
      liked: true,
      outerCircle: 34,
      innerCircle: 10,
      theKey: gui,
    }
    this.props.dispatch({type:'ivents/new', payload:e});
    this.setState({category:'', text:''});
    this.props.navigation.navigate("FindEvent")
  }

  render(){
    return(
      <View style={[styleMain.mainBackground]}>
      <NavDrawer navigation={this.props.navigation} title={this.props.title}/>
      <ScrollView  style={[styleMain.formbackground, styleMain.padded, {marginTop:topPadding}]}>
        <Text style={{fontSize:24, fontWeight:"bold", color:"#fce181"}}>Add Item</Text>
        <View style={[styleMain.bordered]}>
          <Picker 
            mode="dialog" 
            style={[styleMain.iputDefault]}
            selectedValue={this.state.category}
            onValueChange={ value => this.setState({category:value})}            
            >
              <Picker.Item label="Choose an event" value="" color="red" style={{backgroundColor:"yellow"}}/>
              <Picker.Item label="Movie" value="Movie" style={{backgroundColor:"yellow"}}/>
              <Picker.Item label="Book" value="Book" />
              <Picker.Item label="You Tube" value="youtube" />
              <Picker.Item label="Restaurant" value="Restaurant"/>
              <Picker.Item label="Concert" value="Concert"/>
              <Picker.Item label="Bar" value="Bar"/>
            </Picker>
            </View>
            <DatePicker 
          date = {this.state.itemDate}
          mode="date"
          style={[styleMain.iputDefault,{marginBottom:20, padding:5}]}
          selectionColor="#ff000"
          placeholder="select date"
          format="MM/DD/YYYY"
          onDateChange = {date =>{
            this.setState({itemDate: date});
          }}
          ></DatePicker>
          
          <TextInput
              label='Name'
              mode="outlined"
              value={this.state.text}
              onChangeText={text => this.setState({ text })}
              style={[{marginBottom:20}]}
            />
            <TextInput
              label='Notes'
              dense={true}
              multiline={true}
              numberOfLines={4}
              mode="outlined"
              value={this.state.text}
              onChangeText={text => this.setState({ text })}
              style={[{marginBottom:20, maxHeight:115}]}
            />
          <Button onPress = {this.addEvent}>Save</Button>
        
      
      </ScrollView>
      </View>
    )
  }
}
export default connect(state => state.ivents)(AddItem)