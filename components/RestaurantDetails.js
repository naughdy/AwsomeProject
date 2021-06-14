//import liraries
import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

// create a component
const RestaurantDetails = (props) => {
  const navigation = useNavigation();
  if (props.data.length == 0) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        data={props.data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('SingleRestrau', {id: item.id})
              }>
              <View style={{margin: 5}}>
                <Image
                  source={{uri: item.image_url}}
                  style={{width: 200, height: 150}}
                />
                <Text>{item.name}</Text>
                <Text style={{color: '#D3D3D3'}}>
                  {item.rating} stars, {item.review_count} reviews
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        horizontal={true}
        keyExtractor={(item, index) => 'key' + index}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default RestaurantDetails;
