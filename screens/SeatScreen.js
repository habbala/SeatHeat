import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SensorData} from '../mock/MockObjects.js';
import { MonoText } from '../components/StyledText';

export default class SeatScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
      },

      bottomMenu: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'column',
        marginBottom: 0,
      },
    });

    return (
      <View style={styles.container}>
        <View style={styles.bottomMenu}>
          <Text>{SensorData.time}</Text>
        </View>
      </View>
    );
  }
}