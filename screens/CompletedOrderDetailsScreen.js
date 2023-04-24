import { View, Text } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CompletedOrderDetailsScreen = ({navigation, route}) => {
    const { order } = route.params;
    console.log(order)
  return (
    <View style={{flex:1, backgroundColor:"white"}}>
    <View>
    <View style={{flexDirection:"row", paddingHorizontal:10, backgroundColor:"#e7eae5", justifyContent:"space-between", alignItems:"center", height:40, width:"100%"}}>
      <Text style={{fontWeight:"600", fontSize:hp('3')}}>Items</Text>
      <Text style={{fontWeight:"600", fontSize:hp('3')}}>Rate</Text>
      <Text style={{fontWeight:"600", fontSize:hp('3')}}>Qty</Text>
      <Text style={{fontWeight:"600", fontSize:hp('3')}}>Price</Text>
    </View>
    {order.orderItems.map((item, index) => (
    <View key={index} style={{flexDirection:"row", paddingHorizontal:10, alignItems:"center", height:38, width:"100%"}}>
      
      <View style={{flex:2}}>
      <Text>{item.item.itemName}</Text>
      </View>
      <View style={{flex:2, alignItems:"center"}}>
      <Text>₹ {item.item.rate} / Kg</Text>
      </View>
      <View style={{flex:2, alignItems:"center"}}>
      <Text>{item.quantity}</Text>
      </View>
      <View style={{flex:2, alignItems:"flex-end"}}>
      <Text>{item.quantity * item.item.rate}</Text>
      </View>
   
    </View>
    ) )}

    



    <View style={{flexDirection:"row", paddingHorizontal:10, backgroundColor:"#e7eae5", justifyContent:"space-between", alignItems:"center", height:30, width:"100%"}}>
      <Text style={{fontWeight:"600"}}>Total Amount</Text>
      <Text style={{fontWeight:"600"}}>₹ 786</Text>
    </View>
    </View>


    <View
    
      style={{width:"100%", 
      minHeight:hp('8'), 
      backgroundColor: "#e7eae5", 
      flexDirection:"row",
      borderWidth:0,
      borderRadius:10,
      borderColor:"lightgray",
      marginTop:15,
      marginBottom:10,
      padding:10,
      }} 
          >

            <View style={{flex:5}}>
     
             <Text style={{fontWeight:"600", marginBottom:3, fontSize:hp('2.3')}}>More details</Text>
            <View>
            <Text style={{fontSize:hp('2'), color:"gray"}}>Requested user: {order.sellRequest.requestedUser.first_name}</Text>
            <Text style={{fontSize:hp('2'), color:"gray"}}>Phone: {order.sellRequest.requestedUser.username}</Text>
            <Text style={{fontSize:hp('2'), color:"gray"}}>Requested date: {order.sellRequest.requestedDate}</Text>
            <Text style={{fontSize:hp('2'), color:"gray"}}>Accepted date: {order.acceptedDate}</Text>
            <Text style={{fontSize:hp('2'), color:"gray"}}>Completed user:</Text>
            <Text style={{fontSize:hp('2'), color:"gray"}}>Completed date: {order.completedDate.slice(0, 10)}</Text>
            
            </View>

            </View>


          </View>


    <View
    
    style={{width:"100%", 
    minHeight:hp('8'), 
    backgroundColor: "#e7eae5", 
    flexDirection:"row",
    borderWidth:0,
    borderRadius:10,
    borderColor:"lightgray",
    marginTop:5,
    marginBottom:10,
    padding:10,
    }} 
        >

          <View style={{flex:5}}>
   
           <Text style={{fontWeight:"400", marginBottom:3, fontSize:hp('2.3')}}>Pickup Address</Text>
          <View>
          <Text style={{fontSize:hp('2'), color:"gray"}}>{order.sellRequest.pickupAddress.houseOrFlatNo}</Text>
          <Text style={{fontSize:hp('2'), color:"gray"}}>{order.sellRequest.pickupAddress.landmark}</Text>
          <Text style={{fontSize:hp('2'), color:"gray"}}>{order.sellRequest.pickupAddress.city}</Text>
          <Text style={{fontSize:hp('2'), color:"gray"}}>{order.sellRequest.pickupAddress.village} - {order.sellRequest.pickupAddress.postalCode}</Text>
          <Text style={{fontSize:hp('2'), color:"gray"}}>Phone number: {order.sellRequest.pickupAddress.phoneNumber}</Text>
          </View>

          </View>


        </View>


  </View>
  )
}

export default CompletedOrderDetailsScreen