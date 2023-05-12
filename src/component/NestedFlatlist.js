import React, { Component } from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { FlatList, Image, HStack, Box, Icon, VStack } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import Header from './Header';

const NestedFlatlist = (props) => {
    React.useEffect(() => {

    }, [refresh])
    const [refresh, setRefresh] = React.useState(true);
    const [userInfo, setUserInfo] = React.useState([
        { data: [1, 1, 1, 1, 1, 1, 1], isSelected: false },
        { data: [1, 1, 1, 1, 1, 1, 1], isSelected: true }
    ]);

    const select = (index) => {
        setRefresh(!refresh)
        let temp = userInfo;
        temp.map((item, i) => {
            if (index === i) {
                item.isSelected = !item.isSelected;
            }
            else {
                item.isSelected = false;
            }
        })
        console.log('press', temp, temp[index].isSelected);
        // temp[index].isSelected = !temp[index].isSelected;
        console.log('press', temp, temp[index].isSelected);
        let temp2 = [];
        temp.map((item) => {
            temp2.push(item)
        })
        setUserInfo(temp);
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
                title="FlatList"
                navigation={props.navigation}
            />
            <View>
                <FlatList
                    data={userInfo}
                    renderItem={({ item, index }) => {
                        return (
                            <>
                                <Pressable onPress={() => { select(index) }}>
                                    <View style={styles.container2} key={index} space={3}>
                                        <Text style={styles.MainHeading}>{'item' + (index + 1)}</Text>
                                        {item.isSelected ?
                                            <>
                                                <FlatList
                                                    data={item.data}
                                                    renderItem={({ item2, index }) => {
                                                        return (
                                                            <>
                                                                <View key={index} space={3}>
                                                                    <Text style={styles.subHeading}>{'Sub item' + (index + 1)}</Text>
                                                                </View>
                                                            </>
                                                        )
                                                    }}
                                                />
                                                <Image style={styles.image} source={require('../assets/image/down.png')} />
                                            </>
                                            :
                                            <Image style={styles.image} source={require('../assets/image/up.png')} />
                                        }
                                        {/* {item.isSelected ?
                                        :
                                    } */}
                                    </View>
                                </Pressable>
                            </>
                        )
                    }} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container2: {
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 5,
        marginTop: 10,
        marginLeft: '5%',
        marginRight: '5%',
        padding: 10,
        width: '90%',
    },
    container: {
        marginBottom: 25,
        marginLeft: 10,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 10,
        width: 100,
        height: 120
    },
    image: {
        height: 12,
        width: 12,
        position: 'absolute',
        top: 25,
        right: 20,
    },
    MainHeading: {
        fontSize: 20,
        color: 'red',
        textTransform: 'capitalize',
        padding: 10,
    },
    subHeading: {
        fontSize: 16,
        color: 'black',
        padding: 10,
    }
});
export default NestedFlatlist;

