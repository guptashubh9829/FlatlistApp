import React, { Component } from 'react'
import { Text, View, StyleSheet, RefreshControl, ActivityIndicator } from 'react-native'
import { FlatList, Image, HStack, Box, Icon, ScrollView } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import Header from './Header';

const RefreshControlShowData = (props) => {
    const [userData, setUserData] = React.useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const [isloading, setisloading] = React.useState(false);

    //   React.useEffect(async () => {
    //     await fetch('https://6437c5e20c58d3b14578cb1c.mockapi.io/user/userInfo').then((res) => {
    //       return res.json();
    //     }).then((data) => {
    //       // console.log(data, 'data');
    //       setUserData(data)
    //     }).catch((err) => {
    //       console.log(err);
    //     })
    //   }, []);
    const refreshControl = async () => {
        console.log('refreshControl called');
        await fetch('https://6437c5e20c58d3b14578cb1c.mockapi.io/user/userInfo').then((res) => {
            return res.json();
        }).then((data) => {
            // console.log(data, 'data');
            // setLoading(false)
            setRefreshing(false)
            setUserData(data)
        }).catch((err) => {
            console.log(err);
        })
    };
    const rendorLoader = () => {
        return (
            isloading &&
            <View style={{ marginVertical: 20 }}>
                <ActivityIndicator color={'grey'} size={'large'} />
            </View>
        )
    };
    const LoadMoreItems = () => {
        setisloading(true)
        setUserData([...userData, ...userData])
    }
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
                title="Refresh Control Show Data"
                navigation={props.navigation}

            />


            <ScrollView showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl colors={['green']} refreshing={refreshing} onRefresh={refreshControl} />
                }>
                {userData.length > 0 ?
                    <>
                        {/* <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={userData}
                            horizontal
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={styles.container} key={index} space={3}>
                                        <Image source={{ uri: item.avatar }} alt={item.name} style={{ borderRadius: 50, alignSelf: 'center' }} height={50} width={50} />
                                        <View>
                                            <Text style={styles.name}>{item.name.toUpperCase()}</Text>
                                            <Text style={styles.email}>{item.email}</Text>
                                        </View>
                                    </View>
                                )
                            }} /> */}
                        <FlatList
                            data={userData}
                            ListFooterComponent={rendorLoader}
                            onEndReached={LoadMoreItems}
                            onEndReachedThreshold={0}
                            renderItem={({ item, index }) => {
                                console.log(index);
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
                    </>
                    :
                    <View marginTop={30} alignItems='center' justifyContent='center'>
                        <Text>Pull Down to show data</Text>
                    </View>
                }
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container2: {
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 5,
        marginTop: 10,
        marginLeft: '5%',
        marginRight: '5%',
        padding: 10,
        width: '90%',
        height: 70,
    },
    container: {
        marginBottom: 25,
        marginLeft: 10,
        elevation: 5,
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
export default RefreshControlShowData;

