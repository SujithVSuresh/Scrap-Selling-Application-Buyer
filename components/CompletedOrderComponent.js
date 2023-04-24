import { View, Text, RefreshControl, FlatList, TouchableHighlight } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCompletedOrders } from '../redux/actions/ordersAction';


const CompletedOrderComponent = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const [refreshing, setRefreshing] = useState(false);

  const completedOrdersList = useSelector(state => state.ordersCompleted)
  const {completedOrders, loading} = completedOrdersList
  console.log("completed:", completedOrders)

  useEffect(() => {
    dispatch(getCompletedOrders())

  }, [])

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getCompletedOrders())
    setRefreshing(false);

};
  return (
    <View style={{backgroundColor:"white", height:hp('82%'), width:wp('100%')}}>
     
  
    {/*<TouchableOpacity onPress={()=>navigation.navigate('CreateCampaignScreen')} style={{backgroundColor:"dodgerblue", width:hp('10.5%'), height:hp('10.5%'), borderRadius:180, justifyContent:"center", alignItems:"center", position:"absolute", zIndex:1, top:hp('68%'), left:wp('73%')}}><Icon name='add' size={hp('4.5%')} color="white" /></TouchableOpacity>*/}
    <FlatList
       
       data={completedOrders}
       showsVerticalScrollIndicator={false}
       renderItem={({item}) => (
                        
        <TouchableHighlight onPress={() => navigation.navigate('CompletedOrderDetailsScreen', {"order":item})}>
 
 
        <View style={{backgroundColor:"white", minHeight:hp('8%'), width:"auto", flexDirection:"row", padding:hp('1.6%')}}>
            <View style={{flex:7,  flexDirection:"row", alignItems:"center"}}>
              <View style={{backgroundColor:"lightblue", borderRadius:90, width:hp('7'), height:hp('7'), justifyContent:"center", alignItems:"center", marginRight:12}}><Text style={{fontSize:hp('3.8'),  fontWeight:"500"}}>S</Text></View>
           
           <View>
            <Text style={{fontSize:hp('2.8'),  fontWeight:"500"}}>{item.sellRequest.requestedUser.first_name} </Text>
           <Text style={{fontSize:hp('2'),  fontWeight:"400"}}>₹ {item.totalPrice}</Text>
            
            </View>
            </View>
            <View style={{flex:2, alignItems:"center", justifyContent:"center"}}>
            <Text style={{fontSize:hp('2'),  fontWeight:"400"}}>{(item.completedDate).slice(0, 10)}</Text>
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

export default CompletedOrderComponent