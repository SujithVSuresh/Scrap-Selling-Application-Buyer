import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, {useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/actions/userActions';

const SigninScreen = () => {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  //console.log("pottan",sellRequests)
  const {userInfo, loading, error} = userLogin
  console.log("error", error)

  const signinHandler = () => {
    dispatch(login(phone, password))
}


  return (
    <View style={{flex:1, backgroundColor:"white", justifyContent:"center", alignItems:"center"}}>
    {/* <Text style={{fontSize:hp('7'), fontWeight:"800", marginBottom:15, color:"darkblue"}}>ScrapDeal</Text> */}

    <TextInput onChangeText={text => setPhone(text)} style={{height: hp('8'), width:wp('90'), margin: 0, backgroundColor:"white", borderBottomWidth: 0.5, borderColor:"gray", padding: 10,}} 
      placeholder="Phone Number"
      keyboardType="number-pad"></TextInput>
   

    <TextInput onChangeText={text => setPassword(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white", borderBottomWidth: 0.5, borderColor:"gray", padding: 10,}} secureTextEntry={true} placeholder="Password"></TextInput>
   
    <TouchableOpacity disabled={!phone || !password || loading ? true : false} onPress={() => signinHandler()} style={{height: hp('7.5'), width:wp('90'), margin: 10, backgroundColor:loading ? "lightgray" : "dodgerblue", borderRadius:8, justifyContent:"center", alignItems:"center"}}>
    {(loading) ? (
        <ActivityIndicator />
    ) : (
      <Text style={{color:'white', fontSize:hp("3.5"), fontWeight:"700"}}>Signin</Text>
    )} 
    
    </TouchableOpacity>
    
    <Text style={{color:"dodgerblue", marginBottom:5}}>Forget password?</Text>
    
    <Text >or</Text>
    
    <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')} style={{height: hp('6'), minWidth:wp('50'), paddingHorizontal:10, backgroundColor:"#e7eae5", borderRadius:10, marginTop:10, justifyContent:"center", alignItems:"center"}}>
        <Text style={{fontWeight:"400"}}>Create an account !</Text>
    </TouchableOpacity>
    {/*errorDetails && <Text>{errorDetails}</Text>*/}

  </View>
  )
}

export default SigninScreen