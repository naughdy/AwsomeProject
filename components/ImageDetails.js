import React, { Component } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

const ImageDetails = (props) =>{
    console.log(props)
    return (
         <Card style={{margin:20,backgroundColor:props.cardColor}}>
    <Card.Title/>
    <Card.Content>
      <Paragraph>{props.title}</Paragraph>
      <Image source={props.imagetoshow} style={{width:200,height:200}}></Image>
    </Card.Content>
    </Card>
    );
  }

export default ImageDetails;
