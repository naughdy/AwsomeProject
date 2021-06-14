import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/button'
const BoxLayout = () => {
    const [data,setData] = useState('0')
    const [isPositive,setIsPostive] = useState(false)
    const handleNumberPressed = (value) => {
      if(data=='0'){
        setData(value)
      }else{
        setData(data+value)
      }
    }

    const clear = () => {
      setData("0")
    }

    const equalTo = () => {
      try{
        setData(
          String(eval(data)).length > 3 && String(eval(data)).includes(".") ? String(eval(data)).toFixed(4) : String(eval(data))
        )
      }catch(e){
        console.log(e)
      }
    }

    const plusminus = () => {
      if(isPositive){
        setData(data.substring(1))
      }else{
        setData("-"+data)
      }
    }

    return (
        <View style={{flex:1,justifyContent:'flex-end',flexDirection:'column',alignItems:'center',padding:10}}>
        <Text style={{fontSize:50,alignSelf:'flex-end',margin:20}}>{data}</Text>
        <View style={{flexDirection:'row'}}>
        <Button function={()=>clear()} text="C" color="#d3d3d3" textColor="black"></Button>
        <Button function={()=>{
          setIsPostive(prevState=>!prevState)
          plusminus()
        }} text="+/-" color="#d3d3d3" textColor="black"></Button>
        <Button function={handleNumberPressed} text="%" color="#d3d3d3" textColor="black"></Button>
        <Button function={handleNumberPressed} text="/" color="#ffa500" ></Button>
        </View>
        <View style={{flexDirection:'row'}}>
        <Button function={handleNumberPressed} text="7"></Button>
        <Button function={handleNumberPressed} text="8"></Button>
        <Button function={handleNumberPressed} text="9"></Button>
        <Button function={handleNumberPressed} text="*" color="#ffa500"></Button>
        </View>
        <View style={{flexDirection:'row'}}>
        <Button function={handleNumberPressed} text="4"></Button>
        <Button function={handleNumberPressed} text="5"></Button>
        <Button function={handleNumberPressed} text="6"></Button>
        <Button function={handleNumberPressed} text="-" color="#ffa500"></Button>
        </View>
        <View style={{flexDirection:'row'}}>
        <Button function={handleNumberPressed} text="1"></Button>
        <Button function={handleNumberPressed} text="2"></Button>
        <Button function={handleNumberPressed} text="3"></Button>
        <Button function={handleNumberPressed} text="+" color="#ffa500"></Button>
        </View>
        <View style={{flexDirection:'row'}}>
        <Button function={handleNumberPressed} type="double" text="0"></Button>
        <Button function={handleNumberPressed} text="."></Button>
        <Button function={()=>equalTo()} text="=" color="#ffa500"></Button>
        </View>
      </View>
    );
}


export default BoxLayout;
