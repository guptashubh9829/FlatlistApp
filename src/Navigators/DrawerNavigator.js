import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../component/Horizontel_Vertical_Flatlist';
import CustomDrawerContent from '../CustomDrawerContent';
import OuterStackNavigator from '../Navigators/OuterStackNavigator';
import NestedFlatlist from '../component/NestedFlatlist';
import RefreshControlShowData from '../component/RefreshControlShowData';

const Drawer = createDrawerNavigator();
const DrawerNavigator=()=> {
    return (
        <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                swipeEnabled: false
            }}
        >
            <Drawer.Screen name='OuterStackNavigator' component={OuterStackNavigator}/>
            <Drawer.Screen name='Home' component={Home}/>
            <Drawer.Screen name='NestedFlatlist' component={NestedFlatlist}/>
            <Drawer.Screen name='RefreshControlShowData' component={RefreshControlShowData}/>


        </Drawer.Navigator>
    )
}

export default DrawerNavigator