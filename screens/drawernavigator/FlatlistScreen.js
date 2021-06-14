import React from 'react'
import { Text, View, FlatList } from "react-native";
import { Button } from 'react-native-paper';
let colors = [
    {colorname:'Red',about:'this is color red',backgroundColor:'red',key:'1'},
    {colorname:'Blue',about:'this is color blue',backgroundColor:'blue',key:'2'},
    {colorname:'Green',about:'this is color green',backgroundColor:'green',key:'3'},
    {colorname:'Black',about:'this is color black',backgroundColor:'black',key:'4'},
]
const FlatlistScreen =(props) => {
  return (
   <View>
       <FlatList
       data = {colors}
       renderItem = {({item})=>{
           return <View>
               <Button style={{backgroundColor:item.backgroundColor}} onPress={()=>props.navigation.navigate('FlatlistDetails',{item:item})}>
                   <Text style={{color:'white'}}>{item.colorname}</Text>
               </Button>
           </View>
       }}
       keyExtractor = {(item)=>item.key}
       >

       </FlatList>
   </View>
  );
}
export default FlatlistScreen