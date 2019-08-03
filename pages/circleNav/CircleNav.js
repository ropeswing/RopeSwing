

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {Turntable} from 'react-native-turntable'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Turntable
          radius={200}
          distance={75}
          enableUserRotate
          turntableRotate={30}
          // handlerOfRotate={()=>alert('触发')}
          customStyle={{ backgroundColor: '#E14C46' }}
        >
          <TouchableOpacity>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>6</Text>
          </TouchableOpacity>
        </Turntable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

// import React, { Component } from 'react';
// import {StyleSheet, PanResponder, View, Animated }from 'react-native';

// export default class CircleNav extends Component{
//   constructor() {
//     super();
//     this.state = {
//       pan: new Animated.ValueXY()
//     };
//   }

//   componentWillMount =() => {
//     this.state.pan.setValue({ x:150, y:300});   
//     this._val = { x:150, y:300 }
//     this.state.pan.addListener(value => this._val = value);

//     this.panResponder = PanResponder.create({
//       onStartShouldSetPanResponder: (e, gesture) => {
        
//         console.log('CLICK gesture', gesture )
//         console.log('CLICK e', e.nativeEvent.pageX , this._val.x )
//         return true;
//       }, 
//       onPanResponderMove: Animated.event([
//         null, 
//         { dx: 0, dy: 0 } 
//       ], 
//       {listener: (event, gestureState) => {
//         console.log(" MOVING x", this._val.x , this.state.pan.x, gestureState.dx )
//         this.state.pan.setValue({ x: gestureState.dx, y:gestureState.dy});   
//       }}
//       ),
//       onPanResponderRelease: (evt, gestureState) => {
//         console.log("DONE MOVING x",this.state.pan.x, "y",this.state.pan.y )
//         //this.state.pan.setValue({ x:gestureState.dx, y:gestureState.dy});  
//       },
//     })
    
//   };

  


//   render(){   
//       let panStyle = {
//         transform: this.state.pan.getTranslateTransform()
//       }
//       return (
       
//           <Animated.View
//             {...this.panResponder.panHandlers}
//             style={[panStyle, styles.circle]}>
//             <View style={styles.dot}></View>
//           </Animated.View>

         
//       );    
//   }
// };
// let CIRCLE_RADIUS = 30;
// let styles = StyleSheet.create({
//   circle: {
//     backgroundColor: "skyblue",
//     width: CIRCLE_RADIUS * 2,
//     height: CIRCLE_RADIUS * 2,
//     borderRadius: CIRCLE_RADIUS
//   },

//   dot: {
//     backgroundColor: "black",
//     width: 1,
//     height: 30,    
//     left:30,
//     top:0
//   },

//   circle3: {
//     backgroundColor: "skyblue",
//     width: CIRCLE_RADIUS * 2,
//     height: CIRCLE_RADIUS * 2,
//     borderRadius: CIRCLE_RADIUS,
//     left:100
//   }
// });