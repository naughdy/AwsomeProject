import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const Color = (props) => {
    const [color,setColor] = useState([])
    const createColor = () => {
        const Red = Math.floor(Math.random() * 265)
        const Green = Math.floor(Math.random() * 265)
        const Blue = Math.floor(Math.random() * 265)
        return `rgb(${Red}, ${Green}, ${Blue})`
    }
    console.log("Array of Colors: ",color)
    return (
        <View>
            <Button title="Add Color" onPress={()=>setColor([...color,createColor()])}></Button>
            <FlatList
            data={color}
            renderItem={({item})=>{
                return <View style={[styles.ColorView,{backgroundColor:item}]}></View>
            }}
            keyExtractor={(item)=>item}
            >
            </FlatList>
        </View>
    );
}
const styles = StyleSheet.create({
    ColorView: {
        width: 100,
        height: 100,
    }
})

export default Color;