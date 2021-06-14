import React, { Component } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

const ImageDetails = (props) =>{
    console.log(props)
    return (
         <Card style={{margin:25,height:'auto',borderRadius:6}}>
       {/* <Card.Cover source={{ uri: props.imagetoshow }}/> */}
      <Image source={{uri:props.imagetoshow}} style={{width:150,height:200,resizeMode:'cover',alignSelf:'center',borderRadius:6}}></Image>
    </Card>
    );
  }

export default ImageDetails;
