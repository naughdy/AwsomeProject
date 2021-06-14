import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import ImageDetails from '../components/ImageDetails'
const ImageScreen = (props) => {
    return (
      <View>
        <Text>Image Screen</Text>
        <ScrollView>
        <ImageDetails title="Beach" imagetoshow={require("../images/beach.jpeg")} cardColor="red"></ImageDetails>
        <ImageDetails title="Forest" imagetoshow={require("../images/forest.jpeg")} cardColor="yellow"></ImageDetails>
        <ImageDetails title="Mountain" imagetoshow={require("../images/mountain.jpg")} cardColor="blue"></ImageDetails>
        </ScrollView>
      </View>
    );

}

export default ImageScreen;
