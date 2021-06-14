//import liraries
import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp'
// create a component
const SignleRestrau = (props) => {
    console.log(props)
    const [result,setResult] = useState([])
    const [id,setId] = useState(props.route.params.id)
    useEffect(()=>{
        searchApi()
    },[])

    const searchApi = async() =>{
        console.log("coming inside search api ",`yelp.get(/${id})`)
        let response = null
        try{
            response = await yelp.get(`/${id}`)
        }catch(e){
            console.log(e)
        }
        console.log(response)
        setResult(response.data.photos)
    }

    return (
            <FlatList
            data={result}
            renderItem={({item})=>{
                return <Image source={{uri:item}} style={{width:300,height:250}}></Image>
            }}
            keyExtractor={(item,index)=>'key'+index}
        >

        </FlatList>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default SignleRestrau;
