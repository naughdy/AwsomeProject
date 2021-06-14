import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={{fontSize:40}}> This is Tab A </Text>
      </View>
    );
  }
}

export default Screen1;
