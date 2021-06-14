import React,{useState} from 'react'
import {Text, StyleSheet, View, Button} from 'react-native'
 
const Example = () => {
 return <Text>This is a sub component of the example</Text>
}
 
const name = "Neha"
 
 
 
const App = () => {
 const [name,setName] = useState('Neha')
 const [lastname,setlastname] = useState('Bafna')
 const buttonPressed = () =>{
 setName('Code')
 setlastname('Chaser')
 }
 return (
 <View>
 <Text style={Styles.textStyle}>This is an Example</Text>
 <Text style={Styles.textStyle}>My name is {name}</Text>
 <Button onPress={()=>buttonPressed()} title='Press Me!'></Button>
 </View>
 )
}
 
const Styles = StyleSheet.create({
 textStyle: {
   fontSize: 40
 }
})
 
export default App
