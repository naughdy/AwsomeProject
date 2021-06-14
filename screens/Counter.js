import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
const Counter = () => {
  const [number, setNumber] = useState(0);
  const buttonPressed = () => {
    setNumber(number + 1);
  };
  const buttonPressed2 = () => {
    setNumber(number - 1);
  };
  return (
    <View>
      <Text style={Styles.textStyle}>This is an assignment</Text>
      <Text style={Styles.textStyle}>The variable is {number}</Text>
      <View style={Styles.viewStyle}>
        <Button onPress={() => buttonPressed()} title="Increment" />
      </View>
      <View style={Styles.viewStyle}>
        <Button onPress={() => buttonPressed2()} title="Decrement" />
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  textStyle: {
    fontSize: 35,
    padding: 5,
  },
  viewStyle: {
    padding: 5,
  },
});
export default Counter;
