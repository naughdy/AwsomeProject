import React,{useState} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from '../../components/Screen1'
import Screen2 from '../../components/Screen2'
 
const Tab = createBottomTabNavigator();
 
const Button2 = () => {
  return (
          <Tab.Navigator>
      <Tab.Screen name="Tab A" component={Screen1} />
      <Tab.Screen name="Tab B" component={Screen2} />
    </Tab.Navigator>
      );
}
 export default Button2