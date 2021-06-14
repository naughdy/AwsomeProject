import React from 'react'
import { Text, View } from "react-native";
const FlatlistDetails = (props) => {
  return (
      <View>
      <Text style={{color:props.route.params.item.backgroundColor,fontSize:40,alignSelf:'center'}}>{props.route.params.item.colorname}</Text>
   <Text style={{fontSize:25,alignSelf:'center'}}>{props.route.params.item.about}</Text>
   </View>
  );
}
export default FlatlistDetails