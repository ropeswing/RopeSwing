import React, {Component} from 'react';
import {View, Text, TextInput, FlatList, Picker} from 'react-native';
import {Appbar, Menu, Button} from 'react-native-paper';
import styleMain from '../../styles/Main.style.js';

const topPadding=24;

export default class Search extends Component{
  state = {
    isVisible: true,
  };
  _openMenu = () => this.setState({ visible: true });
  render(){
    return(
      <View style={[styleMain.mainBackground, {display:'flex', padding:0, paddingTop:topPadding}]}>
        <Appbar style={styleMain.bottom}>
        <Appbar.Action icon="archive" onPress={() => console.log('Pressed archive')} />
        <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
        <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
        <Appbar.Action icon="delete" onPress={() => this._openMenu()}/>
      </Appbar>


      <View>
      <Menu
            visible={this.state.visible}
            onDismiss={this._closeMenu}
            anchor={
              <Button>Show menu</Button>
            }
          >
            <Menu.Item onPress={() => {}} title="Item 1" />
            <Menu.Item onPress={() => {}} title="Item 2" />            
            <Menu.Item  title="Item 3" />
        </Menu>
        {/* <Picker>
            <Picker.Item label="Choose an event" value=""/>
            <Picker.Item label="Movie" value="Movie"/>
            <Picker.Item label="Book" value="Book"/>
            <Picker.Item label="Restaurant" value="Restaurant"/>
            <Picker.Item label="Concert" value="Concert"/>
            <Picker.Item label="Bar" value="Bar"/>
          </Picker>
        <TextInput placeholder="Key word"></TextInput>
        <FlatList>
          Results
        </FlatList> */}
        </View>
      </View>
    );
  }
}