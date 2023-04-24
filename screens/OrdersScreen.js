import { View, Text, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CompletedOrderComponent from '../components/CompletedOrderComponent';
import PendingOrderComponent from '../components/PendingOrderComponent';



const OrdersScreen = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
   <>
    {/*<View style={{backgroundColor:"dodgerblue", height:hp('10%'), width:wp('100%'), justifyContent:"center", paddingHorizontal:wp("4%")}}><Text style={{fontSize:hp('3.5%'), fontWeight:"700", fontFamily:"sans-serif", color:"white"}}>Orders</Text></View> */}
    <Tab.Navigator screenOptions={{
      tabBarIndicatorStyle:{backgroundColor:"black", height:hp('0.5'), width:wp('30'), marginHorizontal:wp('10'), borderRadius:15},
      tabBarStyle: { elevation:0, borderBottomWidth:1, borderBottomColor:"#e7eae5" }
    }}>
      <Tab.Screen name="Pending" component={PendingOrderComponent} />
      <Tab.Screen name="Completed" component={CompletedOrderComponent} />
    </Tab.Navigator>
    </>


  )
}

export default OrdersScreen