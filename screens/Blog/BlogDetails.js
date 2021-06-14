//import liraries
import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from './Header';
import {Button} from 'react-native-paper';
import {Context} from '../Context/BlogContext';
// create a component

const MyComponent = (props) => {
  const {state} = useContext(Context);
  const blogPost = state.find((item) => item.id === props.route.params.id);
  const CustomButton = () => {
    return (
      <Button
        style={styles.textRight}
        icon="pencil"
        onPress={() =>
          props.navigation.navigate('BlogEdit', {id: props.route.params.id})
        }
      />
    );
  };
  return (
    <View style={styles.container}>
      <Header title="Blog Details" Button={CustomButton} />
      <Text>{blogPost.title}</Text>
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
});

//make this component available to the app
export default MyComponent;
