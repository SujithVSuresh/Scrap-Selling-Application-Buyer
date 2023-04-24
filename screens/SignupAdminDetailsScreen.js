import { View, Text, TextInput, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React, {useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { adminDetailsCreator } from '../redux/actions/userActions';

const SignupAdminDetailsScreen = ({route}) => {
  const { coordinates } = route.params;
  console.log("loo",coordinates)

  const [businessName, setBusinessName] = useState("")
  const [ownersName, setOwnersName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [myState, setMyState] = useState("")
  const [district, setDistrict] = useState("")
  const [subDistrict, setSubDistrict] = useState("")
  const [village, setVillage] = useState("")
  const [pincode, setPincode] = useState(null)

  const dispatch = useDispatch()

  const submitHandler = () => {
    dispatch(adminDetailsCreator(businessName, ownersName, phoneNumber, myState, district, subDistrict, village, pincode, coordinates.latitude, coordinates.longitude))
  }
  
  
  




  const navigation = useNavigation()
  return (
 
      <ScrollView >
        <View style={{alignItems:"center"}}>
        

    {/* <Text style={{fontSize:hp('7'), fontWeight:"800", marginBottom:15, color:"darkblue"}}>ScrapDeal</Text> */}
    <View style={{marginVertical:hp('2')}}>
    <Text style={{fontWeight:"500", fontSize:hp("2.5"), marginBottom:5}}>Business Details</Text>
    <TextInput onChangeText={text => setBusinessName(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white", borderWidth: 0.5, borderColor:"gray", padding: 10,}} 
      placeholder="Business name"
      ></TextInput>
      <TextInput onChangeText={text => setOwnersName(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white", borderWidth: 0.5, borderColor:"gray", padding: 10,}} 
      placeholder="Owner's name"
      ></TextInput>
      <TextInput onChangeText={text => setPhoneNumber(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white", borderWidth: 0.5, borderColor:"gray", padding: 10,}} 
      placeholder="Phone"
      keyboardType="number-pad"></TextInput>

    </View> 

    <View style={{marginVertical:hp('2')}}>
    <Text style={{fontWeight:"500", fontSize:hp("2.5"), marginBottom:5}}>Address</Text>
      <TextInput onChangeText={text => setMyState(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white", borderWidth: 0.5, borderColor:"gray", padding: 10,}} 
      placeholder="State"
       ></TextInput>
       <TextInput onChangeText={text => setDistrict(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white", borderWidth: 0.5, borderColor:"gray", padding: 10,}} 
      placeholder="District"
       ></TextInput>
       <TextInput onChangeText={text => setSubDistrict(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white", borderWidth: 0.5, borderColor:"gray", padding: 10,}} 
      placeholder="Sub District"
       ></TextInput>
       <TextInput onChangeText={text => setVillage(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white", borderWidth: 0.5, borderColor:"gray", padding: 10,}} 
      placeholder="Village"
       ></TextInput>
       <TextInput onChangeText={text => setPincode(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white", borderWidth: 0.5, borderColor:"gray", padding: 10,}} 
      placeholder="PIN code"
      keyboardType="number-pad"></TextInput>
      <Pressable onPress={() => navigation.navigate('ChooseLocationOnMapScreen')} style={{backgroundColor:"white", height:hp('10'),margin: 5, padding:10, flexDirection:"row", justifyContent:"space-between", alignItems:"center", borderRadius:10, width:wp('90')}}>
      <View>
      <Text style={{fontSize:hp('2.5%'), color:"gray"}}>Select location on map</Text>
      {Object.keys(coordinates).length !== 0 && <Text style={{color:"green"}}>Selected</Text>}
      </View>
      
      <Icon name="chevron-forward-outline" size={hp('3%')} />
    </Pressable>
    </View>  

     
    
   
    <TouchableOpacity onPress={() => submitHandler()} style={{height: hp('7.5'), width:wp('90'), margin: 0, backgroundColor:"dodgerblue", borderRadius:8, justifyContent:"center", alignItems:"center"}}>
    {/*(isLoading) ? (
        <ActivityIndicator />
    ) : (
      <Text style={{color:'white', fontSize:hp("3.5"), fontWeight:"700"}}>Signin</Text>
    )*/} 
    
    </TouchableOpacity>
    
    
    {/*errorDetails && <Text>{errorDetails}</Text>*/}
    </View>
    </ScrollView>

   
  )
}

export default SignupAdminDetailsScreen