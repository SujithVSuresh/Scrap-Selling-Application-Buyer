import { View, Text, FlatList, RefreshControl, ActivityIndicator, TouchableHighlight } from 'react-native'
import React, {useEffect} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { getOrdersToCompleteToday } from '../redux/actions/ordersAction';

const TodaysPendingOrders = () => {
    const navigation = useNavigation()
    const [refreshing, setRefreshing] = React.useState(false);
    const dispatch = useDispatch()

    const pendingOrdersList = useSelector(state => state.ordersPendingToday)
    const {pendingOrders, loading} = pendingOrdersList
    console.log("pottan", pendingOrders)
  
    useEffect(() => {
      dispatch(getOrdersToCompleteToday())
  
    }, [])

    const onRefresh = () => {
        setRefreshing(true);
        dispatch(getOrdersToCompleteToday())
        setRefreshing(false);

    };
  return (
    <View>
    {loading ? <ActivityIndicator size="large" color="#000000" /> : (
                <FlatList
    
                data={pendingOrders}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                                 
                    <TouchableHighlight onPress={() => navigation.navigate('OrderDetailsScreen', {"order":item})}>
 
 
                    <View style={{backgroundColor:"white", minHeight:hp('8%'), width:"auto", flexDirection:"row", padding:hp('1.6%')}}>
                    <View style={{flex:7,  flexDirection:"row", alignItems:"center"}}>
                          <View style={{backgroundColor:"lightblue", borderRadius:90, width:hp('7'), height:hp('7'), justifyContent:"center", alignItems:"center", marginRight:12}}><Text style={{fontSize:hp('3.8'),  fontWeight:"500"}}>S</Text></View>
                       
                          <View>
                        <Text style={{fontSize:hp('2.8'),  fontWeight:"500"}}>Sureshkumar VK </Text>
                        <Text style={{fontSize:hp('2'),  fontWeight:"400"}}>Pickup - {item?.pickupDate}</Text>
                        
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

    )}

   </View>
  )
}

export default TodaysPendingOrders