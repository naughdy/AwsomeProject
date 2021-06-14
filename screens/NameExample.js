import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
const NameExample = () => {
  const [name, setName] = useState('Neha');
  const buttonPressed = () => {
    setName('Code Chaser');
  };
  return (
    <View>
      <Text style={Styles.textStyle}>This is an Example</Text>
      <Text style={Styles.textStyle}>My name is {name}</Text>
      <Button onPress={() => buttonPressed()} title="Press Me To change the name to Code Chaser!"></Button>
    </View>
  );
};

const Styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
  },
});

export default NameExample;
