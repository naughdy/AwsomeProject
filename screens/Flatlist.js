import React,{useState} from 'react'
import {Text, StyleSheet, View, Button, FlatList} from 'react-native'
 
const App = () => {
 let object1 = [
   {name:'Loop',key:'A'},
   {name:'Console',key:'B'},
   {name:'Debug',key:'C'},
   {name:'Null',key:'D'},
 ]
 return (
 <View>
 <Text style={Styles.textStyle}>This is an assignment</Text>
   <FlatList
   data={object1}
   renderItem={({item})=>{
     console.log(item)
   return <Text style={Styles.viewStyle}>{item.name}</Text>
   }}
   keyExtractor={item=>{
       item.key
   }}
   >
   </FlatList>
 </View>
 )
}
 const Styles = StyleSheet.create({
 textStyle: {
   fontSize: 35,
   padding: 5
 },
 viewStyle: {
   padding: 80
 }
})
 
export default App