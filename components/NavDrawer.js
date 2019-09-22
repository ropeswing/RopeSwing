import React from "react";
import { Text, View, ScrollView } from "react-native";
import {  DrawerActions } from 'react-navigation-drawer';

import { Appbar, Drawer } from "react-native-paper";

export default class DrawerNav extends React.Component {
  render() {
    return (     
      <Appbar.Header>
        <Appbar.Content title={this.props.title} />
          <Appbar.Action
            icon="menu"
            onPress={() =>{
              this.props.navigation.dispatch(DrawerActions.toggleDrawer())
            }
            }
          />
      </Appbar.Header>
    );
  }
}

