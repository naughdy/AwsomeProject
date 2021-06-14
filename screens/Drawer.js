import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Button1 from './drawernavigator/Button1'
import Button2 from './drawernavigator/Button2'
import Button3 from './drawernavigator/Button3'

// import Screen2 from '../components/Screen2'

const Drawer = createDrawerNavigator();
 
const MyDrawer =() => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Button 1" component={Button1} />
      <Drawer.Screen name="Button 2" component={Button2} />
      <Drawer.Screen name="Button 3" component={Button3} />
      {/* <Drawer.Screen name="Screen2" component={Screen2} /> */}
    </Drawer.Navigator>
  );
}
export default MyDrawer