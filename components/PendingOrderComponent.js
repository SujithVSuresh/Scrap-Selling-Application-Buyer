import { View, Text, TouchableHighlight, FlatList, RefreshControl } from 'react-native'
import React, {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getPendingOrders } from '../redux/actions/ordersAction';

const PendingOrderComponent = () => {
    const navigation = useNavigation()
    const [refreshing, setRefreshing] = useState(false);
    
    const dispatch = useDispatch()

    const pendingOrdersList = useSelector(state => state.ordersPending)
    //console.log("pottan",sellRequests)
    const {pendingOrders, loading} = pendingOrdersList
    console.log("pending orders", pendingOrders)
  
    useEffect(() => {
      dispatch(getPendingOrders())
  
    }, [])

    const onRefresh = () => {
      setRefreshing(true);
      dispatch(getPendingOrders())
      setRefreshing(false);

  };
  return (
    <View style={{backgroundColor:"white", height:hp('82%'), width:wp('100%')}}>
     
  
    {/*<TouchableOpacity onPress={()=>navigation.navigate('CreateCampaignScreen')} style={{backgroundColor:"dodgerblue", width:hp('10.5%'), height:hp('10.5%'), borderRadius:180, justifyContent:"center", alignItems:"center", position:"absolute", zIndex:1, top:hp('68%'), left:wp('73%')}}><Icon name='add' size={hp('4.5%')} color="white" /></TouchableOpacity>*/}
    <FlatList
       
       data={pendingOrders}
       showsVerticalScrollIndicator={false}
       renderItem={({item}) => (
                        
        <TouchableHighlight onPress={() => navigation.navigate('OrderDetailsScreen', {"order":item})}>
 
 
        <View style={{backgroundColor:"white", minHeight:hp('8%'), width:"auto", flexDirection:"row", padding:hp('1.6%')}}>
            <View style={{flex:7,  flexDirection:"row", alignItems:"center"}}>
              <View style={{backgroundColor:"lightblue", borderRadius:90, width:hp('7'), height:hp('7'), justifyContent:"center", alignItems:"center", marginRight:12}}><Text style={{fontSize:hp('3.8'),  fontWeight:"500"}}>{item.sellRequest.requestedUser.first_name.slice(0, 1)}</Text></View>
           
           <View>
            <Text style={{fontSize:hp('2.8'),  fontWeight:"500"}}>{item.sellRequest.requestedUser.first_name}</Text>
            {item.requestStatus==="Order cancelled" ? <Text style={{fontSize:hp('2'),  fontWeight:"400", color:"red"}}>Order cancelled</Text> : <Text style={{fontSize:hp('2'),  fontWeight:"400"}}>Pickup - {item.pickupDate}</Text>}
            
            </View>
            </View>
            <View style={{flex:2, alignItems:"center", justifyContent:"center"}}>
            <Text style={{fontSize:hp('2'),  fontWeight:"400"}}>{item?.distance?.toFixed(0)} Km</Text>
            </View>
            </View>

        </TouchableHighlight>

       )}
       keyExtractor={item => item.id}
       refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
     />
 


 
 

      
      </View>
  )
}

export default PendingOrderComponent