import { View, Text, Pressable, FlatList, ListView, RefreshControl, ActivityIndicator } from 'react-native'
import React, {useEffect} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useSelector, useDispatch } from 'react-redux'
import { getTodaysSellRequests } from '../redux/actions/sellRequestsActions';
import { useNavigation } from '@react-navigation/native';

const TodaysSellRequests = (props) => {
  const navigation = useNavigation()
    const [refreshing, setRefreshing] = React.useState(false);
    const dispatch = useDispatch()

    const sellRequests = useSelector(state => state.sellRequestsToday)
    const {todaysSellRequests, loading} = sellRequests
    console.log("pottan", todaysSellRequests)
  
    useEffect(() => {
      dispatch(getTodaysSellRequests())
  
    }, [])

    const onRefresh = () => {
        setRefreshing(true);
        dispatch(getTodaysSellRequests())
        setRefreshing(false);

    };
  return (
   <View>
       {loading ? <ActivityIndicator size="large" color="#000000" /> : (
                   <FlatList
       
                   data={todaysSellRequests}
                   showsVerticalScrollIndicator={false}
                   renderItem={({item}) => (
                                    
                    <Pressable onPress={() => navigation.navigate('SellRequestDetailsScreen', {"sellRequestDetails":item})} style={{backgroundColor:"#e7eae5", minHeight:hp('8%'), width:"auto", borderRadius:15, marginBottom:10, marginTop:0, padding:hp('1.8%')}}>
     
                    <View style={{flexDirection:"row", marginBottom:5, justifyContent:"space-between"}}>
                    <Text style={{fontWeight:"300", fontSize:hp('1.7')}}>{item.distance?.toFixed(0)} Km</Text>
                    <Text style={{fontWeight:"300", fontSize:hp('1.7')}}>{item.requestedDate}</Text>
                    </View>
                    <View style={{ flexDirection:"row",justifyContent:"space-between"}}>
                                <View style={{flex:5, flexWrap:"wrap", flexDirection:"row"}}>
                                  {item.data.map((x, index) => (
                                    <View key={index} style={{minWidth:wp('20'), height:hp('5'),backgroundColor: "white", paddingVertical:4, paddingHorizontal:8, margin:2, borderRadius:5, justifyContent:"center", alignItems:"center"}}>
                                    <Text style={{fontWeight:"bold",}}>{x.category.categoryName}</Text>
                                    </View>
                                  ))}
                               </View>
                               <View style={{flex:1, justifyContent:"center", alignItems:"center"}}><Icon name="chevron-down" size={hp('2.5%')} color='black'/></View>
            
                    </View>
            
                    </Pressable>
           
                   )}
                   keyExtractor={item => item.id}
                   refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                 />

       )}

      </View>

  
  )
}

export default TodaysSellRequests