import { View, Text, Modal, Pressable, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, {useEffect, useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';


const AddQtyFormModal = (props) => {
  const [itemQty, setItemQty] = useState(null)

    
  

  return (
    <Modal
    visible={props.visible}
    transparent={true}
    >
      <View style={{flex:1, backgroundColor:"rgba(52, 52, 52, 0.1)"}}>
    <View style={{width:"100%", height:hp('30'), backgroundColor:"white", marginTop:"auto", borderTopLeftRadius:20, borderTopRightRadius:20}}>
    <View style={{width:"auto", height:hp('9'), flexDirection:"row", borderBottomWidth:0.5, borderBottomColor:"lightgray", justifyContent:"space-between", alignItems:"center"}}>
      <Text style={{fontSize:hp('2.8'), fontWeight:"600", marginLeft:20}}>{props.item.itemName}</Text>
      <TouchableOpacity onPress={() => props.setModalVisible(false)}><Icon name={'close-outline'} size={hp('8')} color="black" /></TouchableOpacity>
    </View>
    <View style={{padding:15, justifyContent:"center", alignItems:"center"}}>
  <TextInput onChangeText={text => setItemQty(text)} style={{height: hp('8'), width:wp('90'), margin: 0, backgroundColor:"white", borderBottomWidth: 0.5, borderColor:"gray", padding: 10,}} 
      placeholder="Quantity"
      autoFocus={true}
      keyboardType="number-pad"></TextInput>
      <Pressable onPress={() => props.setItemQtyFunc(itemQty)} disabled={false} style={{backgroundColor: "dodgerblue", borderRadius:10, justifyContent:"center", alignItems:"center",  width:wp('90'), height:hp('7'), marginTop:10}}>
          <Text style={{fontSize:hp('3'), fontWeight:"600", color:"white"}}>Add</Text>
      </Pressable>
      </View>
    </View>
    </View>
   </Modal>
  )
}

export default AddQtyFormModal