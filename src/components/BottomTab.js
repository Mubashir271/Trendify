/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image } from 'react-native';
import Home from '../screens/HomeScreens/Home';
import Wishlist from '../screens/HomeScreens/Wishlist';
import Cart from '../screens/HomeScreens/Cart';
import MyOrder from '../screens/HomeScreens/MyOrder';
import MyAccount from '../screens/HomeScreens/MyAccount';
import FontAwesome from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#fff', height:'7%', borderTopWidth: 0 }, // Customize the tab bar style
        tabBarLabelStyle: { fontSize: 12, top:2 }, // Customize the label style
        tabBarActiveTintColor: '#528F65',
        tabBarInactiveTintColor: '#888',
        headerShown:false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/icons/home.png')} // Change with actual icon path
              style={{ width: 20, height: 20, tintColor: focused ? '#528F65' : '#888' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/icons/heart.png')} // Change with actual icon path
              style={{ width: 20, height: 20, tintColor: focused ? '#528F65' : '#888' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/icons/cart.png')}
              style={{ width: 20, height: 20, tintColor: focused ? '#528F65' : '#888' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyOrder"
        component={MyOrder}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/icons/notes.png')}
              style={{ width: 20, height: 20, tintColor: focused ? '#528F65' : '#888' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={MyAccount}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/icons/account.png')}
              style={{ width: 20, height: 20, tintColor: focused ? '#528F65' : '#888' }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
