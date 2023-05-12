import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FlatList, Image, HStack ,Box,Icon} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import Header from './Header';

const Home = (props) => {
  const [userData, setUserData] = React.useState([]);

  React.useEffect(async () => {
    await fetch('https://6437c5e20c58d3b14578cb1c.mockapi.io/user/userInfo').then((res) => {
      return res.json();
    }).then((data) => {
      // console.log(data, 'data');
      setUserData(data)
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  return (
    <>
     <Header
              leftIcon={
                <Box
                  p={1}
                  bgColor={"warmGray.100"}
                  borderRadius={7}
                  alignItems='center'
                  justifyContent='center'
                  style={{ height: 40, width: 40 }}
                >
                  <Icon
                    onPress={() => props.navigation.openDrawer()}
                    as={<EntypoIcon />}
                    name="menu"
                    size="md"
                    color="#009868"
                  />
                </Box>
              }
              title="FlatList"
              navigation={props.navigation}

            />
    
    {userData &&
    
      <View>
      <FlatList
      showsHorizontalScrollIndicator={false}
      data={userData}
      horizontal
      renderItem={({ item, index }) => {
        return (
            <View style={styles.container} key={index} space={3}>
              <Image source={{ uri: item.avatar }} alt={item.name} style={{ borderRadius: 50, alignSelf:'center' }} height={50} width={50} />
              <View>
                <Text style={styles.name}>{item.name.toUpperCase()}</Text>
                <Text style={styles.email}>{item.email}</Text>
              </View>
            </View>
          )
        }} />
         <FlatList
        data={userData}
        renderItem={({ item, index }) => {
          return (
            <HStack style={styles.container2} key={index} space={3}>
              <Image source={{ uri: item.avatar }} alt={item.name} style={{ borderRadius: 50 }} height={50} width={50} />
              <View>
                <Text style={styles.name}>{item.name && item.name.toUpperCase()}</Text>
                <Text style={styles.email}>{item.email}</Text>
              </View>
            </HStack>
          )
        }} />
    </View>
}</>
  )
}

const styles = StyleSheet.create({
  container2:{
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation:5,
    marginTop: 10,
    marginLeft: '5%',
    marginRight: '5%',
    padding: 10,
    width: '90%',
    height: 70
  },
  container: {
    marginBottom:25,
    marginLeft:10,
    elevation:5,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: 10,
    // marginLeft: '5%',
    // marginRight: '5%',
    padding: 10,
    width: 100,
    height: 120
  },
  name: {
    fontSize: 18,
  },
  email: {
    fontSize: 12,
  }
});
export default Home;

