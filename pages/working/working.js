import React from "react";
import { Text, View, ScrollView } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';

import { Appbar, Drawer } from "react-native-paper";
import { SafeAreaView } from "react-navigation";


class First extends React.Component {
  render() {
    return (
      <View>
        <Appbar.Header>
        <Appbar.Content title="First Page" />
          <Appbar.Action
            icon="menu"
            onPress={() =>{
              console.log(this.props)
              this.props.navigation.dispatch(DrawerActions.toggleDrawer())
            }
            }
          />
          
        </Appbar.Header>
        <Text>First Page</Text>
      </View>
    );
  }
}

class Second extends React.Component {
  render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.Action
            
            icon="menu"
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.toggleDrawer())
            }
          />
          <Appbar.Content title="Second Page" />
        </Appbar.Header>
        <Text> This is the Second Page</Text>
      </View>
    );
  }
}

const Menu = createDrawerNavigator(
  {
    First: { screen: First },
    Second: { screen: Second }
  },
  {
    contentComponent: props => (
      <ScrollView>
        <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
          <Drawer.Item
            label="First Page"
            active="true"
            onPress={() => props.navigation.navigate("First")}
          />
          <Drawer.Item
            label="Second Page"
            active="true"
            onPress={() => props.navigation.navigate("Second")}
          />
        </SafeAreaView>
      </ScrollView>
    )
  }
);

const AppNav = createAppContainer(Menu);

export default class App extends React.Component {
  render() {
    return(
      <AppNav />
    ) 
  }
}