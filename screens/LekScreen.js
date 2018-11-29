import React from 'react';
import {
  Image,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
  Animated,
} from 'react-native';

export default class LekScreen extends React.Component {
  constructor(props){
    super(props);

    this.state={
      tagOpen: false,
      tagStyle: {
        backgroundColor: '#fff',
        width: new Animated.Value(0),
        height: new Animated.Value(0),
        borderRadius: 6,
        position: 'absolute',
        left: 50,
        top: 50,
      },
    }
  }

  static navigationOptions = {
    title: 'app.json',
  };

  render() {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
      },
    /*   mapContainer: {
        flex: 5,
        backgroundColor: 'grey',
      }, */
    //   bottomMenu: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     marginBottom: 0,
    //     justifyContent: 'space-around',
    //     alignItems: 'center',
    //   },
    //   filterButton:{
    //     borderRadius: 100,
    //     backgroundColor: 'rgba(0, 0, 0, 0.1)',
    //     width:60,
    //     height:60,
    //   },
    //   filterIcon:{
    //     flex: 1,
    //     resizeMode: 'contain',
    //     overflow: 'hidden',
    //     marginLeft: 10,
    //     marginTop: 10,
    //   },
    //   menuText: {
    //     flex: 1,
    //     textAlign: 'center',
    //   },
    //   table:{
    //     width: 50,
    //     height: 50,
    //     backgroundColor: '#C4C4C4',
    //   }
    });

    return (
    //   <View style={styles.container}>
    //     <View style={styles.mapContainer}>
    //       <TouchableHighlight style={styles.table} onPress={this._clickTag.bind(this)}>
    //         <Animated.View style={this.state.tagStyle}>
    //           <Text>{SensorData.time}</Text>
    //           <Text>{SensorData.dd.light}</Text>
    //           <Text>{SensorData.dd.pir}</Text> 
    //         </Animated.View>
    //       </TouchableHighlight> 
    //     </View>

    //     <View style={styles.bottomMenu} >
    //       <TouchableHighlight style={styles.filterButton} onPress={this._clicker.bind(this)}>
    //         <View>
    //           <Image style={styles.filterIcon} source={require('../assets/images/group.png')} capInsets={{left: 5, right: 5, bottom: 5, top: 5}}/>
    //           <Text style={styles.menuText}>Groups</Text>
    //         </View>   
    //       </TouchableHighlight>

    //       <TouchableHighlight style={styles.filterButton} onPress={this._clicker.bind(this)}>
    //         <View>
    //           <Image style={styles.filterIcon} source={require('../assets/images/group.png')}/>
    //           <Text style={styles.menuText}>Study</Text>
    //         </View>
    //       </TouchableHighlight>

    //       <TouchableHighlight style={styles.filterButton} onPress={this._clicker.bind(this)}>  
    //         <View>
    //           <Image style={styles.filterIcon} source={require('../assets/images/group.png')}/>
    //           <Text style={styles.menuText}>Hang</Text>    
    //         </View>    
    //       </TouchableHighlight>
    //     </View>
    //   </View>

        <View style={styles.container}>
            <Text style={styles.Text}>HEJSAN! Vänligen dra inte i Linneas adamsäpple.</Text>
        </View>
    );
  }
}