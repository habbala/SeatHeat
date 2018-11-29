import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import TagComponent from '../TagComponent/TagComponent.js';

export default class TableComponent extends React.Component {

    constructor(props){
        super(props);
    
        this.state={
          tagOpen: true,
        }
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
      table:{
        width: 50,
        height: 50,
        backgroundColor: '#C4C4C4',
      }
    });

    return (
        <TouchableHighlight style={{...styles.table, left: this.props.table.pos.xPos, top: this.props.table.pos.yPos}} onPress={this._clickTag.bind(this)}>
            <TagComponent table={this.props.table} tagOpen={this.state.tagOpen}/>
        </TouchableHighlight> 
    );
  }
}