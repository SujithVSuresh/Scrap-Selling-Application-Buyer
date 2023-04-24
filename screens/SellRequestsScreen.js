import { View, Text, SectionList, Pressable, RefreshControl, ActivityIndicator, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SellReqDetailsModal from '../modals/SellReqDetailsModal';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { getAllSellRequests } from '../redux/actions/sellRequestsActions';


const SellRequestsScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    
    const navigation = useNavigation()


    const dispatch = useDispatch()

    const sellRequests = useSelector(state => state.sellRequestsAll)
    const {allSellRequests, loading} = sellRequests
    console.log("fff", allSellRequests)

    useEffect(() => {
      dispatch(getAllSellRequests())
  
    }, [])

    const onRefresh = () => {
      setRefreshing(true);
      dispatch(getAllSellRequests())
      setRefreshing(false);

  };



  return (
    <View style={{backgroundColor:"white", flex:1, paddingHorizontal:10}}>

{loading ? <ActivityIndicator size="large" color="#000000" /> : (
                   <FlatList
       
                   data={allSellRequests}
                   showsVerticalScrollIndicator={false}
                   renderItem={({item}) => (
                                    
                    <Pressable onPress={() => navigation.navigate('SellRequestDetailsScreen', {"sellRequestDetails":item})} style={{backgroundColor:"#e7eae5", minHeight:hp('8%'), width:"auto", borderRadius:15, marginBottom:0, marginTop:10, padding:hp('1.8%')}}>
     
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
                   keyExtractor={item => item?.id}
                   refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                 />

       )}
    </View>
  )
}

export default SellRequestsScreen