//import liraries
import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// create a component
const SearchBar = (props) => {
  return (
    <View style={styles.SearchBar}>
      <View style={styles.internalSearch}>
        <Icon name="search" style={styles.icon} />
        <TextInput
          style={styles.TextInput}
          placeholder="Search"
          value={props.term}
          onChangeText={(newTerm) => props.onChange(newTerm)}
          onEndEditing={props.onEndTerm}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  icon: {
    fontSize: 40,
  },
  SearchBar: {
    backgroundColor: '#D3D3D3',
    margin: 20,
    borderRadius: 10,
  },
  internalSearch: {
    flexDirection: 'row',
    padding: 10,
  },
  TextInput: {
    marginLeft: 10,
    fontSize: 25,
  },
});

//make this component available to the app
export default SearchBar;
