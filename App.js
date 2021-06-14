import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ImageScreen from './screens/ImageScreen';
import Books from './screens/Books';
import Home from './screens/Home';
import NameExample from './screens/NameExample';
import Counter from './screens/Counter';
import FlatList from './screens/Flatlist';
import BottomTabNavigator from './screens/BottomTabNavigator';
import TopTabNavigator from './screens/TopTabNavigator';
import Drawer from './screens/Drawer';
import Color from './screens/Color';
import ColorScreen from './screens/ColorScreen';
import BoxLayout from './screens/BoxLayout';
import Restaurant from './screens/Restaurant';
import SingleRestrau from './components/SingleRestrau';
import BlogHome from './screens/Blog/BlogHome';
import BlogDetails from './screens/Blog/BlogDetails';
import BlogAdd from './screens/Blog/BlogAdd';
import BlogEdit from './screens/Blog/BlogEdit';
import {Provider} from './screens/Context/BlogContext';
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ImageScreen" component={ImageScreen} />
          <Stack.Screen name="NameExample" component={NameExample} />
          <Stack.Screen name="Counter" component={Counter} />
          <Stack.Screen name="Flatlist" component={FlatList} />
          <Stack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
          />
          <Stack.Screen name="TopTabNavigator" component={TopTabNavigator} />
          <Stack.Screen name="Drawer" component={Drawer} />
          <Stack.Screen name="Color" component={Color} />
          <Stack.Screen name="ColorScreen" component={ColorScreen} />
          <Stack.Screen name="Books" component={Books} />
          <Stack.Screen name="BoxLayout" component={BoxLayout} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen name="SingleRestrau" component={SingleRestrau} />
          <Stack.Screen name="BlogHome" component={BlogHome} />
          <Stack.Screen name="BlogEdit" component={BlogEdit} />
          <Stack.Screen name="BlogAdd" component={BlogAdd} />
          <Stack.Screen name="BlogDetails" component={BlogDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;

// comment the above code and uncomment the below code to run the login functionality

// import React from 'react'
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import BottomTab from './screens/Authentication/BottomTab'
// import SuccessScreen from './screens/Authentication/SuccessScreen'

// const Stack = createStackNavigator();

// const App = () => {
//  return (
//    <NavigationContainer>
//    <Stack.Navigator>
//    <Stack.Screen name="BottomTab" component={BottomTab} />
//     <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
//    </Stack.Navigator>
//    </NavigationContainer>
//  );
// }
// export default App
