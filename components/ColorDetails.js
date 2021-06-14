import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-paper';

const ColorDetails = (props) => {
  return (
    <View>
      <Text>{props.color}: </Text>
      <Button style={styles.Button} onPress={props.increment}>
        <Text style={styles.Text}>Increment {props.color}</Text>
      </Button>
      <Button style={styles.Button} onPress={props.decrement}>
        <Text style={styles.Text} >Decrement {props.color}</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  Button: {
    backgroundColor: 'rgb(80,80,255)',
    margin: 5,
  },
  Text: {
    color: 'white',
  },
});

export default ColorDetails;
