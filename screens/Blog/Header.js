//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const MyComponent = (props) => {
  return (
    <View style={styles.header}>
      <Text style={[styles.text, {marginLeft: props.Button ? 100 : 0}]}>
        {props.title}
      </Text>
      {props.Button && <props.Button />}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f3f3f3',
    height: 80,
    borderWidth: 1,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    alignSelf: 'center',
    flex: 6,
    fontSize: 30,
  },
});

//make this component available to the app
export default MyComponent;
