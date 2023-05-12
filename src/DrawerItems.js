import React from 'react'
import { DrawerItem } from '@react-navigation/drawer';
import {Icon,} from 'native-base'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet } from 'react-native'

const DrawerItems = (props) => {

    return (
        <DrawerItem
            style={styles.drawerItem}
            icon={() => {
                return (
                    <Icon
                        as={<FontAwesome5 name={props.icon} />}
                        size={6}
                        color="gray.700"
                    />
                )
            }}
            label={props.name}
            labelStyle={styles.label}
          onPress={props.onpress}
        />
    )
}
const styles = StyleSheet.create({
    label: {
        // color: colors.drawerItem,
        fontSize: 18,
        lineHeight: 23,
        fontWeight: 'bold'
    },
    drawerItem: {
        // paddingStart: ww * .065,
        paddingStart: '6.5%',
        paddingEnd: 5,
        marginStart: 0
    }
})
export default DrawerItems