
import React from 'react';
import { Text, View } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


const Sensor = ({ data: { loading, error, sensor } }) => {
  if (loading) {
    return <Text>Loading</Text>;
  } if (error) {
    return <Text>Error</Text>
  } else {
    return (
      <View>
        <Text>{sensor.time}</Text>
      </View>
    );
  }
}

export default graphql(gql`
  query sensor {
    sensor {
      time
    }
  }
`)(Sensor);