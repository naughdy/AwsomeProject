//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

// create a component
const MyComponent = (props) => {
  const [blogTitle, setBlogTitle] = useState(props.initialValues.title);
  const [blogContent, setBlogContent] = useState(props.initialValues.content);
  return (
    <View style={styles.container}>
      <View style={styles.textInput}>
        <TextInput
          label="Enter Title"
          style={{margin: 20}}
          value={blogTitle}
          onChangeText={(text) => setBlogTitle(text)}
        />
        <TextInput
          label="Enter Content"
          style={{margin: 20}}
          value={blogContent}
          onChangeText={(text) => setBlogContent(text)}
        />
      </View>
      <Button
        style={[styles.textRight, {marginTop: 20}]}
        onPress={() => props.onSubmit(blogTitle, blogContent)}>
        <Text style={{fontSize: 25}}>Save</Text>
      </Button>
    </View>
  );
};

MyComponent.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});

//make this component available to the app
export default MyComponent;
