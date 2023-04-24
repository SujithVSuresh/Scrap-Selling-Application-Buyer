import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { register } from '../redux/actions/userActions';
import { useDispatch } from 'react-redux';

const SignupScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const navigation = useNavigation()
  const dispatch = useDispatch()

  const submitHandler = () => {
    dispatch(register(name, phoneNumber, password))
    //navigation.navigate('ChooseUserTypeScreen')
  }
    
  return (
    <View style={{flex:1, backgroundColor:"white", justifyContent:"center", alignItems:"center"}}>

    {/* <Text style={{fontSize:hp('7'), fontWeight:"800", marginBottom:15, color:"darkblue"}}>ScrapDeal</Text> */}
    <TextInput onChangeText={text => setPhoneNumber(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white",  borderBottomWidth: 0.5, borderColor:"gray", padding: 10,}} 
      placeholder="Phone number"
      keyboardType="number-pad"></TextInput>
      <TextInput onChangeText={text => setName(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white", borderBottomWidth: 0.5, borderColor:"gray", padding: 10,}} 
      placeholder="Your name"></TextInput>

    <TextInput onChangeText={text => setPassword(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white", borderBottomWidth: 0.5, borderColor:"gray", padding: 10,}} secureTextEntry={true} placeholder="Password"></TextInput>

    
   
    <TouchableOpacity onPress={() => submitHandler()} style={{height: hp('7.5'), width:wp('90'), margin: 10, backgroundColor:"dodgerblue", borderRadius:8, justifyContent:"center", alignItems:"center"}}>
    {/*(isLoading) ? (
        <ActivityIndicator />
    ) : (
      <Text style={{color:'white', fontSize:hp("3.5"), fontWeight:"700"}}>Signin</Text>
    )*/} 
    
    </TouchableOpacity>

    <Text >or</Text>
    
    <TouchableOpacity onPress={() => navigation.navigate('SigninScreen')} style={{height: hp('6'), minWidth:wp('60'), paddingHorizontal:10, backgroundColor:"#e7eae5", borderRadius:10, marginTop:10, justifyContent:"center", alignItems:"center"}}>
        <Text style={{fontWeight:"400"}}>Already have an account !</Text>
    </TouchableOpacity>
    
    
    {/*errorDetails && <Text>{errorDetails}</Text>*/}

  </View>
  )
}

export default SignupScreen