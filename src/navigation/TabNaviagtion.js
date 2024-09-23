import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { Ionicons } from '@expo/vector-icons';
import Account from '../screens/Account';
import AddUser from '../screens/AddUser';

const Tab = createBottomTabNavigator();

export default function TabNaviagtion() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: '#eb6a58',
        tabBarInactiveTintColor: '#3e2465',
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name='Home'
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Ionicons 
              name={focused ? 'grid' : 'grid-outline'}
              color={focused ? '#EB6A58' : '#8C8896'}
              size={30}
            />
          )
        }}
      />
      <Tab.Screen 
        name='Add'
        component={AddUser}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Ionicons 
              name={focused ? 'add-circle' : 'add-circle-outline'}
              color={focused ? '#EB6A58' : '#8C8896'}
              size={30}
            />
          )
        }}
      />
      <Tab.Screen 
        name='Account'
        component={Account}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Ionicons 
              name={focused ? 'person' : 'person-outline'}
              color={focused ? '#EB6A58' : '#8C8896'}
              size={30}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})