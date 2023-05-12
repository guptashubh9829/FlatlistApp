import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../component/Login';
const Stack = createNativeStackNavigator();
const OuterStackNavigator=()=> {

    return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen  name='Login' component={Login} />
      </Stack.Navigator>
    )
}

export default OuterStackNavigator