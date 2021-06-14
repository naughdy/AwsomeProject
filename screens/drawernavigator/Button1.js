import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FlatlistScreen from './FlatlistScreen';
import FlatlistDetails from './FlatlistDetails';

const Stack = createStackNavigator();

const Button1 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FlatlistScreen" component={FlatlistScreen} />
      <Stack.Screen name="FlatlistDetails" component={FlatlistDetails} />
    </Stack.Navigator>
  );
};
export default Button1;
