import React,{useState} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from './SignIn'
import SignUp from './SignUp'
 
const Tab = createBottomTabNavigator();
 
const app = () => {
  return (
          <Tab.Navigator>
      <Tab.Screen name="SignIn" component={SignIn} />
      <Tab.Screen name="SignUp" component={SignUp} />
    </Tab.Navigator>
      );
}
 export default app

