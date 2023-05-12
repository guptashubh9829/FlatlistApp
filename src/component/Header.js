import React from 'react'
import { HStack, Box, Heading, Icon } from 'native-base'
import IoniconIcon from 'react-native-vector-icons/Ionicons'
const Header = (props) => {
    return (
        <Box
            py={4}
            px={3}
            backgroundColor={'#fff'}
            style={{elevation:5}}
        >
            <HStack
                justifyContent={"space-between"}
                alignItems="center"
            >
                <HStack
                    space={2}
                    alignItems="center"
                >
                    {props.leftIcon ?? (
                        <Icon
                            as={<IoniconIcon />}
                            name="chevron-back"
                            size="md"
                            color="#009868"
                            onPress={props.onBackBtnPress}
                        />
                    )}
                    <Heading ml={2} fontSize={'20'} fontStyle={'Avenir'} alignSelf="center">{props.title}</Heading>

                </HStack>
                {/* <Icon
                    as={<IoniconIcon />}
                    name="notifications"
                    size="5"
                    mr={2}
                /> */}
            </HStack>
        </Box>
    )
}

export default Header