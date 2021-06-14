import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import ImageDetails from '../components/ImageDetails';
const ImageScreen = (props) => {
  return (
    <View>
      <Text>Image Screen</Text>
      <ScrollView>
        <ImageDetails
          title="Beach"
          imagetoshow={require('../images/beach.jpeg')}
          cardColor="red"
        />
        <ImageDetails
          title="Forest"
          imagetoshow={require('../images/forest.jpeg')}
          cardColor="yellow"
        />
        <ImageDetails
          title="Mountain"
          imagetoshow={require('../images/mountain.jpg')}
          cardColor="blue"
        />
      </ScrollView>
    </View>
  );
};

export default ImageScreen;
