import React, { useState } from 'react'
import { Text, View } from "react-native";
import { TextInput } from 'react-native-paper';
const Button3 =() => {
  const [ name, setName ]=useState('')
  return (
   <View>
     <TextInput
      label="Name"
      value={name}
      onChangeText={text => setName(text)}
     ></TextInput>
     <Text style={{fontSize:40}}>My name is {name}</Text>
   </View>
  );
}
export default Button3