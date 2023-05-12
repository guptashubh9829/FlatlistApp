import { Text, View } from 'react-native'
import React, { Component, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import { Avatar, VStack, Icon, Input, Button, Box, Center, HStack, Pressable } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import FocusStyle from '../FocusStyle'
import InputStyle from '../InputStyle'
import { GoogleSignin, statusCodes,GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native'


const Login = () => {

    const navigation = useNavigation();
    const sh = Dimensions.get('window').height;
    const sw = Dimensions.get('window').width
    const [email, setEmail] = useState({
        email: '',
        error: false
    })
    const googlelogin = async () => {
        // try {
        //     GoogleSignin.configure({
        //         webClientId: '167562393053-110vg9u1ecfk2a5i7ijeglovk0227ft1.apps.googleusercontent.com',
        //         offlineAccess: true 
        //     });
        //     const data = await GoogleSignin.signIn();
        //     console.log(data);
        //     const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
        //     const firebaseUserCredential = await auth().signInWithCredential(credential);
        //     if (firebaseUserCredential) setLoggedInGoogle(true);
        //     if (typeof success === 'function') success();
        // } catch (e) {
        //     console.warn('GOOGLE ERROR', e);
        //     if (typeof cancel == 'function') cancel();
        // }
        GoogleSignin.configure({
            webClientId:
                '167562393053-6cvsp9tjpigu6luvob5hq1qvoavt353n.apps.googleusercontent.com',
            offlineAccess: true,
            forceCodeForRefreshToken: true,
        });
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            // this.setState({ userInfo });
            console.log(userInfo, "userInfo Google");
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log(error, 'error msg of google SignIn 1');
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log(error, 'error msg of google SignIn 2');
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log(error, 'error msg of google SignIn 3');
                // play services not available or outdated
            } else {
                console.log(error, 'error msg of google SignIn 4');
                // some other error happened
            }
        }
    };
    const login=()=>{
        navigation.navigate('Home')
    }
    return (
        <VStack flex={1} background={'grey'} style={{ padding: 5, borderWidth: 1, borderColor: '#fff' }} >
            {/* <ImageBackground
                source={require('../assets/image/background.jpg')}
                height={sh}
                width={sw}
            > */}
            <ScrollView showsHorizontalScrollIndicator={false}>
                <VStack px={4} marginTop={'30'} >
                    <View alignItems={'center'}>
                        <Avatar background='#fff' h={100} w={100} >
                            <Icon
                                as={<Entypo />}
                                name='user'
                                color='#2372d3'
                                size={70}
                            />
                        </Avatar>
                        <Text style={{ fontSize: 24, color: '#fff' }}>Login</Text>
                    </View>
                    <View>
                        <VStack space={2} py={2}>
                            <Input
                                placeholderTextColor={'white'}
                                placeholder='Enter email'
                                isInvalid={email.error}
                                variant={'underlined'}
                                borderBottomColor={'white'}
                                // underlineColorAndroid={'white'}
                                _focus={FocusStyle}
                                style={InputStyle}
                            />
                        </VStack>
                    </View>
                    <View>
                        <VStack space={2} py={2}>
                            <Input
                                borderBottomColor={'white'}
                                placeholderTextColor={'white'}
                                placeholder='Enter password'
                                isInvalid={email.error}
                                variant={'underlined'}
                                // underlineColorAndroid={'white'}
                                _focus={FocusStyle}
                                style={InputStyle}
                            />
                            <Text style={{ fontSize: 14, color: '#fff', textAlign: 'right' }}>ForgotPassword?</Text>
                        </VStack>
                    </View>
                    <Button backgroundColor={'#2372d3'} style={{ borderWidth: 1, borderColor: '#fff' }} my={5} onPress={login}>Login</Button>
                </VStack>
            </ScrollView>
            <VStack space={2} marginBottom={5}>
                <VStack p={4}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        <View>
                            <Text style={{ width: 30, textAlign: 'center' }}>or</Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    </View>
                </VStack>
                <Center>
                    <Text style={{ fontSize: 14, color: '#fff' }}>Login with Social Network</Text>
                </Center>
                <Center>
                <GoogleSigninButton
//   style={{ width: 192, height: 48 }}
//   size={GoogleSigninButton.Size.Wide}
//   color={GoogleSigninButton.Color.Dark}
onPress={googlelogin}
//   disabled={this.state.isSigninInProgress}
/>
</Center>
                <HStack justifyContent="center" space={2}>
                    {/* <Pressable onPress={googlelogin}>
                        <Avatar bg="transparent">
                            <Icon
                                as={<Entypo name='google--with-circle' />}
                                size={10}
                                background={'#fff'}
                                color="red.500"
                                borderRadius={'50'}
                            />
                        </Avatar>
                    </Pressable> */}
                    {/* <Avatar bg="transparent">
                        <Icon
                            as={<Entypo name='facebook-with-circle' />}
                            size={10}
                            background={'#fff'}
                            color="blue.700"
                            borderRadius={'50'}
                        />
                    </Avatar> */}
                </HStack>
            </VStack>
            {/* </ImageBackground> */}
        </VStack>
    )
};
const styles = StyleSheet.create({
})

export default Login