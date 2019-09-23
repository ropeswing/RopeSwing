import React, {Component} from 'react';
import {View, Text, ScrollView  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styleMain from '../../styles/Main.style.js';
import NavDrawer from "../../components/NavDrawer"


const topPadding=0;
const returnResults = [
  { name: "Kurt Cooney", liked: true, outerCircle: 654, innerCircle: 34, id: 1},
  { name: "Dalton Whitaker", liked: true, outerCircle: 654, innerCircle: 34, id: 123},
  { name: "Marcelina Dominguez", liked: false, outerCircle: 349, innerCircle: 12, id: 379},
  { name: "Tommie Cullen", liked: false, outerCircle: 3663, innerCircle: 18, id: 874},
  { name: "Yvette Mcpherson", liked: true, outerCircle: 127, innerCircle: 42, id: 342},
  { name: "Ayomide Best", liked: false, outerCircle: 110, innerCircle: 2, id: 9932},
];

export default class OtherPerson extends Component{
  state = {
    selectedPerson:{},
    itemDate: new Date(),
    text:"asa",
    category:"",
    returnedIcons: ["Movies", "Music", 'You Tube', 'Fashion', 'News', 'Concerts', 'Books', 'Restaurants']
  };
  
  componentDidMount = () =>{
    this.setState({selectedPerson: returnResults.find(item => item.id === this.props.navigation.getParam("userId", 1))});
  };
componentWillReceiveProps=params=>{
  this.setState({selectedPerson: returnResults.find(item => item.id === params.navigation.getParam("userId", 1))});
}
  buildInterests = () => {
    let temp = this.state.returnedIcons.join(", ");
    return temp;
  }
  render(){  
    return(
      <View style={styleMain.container}>        
        <NavDrawer navigation={this.props.navigation} title={this.props.title}/>
        <ScrollView  style={[styleMain.formbackground, {marginTop:topPadding, flexGrow:1}]}>
          <View style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
            <View style={{padding:12, flex:5 }}>    
              <Text>
                <Text style={{color:'#fce181', fontSize:24 }}>{`${this.state.selectedPerson.name}\n`}</Text>
                <Text>{`Atlanta, GA`}</Text>                
              </Text>
            </View>
            <View style={{padding:12, flex:1}}>  
              <FontAwesomeIcon style={{alignSelf:"flex-end"}} color={'#fce181'} size={32} icon={['fa', "user-plus"]} onPress={()=> this.props.navigation.navigate("Personal")}/>
            </View>
          </View>

          
          
        </ScrollView >
      </View>
    );
  }
}

