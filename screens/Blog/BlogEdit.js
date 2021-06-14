//import liraries
import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './Header';
import {Context} from '../Context/BlogContext';
import BlogForm from '../../components/BlogForm';
// create a component

const MyComponent = (props) => {
  const {editBlogPost, state} = useContext(Context);
  const blogPost = state.find((item) => item.id === props.route.params.id);
  return (
    <View style={styles.container}>
      <Header title="Edit Blog" />
      <BlogForm
        initialValues={{title: blogPost.title, content: blogPost.content}}
        onSubmit={(title, content) => {
          editBlogPost(props.route.params.id, title, content, () =>
            props.navigation.pop(),
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
