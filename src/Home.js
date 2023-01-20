import React, {useState, useEffect } from 'react'
import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../config'
import { FLashlist } from '@shopify/flash-list'

const Home = () => {

        const [notes, setNotes] = useState([]);
        const navigation = useNavigation();

        // fethc data from firestore

        useEffect(() => {
            firebase.firestore()
            .collection('notes')
            .onSnapshot((querySnapshot) => {
                const newNotes = []
                querySnapshot.forEach((doc) => {
                    const {note, title} = doc.data();
                    newNotes.push({note, title, id:doc.id})
                });
                setNotes(newNotes);
            })
        }, []);
    return (
        <View style={styles.container}>
            
            <FlatList
                data = {notes}
                numColumns={2}
                estimatedItemSize={100}
                renderItem={({item}) => (
                    <View style={styles.noteView}>
                        <Text style={styles.noteTitle}>
                            {item.title}
                        </Text>
                        <Text style={styles.noteDescription}>
                            {item.note}
                        </Text>
                    </View>
                )}
            />
        <Button title='Add Reminders' onPress={() => navigation.navigate('NoteAdd')}  />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white'
    },
    noteView:{
        flex:1,
        backgroundColor:'blue',
        padding:10,
        margin:10,
        borderRadius:10,
        shadowColor:'red',
        shadowOffset: { width:0, height:2 },
        shadowOpacity:0.8,
        shadowRadius:2,
        elevation:7,
        alignItems:'center'
    },
    noteTitle: {
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    noteDescription: {
        fontSize:16,
        marginTop:5,
        color:'white'
    }
})