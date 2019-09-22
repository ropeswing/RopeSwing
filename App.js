import React from 'react';
import { AppRegistry, Text, View, ScrollView, StyleSheet  } from "react-native";
import { createAppContainer, DrawerNavigator } from "react-navigation";
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { Appbar, Drawer } from "react-native-paper";
import { SafeAreaView } from "react-navigation";

//PAGES
import CircleNav from './pages/circleNav/CircleNav';
import NewItem from './pages/newItem/NewItem'
import Profile from './pages/profile/profile'
import Personal from './pages/profile/personals'
import InnerCircle from './pages/innerCircle/InnerCircle'
import Interests from "./pages/categoryList/CategoryList"
import OtherPerson from "./pages/profile/otherPerson";


//FONTS
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import { faCircle, faEdit, faUserPlus, faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faCircle, faEdit, faUserPlus,faSquare, faCheckSquare)
library.add(far, faCircle, faEdit, faUserPlus, faSquare, faCheckSquare )

import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';



const user=1;

const theme = {
  ...DefaultTheme,
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: '#cacdbb',
    placeholder :"#fce181",
    text: '#fce181',
    underlineColor:'transparent',
    background : '#026670',
    backdrop  :"#ff0000",
  },
  
};
const drawer = {
  activeBackgroundColor: "#cacdbb",
  activeTintColor:  "black", 
}



const Menu = createDrawerNavigator( 

 
  {
    FindEvent: { screen: (props) => <CircleNav {...props} title="Find an event"/>, navigationOptions: {drawerLabel: 'Find an event'} } ,
    NewItem: { screen: (props) => <NewItem {...props} title="Add an item"/>, navigationOptions: {drawerLabel: 'Add an item'} } ,
    Profile: { screen: (props) => <Profile {...props} title="Profile"/>, path: '1', params: {userId:1}, navigationOptions: {drawerLabel: 'View your profile'}  } ,
    InnerCircle: { screen: (props) => <InnerCircle {...props} title="Your inner circle"/>, navigationOptions: {drawerLabel: 'View your inner circle'} } ,
    OuterCircle: { screen: (props) => <InnerCircle {...props} title="Your outer circle"/>, navigationOptions: {drawerLabel: 'View your outer circle'} } ,
    FindPerson: { screen: (props) => <InnerCircle {...props} title="Find a Person"/>, navigationOptions: {drawerLabel: 'People search'} } ,
    Interests: { screen: (props) => <Interests {...props} title="Available Interests"/>, navigationOptions: {drawerLabel: ()=>null} } ,
    Personal: { screen: (props) => <Personal {...props} title="User Information"/>, navigationOptions: {drawerLabel: ()=>null} } ,
    OtherPerson: { screen: (props) => <OtherPerson {...props} title="User Information"/>, navigationOptions: {drawerLabel: ()=>null} } ,
    About: { screen: (props) => <CircleNav {...props} title="About RopeSwing"/>, navigationOptions: {drawerLabel: "About"} } ,
  },  
  {
    drawerBackgroundColor:"#dfe1d6",    
    contentComponent: props => (
    <ScrollView>
      <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
        <DrawerNavigatorItems {...props}  />      
      </SafeAreaView>
    </ScrollView>
    ),
    contentOptions: drawer
    
  }  
);


const AppNav = createAppContainer(Menu);
export default function App() {
  
  return (  
    <PaperProvider theme={theme}>
      {/* <CircelNav/>       */}
      {/* <NewItem/> */}
      <AppNav/>
      {/* <Search/> */}

    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
AppRegistry.registerComponent('RopeSwing', () => App);