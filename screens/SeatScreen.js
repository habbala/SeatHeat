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
    return (
      <View>
        <Text>{SensorData.time}</Text>
      </View>
    );
  }
}