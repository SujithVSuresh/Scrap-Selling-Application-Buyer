import { View, Text, Modal, Pressable, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePickerComponent from '../components/DatePickerComponent';
import { useSelector, useDispatch } from 'react-redux'
import { getSellRequestDetails, acceptSellRequest } from '../redux/actions/sellRequestsActions';
import { SELLREQUESTS_ACCEPT_RESET } from '../redux/constants/sellRequestsConstants';

const SellRequestDetailsScreen = ({ route, navigation }) => {
    
    const { sellRequestDetails } = route.params;
    console.log("chai", sellRequestDetails)

    const [pickupDate, setPickupDate] = useState(new Date())
    console.log(pickupDate.toISOString().slice(0,10))

    const dispatch = useDispatch()
  

    const sellRequestAcceptData = useSelector(state => state.sellRequestAccept)
    const {success, loading} = sellRequestAcceptData


      const acceptSellRequestFunc = () => {
          console.log("ooi")
          dispatch(acceptSellRequest(sellRequestDetails.id, pickupDate.toISOString().slice(0,10)))
          navigation.goBack()
      }
    
  

  return (
    <View style={{flex:1, backgroundColor:"white"}}>

           <View style={{width:"auto", height:hp('9'),  alignItems:"flex-end", borderBottomWidth:0.5, borderBottomColor:"lightgray", justifyContent:"center"}}>
           <TouchableOpacity onPress={() => navigation.goBack()}><Icon name={'close-outline'} size={hp('8')} color="black" /></TouchableOpacity>
           </View>
     
           <ScrollView style={{paddingHorizontal:8, flex:1}}>

           <View style={{backgroundColor:"#e7eae5", minHeight:hp('8%'), marginBottom:5, width:"auto", borderRadius:10, flexDirection:"row", padding:hp('1.6%')}}>
            <View style={{flex:7,  flexDirection:"row", alignItems:"center"}}>
              <View style={{backgroundColor:"lightblue", borderRadius:90, width:hp('7'), height:hp('7'), justifyContent:"center", alignItems:"center", marginRight:12}}><Text style={{fontSize:hp('3.8'),  fontWeight:"500"}}>{sellRequestDetails.requestedUser.first_name.slice(0, 1)}</Text></View>
           
           <View>
            <Text style={{fontSize:hp('2.8'),  fontWeight:"500"}}>{sellRequestDetails.requestedUser.first_name} </Text>
           <Text style={{fontSize:hp('2'),  fontWeight:"400"}}>{sellRequestDetails.requestedDate}</Text>
            
            </View>
            </View>
            <View style={{flex:2, alignItems:"center", justifyContent:"center"}}>
            <Text style={{fontSize:hp('2'),  fontWeight:"400"}}>{sellRequestDetails.distance?.toFixed(0)} Km</Text>
            </View>
            </View>

           <View style={{paddingHorizontal:0, flexDirection:"row", flexWrap:"wrap", backgroundColor:"white", marginVertical:hp('0')}}>
             {sellRequestDetails.data.map((item) => (
               <View style={{minWidth:wp('25'), height:hp('8'), backgroundColor: "#e7eae5", margin:3, padding:8, borderRadius:5}}>
               <Text style={{fontWeight:"bold",}}>{item.itemName}</Text>
               <Text style={{fontSize:hp('1.7')}}>Rs {item.rate} / {item.unit}</Text>
               </View>

             ))}
              


          

           </View>
          {/*
          <View style={{backgroundColor:"white", marginVertical:hp('0')}}>

           <ScrollView horizontal={true} >
             {detailsSellRequest?.images?.map((x, index) => (
              
                            
              <Image
              key={index}
               source={{uri: x}}
               style={{height:hp('20'), width:wp('50'), backgroundColor:"green", marginLeft:0}}
             />
            
             
            
   
             ))}
              
           </ScrollView>
           </View> 
           */}

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
     
             <Text style={{fontWeight:"400", marginBottom:3, fontSize:hp('2.3')}}>{sellRequestDetails.pickupAddress.addressName}</Text>
            <View>
            <Text style={{fontSize:hp('2'), color:"gray"}}>{sellRequestDetails.pickupAddress.houseOrFlatNo}</Text>
            <Text style={{fontSize:hp('2'), color:"gray"}}>{sellRequestDetails.pickupAddress.landmark}</Text>
            <Text style={{fontSize:hp('2'), color:"gray"}}>{sellRequestDetails.pickupAddress.city}</Text>
            <Text style={{fontSize:hp('2'), color:"gray"}}>{sellRequestDetails.pickupAddress.village} - {sellRequestDetails.pickupAddress.postalCode}</Text>
            <Text style={{fontSize:hp('2'), color:"gray"}}>Phone number: {sellRequestDetails.pickupAddress.phoneNumber}</Text>
            </View>

            </View>


          </View>

          <DatePickerComponent pickupDate={pickupDate} setPickupDate={setPickupDate}/>

      <View>
       
      </View>

   </ScrollView>
   <View style={{ borderRadius:0, position:"absolute", bottom:0,  width:"100%", alignItems:"center", height:hp('8')}}>
   <TouchableOpacity onPress={() => acceptSellRequestFunc()} disabled={false} style={{backgroundColor: "dodgerblue", borderRadius:10, justifyContent:"center", alignItems:"center",  width:"90%", height:hp('7')}}>
          <Text style={{fontSize:hp('3'), fontWeight:"600", color:"white"}}>Accept Request</Text>
      </TouchableOpacity>
      </View>
   

    
    </View>
  )
}

export default SellRequestDetailsScreen