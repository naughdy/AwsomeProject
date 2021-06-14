//import liraries
import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Header from './Header';
import {Button} from 'react-native-paper';
import {Context} from '../Context/BlogContext';
// create a component

const MyComponent = (props) => {
  const {state, getBlogPost, deleteBlogPost} = useContext(Context);

  useEffect(() => {
    getBlogPost();
  });

  const CustomButton = () => {
    return (
      <Button
        style={styles.textRight}
        onPress={
          // addBlogPost
          () => props.navigation.navigate('BlogAdd')
        }>
        <Text style={styles.textRight}>+</Text>
      </Button>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Blog Home" Button={CustomButton} />
      <FlatList
        data={state}
        keyExtractor={(item) => item.title}
        renderItem={({item}) => {
          return (
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('BlogDetails', {id: item.id})
                }>
                <Text style={{alignSelf: 'center', width: 300}}>
                  {item.title}
                </Text>
                <Text style={{alignSelf: 'center', width: 300}}>
                  {item.content}
                </Text>
              </TouchableOpacity>
              <Button icon="delete" onPress={() => deleteBlogPost(item.id)} />
            </View>
          );
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#f3f3f3',
    height: 80,
    borderWidth: 1,
  },
  textRight: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 30,
    // backgroundColor:'red'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default MyComponent;
