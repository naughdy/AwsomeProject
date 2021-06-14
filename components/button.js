import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

const button = (props) => {
  return (
    <Button
      onPress={()=>props.function(props.text)}
      style={{
        height: 100,
        width: props.type != undefined ? 200 : 100,
        backgroundColor: props.color != undefined ? props.color : 'gray',
        borderRadius: 50,
        justifyContent: 'center',
        margin: 3,
      }}>
      <Text
        style={{
          alignSelf: 'center',
          color: props.textColor != undefined ? props.textColor : 'white',
          fontSize: 30,
        }}>
        {props.text}
      </Text>
    </Button>
  );
};

export default button;
