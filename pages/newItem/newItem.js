import React, {Component} from 'react';
import {Text, View, Picker, ScrollView} from 'react-native';
import { TextInput } from 'react-native-paper';
import styleMain from '../../styles/Main.style.js';
import DatePicker from 'react-native-datepicker'
import NavDrawer from "../../components/NavDrawer"
const topPadding=0;

export default class AddItem extends Component{
  state = {
    itemDate: new Date(),
    text:"asa",
    category:""
  };
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
          
        
      
      </ScrollView>
      </View>
    )
  }
}