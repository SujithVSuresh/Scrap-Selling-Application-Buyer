import { View, Text, Modal, Pressable, ScrollView, TouchableOpacity, Image, TextInput, Linking } from 'react-native'
import React, {useEffect, useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';


const OrderDetailsConfirmationModal = (props) => {

  return (
    <Modal
    visible={props.visible}
    transparent={true}
    >
      <View style={{flex:1, backgroundColor:"rgba(52, 52, 52, 0.1)"}}>
    <View style={{width:"100%", height:hp('33'), backgroundColor:"white", marginTop:"auto", borderTopLeftRadius:20, borderTopRightRadius:20}}>
    <View style={{width:"auto", height:hp('9'),  alignItems:"flex-end", borderBottomWidth:0.5, borderBottomColor:"lightgray", justifyContent:"center"}}>
           <TouchableOpacity onPress={() => props.setModalVisible(false)}><Icon name={'close-outline'} size={hp('8')} color="black" /></TouchableOpacity>
           </View>
    <View style={{flex:1, alignItems:"center", paddingHorizontal:12}}>
        <Text style={{fontSize:hp('3.5'), fontWeight:"600", marginTop:hp('3')}}>Are you sure you want to cancel this order ?</Text>
        <View style={{ borderRadius:0, position:"absolute", bottom:0,  width:"100%", alignItems:"center", height:hp('8')}}>
   <Pressable onPress={() => props.orderCancelFunc()} disabled={false} style={{backgroundColor: "dodgerblue", borderRadius:10, justifyContent:"center", alignItems:"center",  width:"90%", height:hp('7')}}>
          <Text style={{fontSize:hp('3'), fontWeight:"600", color:"white"}}>Yes, continue</Text>
      </Pressable>
      </View>
  
      </View>



    </View>
    </View>
   </Modal>
  )
}

export default OrderDetailsConfirmationModal