import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, {useState, useRef, useEffect} from 'react'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const ChooseLocationOnMapScreen = () => {
  const navigation = useNavigation()
  const [coordinates, setCoordinates] = useState({})
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);


 
  
  const mapRef = useRef(null);

  async function getLocationAsync() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      // Handle permission denied
    }
  
    let location = await Location.getCurrentPositionAsync({});
    setCoordinates({latitude:location.coords.latitude, longitude:location.coords.longitude})

    mapRef.current.animateToRegion({
      latitude:location.coords.latitude,
      longitude:location.coords.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1
    })
  }

  const changeRegionOnPress = (Region) => {
    console.log("podaaaa",Region.latitude)
   
    setCoordinates({latitude:Region.latitude, longitude:Region.longitude})
  }
  return (
    <View  style={styles.container}>
    <View style={{alignItems:"center", marginBottom:hp('70')}}>
<Pressable onPress={(e) => getLocationAsync()} style={{justifyContent:"center", alignItems:"center", width:wp('95'), height:hp('6.5'), backgroundColor:"dodgerblue", borderRadius:10, zIndex:1, marginTop:10}}><Text>Use Current</Text></Pressable>
</View>

    <MapView
     ref={mapRef}
     userInterfaceStyle='dark'
     style={styles.map}
     onRegionChangeComplete={changeRegionOnPress}
     initialRegion={{
       latitude: 10.9359244,
       longitude: 76.5258813,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421,
     }}
 
>
    <Marker 
 
  coordinate={{
      latitude: coordinates?.latitude ? coordinates.latitude : 10.9359244,
      longitude: coordinates?.longitude ? coordinates.longitude : 76.5258813,
  }}
  title='Origin'
  description="myLocation"
  identifier='origin'
  /> 
</MapView>



<View style={{alignItems:"center", backgroundColor:"white", minHeight:hp('10'), width:'100%', position:"absolute", bottom:0}}>

<Pressable onPress={(e) => navigation.navigate("SignupAdminDetailsScreen", {"coordinates":coordinates})} style={{justifyContent:"center", alignItems:"center", width:wp('95'), height:hp('6.5'), backgroundColor:"dodgerblue", borderRadius:10, zIndex:1, marginBottom:10}}><Text>Confirm</Text></Pressable>
</View>

  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default ChooseLocationOnMapScreen