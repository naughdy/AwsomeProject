import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const Home = (props) => {
  return (
    <View>
      <Text style={{alignSelf: 'center', fontSize: 40}}>All Assignments</Text>
      <View style={styles.buttonStyle}>
        <Button
          onPress={() => props.navigation.navigate('NameExample')}
          title="Name Example"
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          onPress={() => props.navigation.navigate('ImageScreen')}
          title="Image and Props Example"
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          onPress={() => props.navigation.navigate('Counter')}
          title="Counter Example"
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          onPress={() => props.navigation.navigate('Flatlist')}
          title="Flatlist Example"
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          onPress={() => props.navigation.navigate('BottomTabNavigator')}
          title="Bottom Tab Example"
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          onPress={() => props.navigation.navigate('TopTabNavigator')}
          title="Top Tab Example"
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          onPress={() => props.navigation.navigate('Drawer')}
          title="Drawer Example"
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          onPress={() => props.navigation.navigate('Color')}
          title="Color Example"
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          onPress={() => props.navigation.navigate('ColorScreen')}
          title="Color Screen"
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          onPress={() => props.navigation.navigate('Books')}
          title="Books"
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          onPress={() => props.navigation.navigate('BoxLayout')}
          title="Calculator"
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          onPress={() => props.navigation.navigate('Restaurant')}
          title="Restaurant"
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          onPress={() => props.navigation.navigate('BlogHome')}
          title="Blogs"
        />
      </View>
      {/* <View style={styles.buttonStyle}>
      <Button onPress={() => props.navigation.navigate('Authentication')} title="Authentication"></Button>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    margin: 5,
  },
});

export default Home;
