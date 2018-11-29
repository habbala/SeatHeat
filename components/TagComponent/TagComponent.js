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
        }
    }

    _openTag(){
        Animated.timing(this.state.tagStyle.height, {
          toValue: 100
        }).start();
    
        Animated.timing(this.state.tagStyle.width, {
          toValue: 100
        }).start();
    }
    
    _closeTag(){
        Animated.timing(this.state.tagStyle.height, {
          toValue: 0
        }).start();
    
        Animated.timing(this.state.tagStyle.width, {
          toValue: 0
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
                <Text>{SensorData.time}</Text>
                <Text>{SensorData.dd.light}</Text>
                <Text>{SensorData.dd.pir}</Text> 
            </Animated.View>
        );
    }
}