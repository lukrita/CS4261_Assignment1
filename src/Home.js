import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
        const navigation = useNavigation();
    return (
        <View>
            <Text>Home</Text>
        <Button title='Add Notes' onPress={() => navigation.navigate('NoteAdd')}  />
        </View>
    )
}

export default Home