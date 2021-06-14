//import liraries
import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './Header';
import {Context} from '../Context/BlogContext';
import BlogForm from '../../components/BlogForm';
// create a component

const MyComponent = (props) => {
  const {addBlogPost} = useContext(Context);

  return (
    <View style={styles.container}>
      <Header title="Add Blog" />
      <BlogForm
        onSubmit={(title, content) => {
          addBlogPost(title, content, () =>
            props.navigation.navigate('BlogHome'),
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
  },
});

//make this component available to the app
export default MyComponent;
