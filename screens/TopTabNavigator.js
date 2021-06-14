import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Screen1 from '../components/Screen1';
import Screen2 from '../components/Screen2';
const Tab = createMaterialTopTabNavigator();

const App = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Screen1" component={Screen1} />
      <Tab.Screen name="Screen2" component={Screen2} />
    </Tab.Navigator>
  );
};
export default App;
