import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Screen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={{fontSize:40}}> This is Tab B </Text>
      </View>
    );
  }
}

export default Screen2;
