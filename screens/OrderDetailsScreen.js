
import { View, Text, Modal, Pressable, ScrollView, TouchableOpacity, TouchableHighlight, Linking } from 'react-native'
import React, {useEffect, useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import OrderDetailsConfirmationModal from '../modals/OrderDetailsConfirmationModal';
import { cancelOrder } from '../redux/actions/ordersAction';



const OrderDetailsScreen = ({route, navigation}) => {
  const { order } = route.params;
  console.log("order", order, order.sellRequest.pickupAddress.latitude)
  const [modalVisible, setModalVisible] = useState(false)


  const orderCancel = useSelector(state => state.cancelOrder)
  const {order:cancelledOrder, loading} = orderCancel

  const userLoginInfo = useSelector(state => state.userLogin)
    //console.log("pottan",sellRequests)
    const {userInfo} = userLoginInfo
  
  
  const dispatch = useDispatch()


  


  const orderCancelFunc = () => {
     dispatch(cancelOrder(order.id))
     setModalVisible(false)
     navigation.navigate("OrdersScreen")
  }
  return (
    <View style={{flex:1, backgroundColor:"white", marginTop:0,  borderTopLeftRadius:20, borderTopRightRadius:20}}>


<View style={{paddingHorizontal:0, flexDirection:"row", flexWrap:"wrap", backgroundColor:"white", marginVertical:5}}>
  {order.sellRequest.data.map((x) => (
    <View  style={{minWidth:wp('25'), height:hp('8'), backgroundColor: "#e7eae5", margin:5, padding:8, borderRadius:5}}>
    <Text style={{fontWeight:"bold",}}>{x.itemName}</Text>
    <Text style={{fontSize:hp('1.7')}}>Rs {x.rate} / {x.unit}</Text>
    </View>

  ))}

    </View>
   {/*
   <View style={{backgroundColor:"white", marginVertical:0}}>
    <ScrollView horizontal={true} >
        <View style={{height:hp('20'), width:wp('50'), backgroundColor:"green", marginLeft:8}}>

        </View>
        <View style={{height:hp('20'), width:wp('50'), backgroundColor:"green", marginLeft:8}}>

        </View>
        <View style={{height:hp('20'), width:wp('50'), backgroundColor:"green", marginLeft:8}}>

        </View>
    </ScrollView>
    </View> 
   */}
        
<View style={{backgroundColor:"white", minHeight:hp('9%'), width:"100%", padding:hp('1.6%'), flexDirection:"row"}}>
 
 <View style={{ justifyContent:"center", alignItems:"center", flex:1}}>
 <Icon name="person-outline" size={hp('4%')} />
 </View>
<View style={{flex:5, justifyContent:"center"}}>
<Text style={{fontSize:hp('2.7'),  fontWeight:"500"}}>{order.sellRequest.requestedUser.first_name}</Text>
<Text style={{fontSize:hp('2.3'),  fontWeight:"400", color:"gray"}}>{order.sellRequest.requestedUser.username}</Text>
</View>
<TouchableOpacity onPress={() => Linking.openURL(`tel:${order.sellRequest.requestedUser.username}`)} style={{ alignItems:"center", backgroundColor:"white", justifyContent:"center", borderRadius:90, flex:1}}>
<Icon name="call-outline" color={'dodgerblue'} size={hp('4%')} />
 </TouchableOpacity>
</View>

<View style={{backgroundColor:"white", minHeight:hp('9%'), width:"100%", padding:hp('1.6%'), flexDirection:"row"}}>
 
 <View style={{ justifyContent:"center", alignItems:"center", flex:1}}>
 <Icon name="calendar-outline" size={hp('4')} />
 </View>
<View style={{flex:5, justifyContent:"center"}}>
<Text style={{fontSize:hp('2.7'),  fontWeight:"500"}}>Pickup date</Text>
<Text style={{fontSize:hp('2.3'),  fontWeight:"400", color:"gray"}}>{order.pickupDate}</Text>
</View>
{/*
<TouchableOpacity onPress={() => console.log("bi")} style={{ alignItems:"center", backgroundColor:"white", justifyContent:"center", borderRadius:90, flex:1}}>
<Icon name="pencil-outline" color={'dodgerblue'} size={hp('4%')} />
 </TouchableOpacity>
*/}
</View>

<View style={{backgroundColor:"white", minHeight:hp('9%'), width:"100%", padding:hp('1.6%'), flexDirection:"row"}}>
 
 <View style={{ justifyContent:"center", alignItems:"center", flex:1}}>
 <Icon name="location-outline" size={hp('4')} />
 </View>
<View style={{flex:5, justifyContent:"center"}}>
<Text style={{fontSize:hp('2.7'),  fontWeight:"500"}}>Pickup location</Text>
<Text style={{fontSize:hp('2.3'),  fontWeight:"400", color:"gray"}}>{order.distance} km away</Text>
</View>
<TouchableOpacity onPress={() => Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${order.sellRequest.pickupAddress.latitude},${order.sellRequest.pickupAddress.longitude}`)} style={{ alignItems:"center", backgroundColor:"white", justifyContent:"center", borderRadius:90, flex:1}}>
<Icon name="navigate-outline" color={'dodgerblue'} size={hp('4%')} />
 </TouchableOpacity>
</View>

{userInfo.userType === "ScraperAdmin" && (
<TouchableHighlight onPress={() => {setModalVisible(true)}}>
 <View  style={{minHeight:hp('9%'), backgroundColor:"white", width:"100%", padding:hp('1.6%'), flexDirection:"row"}}>
 <View style={{ justifyContent:"center", alignItems:"center", flex:1}}>
 <Icon name="close-outline" size={hp('4%')} />

 </View>
  <View style={{flex:6, justifyContent:"center"}}>
  <Text style={{fontSize:hp('2.7'),  fontWeight:"500"}}>Cancel order</Text>
  <Text style={{fontSize:hp('2.3'),  fontWeight:"400", color:"gray"}}>Staff will no longer receive notifications</Text>
  </View>

</View>
</TouchableHighlight>
)}

<View style={{ borderRadius:0, position:"absolute", bottom:0,  width:"100%", alignItems:"center", height:hp('8')}}>
   <TouchableOpacity onPress={() => navigation.navigate("AddItemsQtyScreen", {"items":order.sellRequest.data, "orderId":order.id})} disabled={false} style={{backgroundColor: "dodgerblue", borderRadius:10, justifyContent:"center", alignItems:"center",  width:"90%", height:hp('7')}}>
          <Text style={{fontSize:hp('3'), fontWeight:"600", color:"white"}}>Proceed</Text>
      </TouchableOpacity>
      </View>
      <OrderDetailsConfirmationModal visible={modalVisible} setModalVisible={setModalVisible} orderCancelFunc={orderCancelFunc}/>


</View>
  )
}

export default OrderDetailsScreen