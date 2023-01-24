import React from 'react'
import { View, Text } from 'react-native'

const Header = (props) => {
    return (
        <View style={{margin:15}}>
            <Text style={{fontWeight:'bold', fontSize:32, color:'green'}}>
                {props.name}
            </Text>
        </View>
    )
}

export default Header