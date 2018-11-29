import React from 'react';
import {
  ImageBackground,
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import TagComponent from '../components/TagComponent/TagComponent.js';

export default class SeatScreen extends React.Component {
  constructor(props){
    super(props);

    this.state={
      tagOpen: true,
      filter: '',
    }
  }

  static navigationOptions = {
    title: 'app.json',
  };

  _setFilter(filter){
    this.setState({filter: filter});
    Alert.alert('Filter: ' + this.state.filter);
  }

  _clickTag(){
    if(this.state.tagOpen){
      this.setState({tagOpen: false});
    } else {
      this.setState({tagOpen: true});
    }
  }

  render() {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
      },
      mapContainer: {
        flex: 5,
        backgroundColor: 'grey',
      },
      bottomMenu: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 0,
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      filterButton:{
        borderRadius: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        width:60,
        height:60,
        alignItems: 'center',
        justifyContent: 'center',
      },
      filterIcon:{
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%', 
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      menuText: {
        textAlign: 'center',
      },
      table:{
        width: 50,
        height: 50,
        backgroundColor: '#C4C4C4',
      }
    });

    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <TouchableHighlight style={styles.table} onPress={this._clickTag.bind(this)}>
            <TagComponent tagOpen={this.state.tagOpen}/>
          </TouchableHighlight> 
        </View>

        <View style={styles.bottomMenu} >
          <TouchableHighlight style={styles.filterButton} onPress={this._setFilter.bind(this)}>
            <ImageBackground style={styles.filterIcon} source={require('../assets/images/group.png')} capInsets={{left: 5, right: 5, bottom: 5, top: 5}}>
              <Text style={styles.menuText}>GRUPP</Text>
            </ImageBackground>
          </TouchableHighlight>

          <TouchableHighlight style={styles.filterButton} onPress={this._setFilter.bind(this)}>
            <ImageBackground style={styles.filterIcon} source={require('../assets/images/solo.png')}>
            <Text style={styles.menuText}>PLUGG</Text>
            </ImageBackground>
          </TouchableHighlight>

          <TouchableHighlight style={styles.filterButton} onPress={this._setFilter.bind(this)}>  
            <ImageBackground style={styles.filterIcon} source={require('../assets/images/coffee.png')}>
              <Text style={styles.menuText}>FIKA</Text>
            </ImageBackground>   
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}