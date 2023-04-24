import { View, Text, Modal, Pressable, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePickerComponent from '../components/DatePickerComponent';
import { useSelector, useDispatch } from 'react-redux'
import { getSellRequestDetails } from '../redux/actions/sellRequestsActions';

const SellReqDetailsModal = (props) => {
  const [pickupDate, setPickupDate] = useState(new Date())

  const dispatch = useDispatch()

  const sellRequestDetailsData = useSelector(state => state.sellRequestDetails)
  const {detailsSellRequest, loading} = sellRequestDetailsData
  

  useEffect(() => {
    if(props.requestId!==null){
      console.log("ooi", props.requestId)
     
      dispatch(getSellRequestDetails(props.requestId))

    }
    

  }, [props.requestId])

  return (

      <Modal
       visible={props.visible}
       transparent={true}
       >
         <View style={{flex:1, backgroundColor:"rgba(52, 52, 52, 0.7)"}}>
       <View style={{width:"100%", height:hp('70'), backgroundColor:"white", marginTop:"auto", borderTopLeftRadius:20, borderTopRightRadius:20}}>
           <View style={{width:"auto", height:hp('9'),  alignItems:"flex-end", borderBottomWidth:0.5, borderBottomColor:"lightgray", justifyContent:"center"}}>
           <TouchableOpacity onPress={() => props.closeModal()}><Icon name={'close-outline'} size={hp('8')} color="black" /></TouchableOpacity>
           </View>
     
           <ScrollView style={{paddingHorizontal:8, flex:1}}>

           <View style={{paddingHorizontal:0, flexDirection:"row", flexWrap:"wrap", backgroundColor:"white", marginVertical:hp('0')}}>
           {detailsSellRequest?.products?.map((x, index) => (
              <View key={index}  style={{minWidth:wp('25'), height:hp('8'), backgroundColor: "#e7eae5", margin:0, padding:8, borderRadius:5}}>
              <Text style={{fontWeight:"bold",}}>{x.productName}</Text>
              <Text style={{fontSize:hp('1.7')}}>Rs {x.rate} / Kg</Text>
              </View>

           ))}
          

           </View>
          
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

       
  



     <View
         style={{width:"100%", 
          minHeight:hp('5'), 
          backgroundColor:"#e7eae5", 
          flexDirection:"row",
          borderRadius:10,
          padding:7,
          borderColor:'black',
          marginVertical:hp('0')}} 
          >
            <View style={{flex:1,  alignItems:"center"}}>
            <Icon name={'compass-outline'} size={hp('4.5')}/>

            </View>
            <View style={{flex:6, padding:0}}>


            <Text style={{fontSize:hp('1.8'), color:"gray"}}>
              {detailsSellRequest?.address?.location?.map((x) => (
                
                x 
              
              ))}
            </Text>
            <Text style={{fontSize:hp('1.8'), fontWeight:"600"}}>[ 8 Km away ]</Text>
       
            </View>
      </View>

      <View>
        <DatePickerComponent setPickupDate={setPickupDate} pickupDate={pickupDate}/>
      </View>

   </ScrollView>
   <View style={{ borderRadius:0, position:"absolute", bottom:0,  width:"100%", alignItems:"center", height:hp('8')}}>
   <Pressable disabled={true} style={{backgroundColor:"light+-gray", borderRadius:10, justifyContent:"center", alignItems:"center",  width:"90%", height:hp('7')}}>
          <Text style={{fontSize:hp('3'), fontWeight:"600", color:"white"}}>Accept Request</Text>
      </Pressable>
      </View>
   

       </View>
       </View>
      </Modal>

  )
}

export default SellReqDetailsModal