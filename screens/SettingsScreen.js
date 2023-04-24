import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../redux/actions/userActions';
import { useSelector, useDispatch } from 'react-redux';

const SettingsScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  return (
    <View style={{flex:1, backgroundColor:"white"}}>
    <TouchableHighlight onPress={() => navigation.navigate('AccountInformationScreen')}>
    <View style={{backgroundColor:"white", padding:8, minHeight:hp('10')}}>
      <Text style={{fontSize:hp('2.5'), fontWeight:"600"}}>Account information</Text>
      <Text style={{fontSize:hp('2.1')}}>See your account information like your name and phone number.</Text>
    </View>
    </TouchableHighlight>
    <TouchableHighlight onPress={() => navigation.navigate('OrdersScreen')}>
    <View style={{backgroundColor:"white", padding:8, minHeight:hp('10')}}>
      <Text style={{fontSize:hp('2.5'), fontWeight:"600"}}>Orders</Text>
      <Text style={{fontSize:hp('2.1')}}>See all your pending and completed orders.</Text>
    </View>
    </TouchableHighlight>
    {/*
    <TouchableHighlight>
    <View style={{backgroundColor:"white", padding:8, minHeight:hp('10')}}>
      <Text style={{fontSize:hp('2.5'), fontWeight:"600"}}>Deactivate Account</Text>
      <Text style={{fontSize:hp('2.1')}}>Find out how you can deactivate your account.</Text>
    </View>
    </TouchableHighlight>
    */}
    <TouchableHighlight  onPress={() => dispatch(logout())}>
    <View style={{backgroundColor:"white", padding:8, justifyContent:"center", minHeight:hp('8')}}>
      <Text style={{fontSize:hp('2.5'), fontWeight:"600", color:"red"}}>Logout</Text>
    </View>
    </TouchableHighlight>
    
  </View>
  )
}

export default SettingsScreen