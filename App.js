import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './src/Chat';
import Usb from './src/Usb';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Chat" component={Chat} options={{headerShown:false}} />
        <Stack.Screen name="Usb" component={Usb} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}