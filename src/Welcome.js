import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Alert, Pressable } from 'react-native';
import * as Location from 'expo-location';

const Welcome = ({ navigation }) => {
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    'Wait, we are fetching you location...'
  );

  // first update the useEffect hook
useEffect(() => {
    CheckIfLocationEnabled();
    GetCurrentLocation();
}, []);

// create the handler method
const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        'Location Service not enabled',
        'Please enable your location services to continue',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    } else {
      setLocationServiceEnabled(enabled);
    }
  };
const GetCurrentLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();

    if (status !== 'granted') {
    Alert.alert(
        'Permission not granted',
        'Allow the app to use location service.',
        [{ text: 'OK' }],
        { cancelable: false }
    );
    }

    let { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
    const { latitude, longitude } = coords;
    let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude
    });

    for (let item of response) {
        let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;

        setDisplayCurrentAddress(address);
        if (address.length > 0) {
            setTimeout(() => {
              navigation.navigate('Home', { item: address });
            }, 2000);
          }
    }
    }
};

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
      <Pressable
            onPress={()=> navigation.navigate('Home')}
       >
        <Text style={styles.title}>Where are you?</Text>
        </Pressable>
      </View>
      <Text style={styles.text}>{displayCurrentAddress}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#070707',
      alignItems: 'center',
      paddingTop: 130
    },
    contentContainer: {
      alignItems: 'center',
      marginBottom: 20
    },
    image: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
      marginBottom: 20
    },
    title: {
      fontSize: 22,
      fontWeight: '700',
      color: '#FD0139'
    },
    text: {
      fontSize: 20,
      fontWeight: '400',
      color: '#fff'
    }
  });
  
  export default Welcome;