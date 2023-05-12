import React, { useState } from 'react';
import {HStack, Avatar, Text, Box, VStack, Divider} from 'native-base'
import {DrawerContentScrollView,} from '@react-navigation/drawer';
import DrawerItems from './DrawerItems';
import { Pressable } from 'react-native';

const CustomDrawerContent=(props)=> {
    const userMainData = {name: 'user', email: 'user@example.com'};


    const Flatlist=()=> {
        props.navigation.closeDrawer()
        props.navigation.navigate('Home')
      }; 
      const NestedFlatlist=()=> {
        props.navigation.closeDrawer()
        props.navigation.navigate('NestedFlatlist')
      };
      const RefreshControlShowData=()=> {
        props.navigation.closeDrawer()
        props.navigation.navigate('RefreshControlShowData')
      };


    const DrawerItemsArray = [
      {
        icon: 'list',
        name: 'Flatlist',
        onpress: Flatlist
      },
      {
        icon: 'list',
        name: 'Nested Flatlist',
        onpress: NestedFlatlist
      },
      {
        icon: 'list',
        name: 'Refresh Control',
        onpress: RefreshControlShowData
      },
      ];
      
    return (
      <DrawerContentScrollView>
        <HStack
        p={2}
        pl={3}
        h="70px"
        m={3}
        alignItems="center"
        borderRadius={6}
        space={3}
      >
        <Avatar>
          {userMainData.name && userMainData.name.charAt(0)
            .toUpperCase()}
        </Avatar>
        <Box>
          <Text bold color="gray.700">
            {userMainData.name && userMainData.name}
          </Text>
          <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
            {userMainData.name && userMainData.email.length>24?userMainData.email.slice(0,20)+'...':userMainData.email}
          </Text>
        </Box>
      </HStack>
      <Divider my="2" _light={{
        bg: "muted.400"
      }} _dark={{
        bg: "muted.50"
      }} />
      <VStack space="3">
        {DrawerItemsArray.map((element) => {
          console.log('fjsbfbsbkbbo',element);
          return (
            // <Pressable onPress={()=>NestedFlatlist}>
            //     <Text>hyysdfsdfadaaaaaaaaaaaa</Text>
            // </Pressable>
            <DrawerItems icon={element.icon} name={element.name} onpress={element.onpress} />
            )
          })}
          </VStack>
    </DrawerContentScrollView>
    )
  }

export default CustomDrawerContent
