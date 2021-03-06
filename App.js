import 'react-native-gesture-handler';
import React, { Component } from 'react';

import Feed from './src/feed';
import Details from './src/details';

import About from './src/screens/drawer/about';
import Bio from './src/screens/drawer/bio';
import Contacts from './src/screens/drawer/contacts';

import Tab1 from './src/screens/tabs/tab1';
import Tab2 from './src/screens/tabs/tab2';
import Tab3 from './src/screens/tabs/tab3';


import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const BottomTabs = createMaterialBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();


class App extends Component {

  createHomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name='Feed' 
          component={Feed} 
          options={{ 
            title: 'Home',
            headerStyle: { backgroundColor: '#000000'},
            headerTintColor: '#FFFFFF'
          }}
        />
        <Stack.Screen name='Details' component={Details} />
        <Stack.Screen name='Bottom Tabs' children={this.createBottomTabs} />
        <Stack.Screen name='Top Tabs' children={this.createTopTabs} />
      </Stack.Navigator>
    )
  }

  createTopTabs = () => {
    return (
      <TopTabs.Navigator>
        <TopTabs.Screen name='Tab1' component={Tab1} options={{ title: "Title1"}} />
        <TopTabs.Screen name='Tab2' component={Tab2} />
        <TopTabs.Screen name='Tab3' component={Tab3} />
      </TopTabs.Navigator>
    )
  }

  createBottomTabs = () => {
    return (
      <BottomTabs.Navigator>
        <BottomTabs.Screen name='Tab1' component={Tab1} />
        <BottomTabs.Screen name='Tab2' component={Tab2} />
        <BottomTabs.Screen name='Tab3' component={Tab3} />
      </BottomTabs.Navigator>
    )
  }

  render() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={this.createHomeStack} />
        <Drawer.Screen name="Contacts" component={Contacts} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Bio" component={Bio} />
      </Drawer.Navigator>

    </NavigationContainer>
  )
  }
}

export default App;
