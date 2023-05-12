import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base';
import OuterStackNavigator from './src/Navigators/OuterStackNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import DrawerNavigator from './src/Navigators/DrawerNavigator';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* <SafeAreaView> */}
        <DrawerNavigator />
        {/* </SafeAreaView> */}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
