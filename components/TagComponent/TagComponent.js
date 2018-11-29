import React from 'react';
import {Text, Animated,} from 'react-native';
import {SensorData} from '../../mock/MockObjects.js';

export default class TagComponent extends React.Component{
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
            textStyle:{
                fontSize: new Animated.Value(0),
            }
        }
    }

    _openTag(){
        Animated.timing(this.state.tagStyle.height, {
          toValue: 100,
          duration: 200,
        }).start();
    
        Animated.timing(this.state.tagStyle.width, {
          toValue: 100,
          duration: 200,
        }).start();

        Animated.timing(this.state.textStyle.fontSize, {
            toValue: 24,
            duration: 200,
          }).start();
    }
    
    _closeTag(){
        Animated.timing(this.state.tagStyle.height, {
          toValue: 0,
          duration: 190,
        }).start();
    
        Animated.timing(this.state.tagStyle.width, {
          toValue: 0,
          duration: 100,
        }).start();

        Animated.timing(this.state.textStyle.fontSize, {
            toValue: 0,
            duration: 1,
          }).start();
    }

    render(){

        if(this.props.tagOpen){
            this._closeTag();
        } else {
            this._openTag();
        }

        return(
            <Animated.View style={this.state.tagStyle}>
                <Animated.Text style={this.state.textStyle}>Light: {SensorData.dd.light}</Animated.Text>
                <Animated.Text style={this.state.textStyle}>People: {SensorData.dd.pir}</Animated.Text> 
                <Animated.Text style={this.state.textStyle}>Chairs: {this.props.table.Chairs}</Animated.Text> 
            </Animated.View>
        );
    }
}