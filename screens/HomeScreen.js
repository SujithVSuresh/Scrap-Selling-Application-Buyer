import React, {useState, useEffect} from 'react'
import { View, Text, Pressable, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SellReqDetailsModal from '../modals/SellReqDetailsModal';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { getTodaysSellRequests } from '../redux/actions/sellRequestsActions';
import TodaysSellRequests from '../components/TodaysSellRequests';
import TodaysPendingOrders from '../components/TodaysPendingOrders';






const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation()

  const userLoginInfo = useSelector(state => state.userLogin)
    //console.log("pottan",sellRequests)
    const {userInfo} = userLoginInfo

  const onCloseModal = () => {
    setModalVisible(false)
  }
  return (
 
    <View style={{backgroundColor:userInfo.userType === "ScraperAdmin" ? "dodgerblue" : "dodgerblue", flex:1}}>
            <View style={{backgroundColor:userInfo.userType === "ScraperAdmin" ? "dodgerblue" : "dodgerblue", borderRadius:15, minHeight:hp('27%'), width:wp('100%'), paddingHorizontal:wp("0%")}}>
         <View style={{height:hp('10%'), justifyContent:"center", paddingHorizontal:wp("3%")}}>
         <Text style={{fontSize:hp('5%'), fontWeight:"800", fontFamily:"sans-serif", color:"white"}}>Scrapdeal</Text>
         </View>
         <View style={{flexDirection:"row", flexWrap:"wrap"}}>
         {userInfo.userType === "ScraperAdmin" && (
           <Pressable onPress={() => navigation.navigate('SellRequestsScreen')} style={{width:wp('33'), height:wp('30'), justifyContent:"center", alignItems:"center"}}>
             <View style={{backgroundColor:userInfo.userType === "ScraperAdmin" ? "lightblue" : "lightblue", marginBottom:5, width:wp("18%"), height:wp("18%"), borderRadius:8, borderWidth:0.5, justifyContent:"center", alignItems:"center"}}>
             <Icon name="notifications-circle-outline" size={hp('6%')} />
             </View>
             <Text style={{textAlign:"center"}}>Sell Requests</Text>
           </Pressable> 
         )}
           
             <Pressable onPress={() => navigation.navigate('OrdersScreen')} style={{width:wp('33'), height:wp('30'), justifyContent:"center", alignItems:"center"}}>
             <View style={{backgroundColor:userInfo.userType === "ScraperAdmin" ? "lightblue" : "lightblue", marginBottom:5, width:wp("18%"), height:wp("18%"), borderRadius:8, borderWidth:0.5, justifyContent:"center", alignItems:"center"}}>
             <Icon name="cart-outline" size={hp('6%')} />
             </View>
             <Text>Orders</Text>
           </Pressable>

    
           {userInfo.userType === "ScraperAdmin" && (
           <Pressable onPress={() => navigation.navigate('ManageStaffScreen')} style={{width:wp('33'), height:wp('30'), justifyContent:"center", alignItems:"center"}}>
             <View style={{backgroundColor:"lightblue", marginBottom:5, width:wp("18%"), height:wp("18%"), borderRadius:8, borderWidth:0.5, justifyContent:"center", alignItems:"center"}}>
             <Icon name="person-outline" size={hp('6%')} />
             </View>
             <Text>Manage Staff</Text>
           </Pressable>
           )}
           <Pressable onPress={() => navigation.navigate('SettingsScreen')}  style={{width:wp('33'), height:wp('30'), justifyContent:"center", alignItems:"center"}}>
  <View style={{backgroundColor:"lightblue", marginBottom:5, width:wp("18%"), height:wp("18%"), borderRadius:8, borderWidth:0.5, justifyContent:"center", alignItems:"center"}}>
  <Icon name="settings-outline" size={hp('6%')} />
  </View>
  <Text>Settings</Text>

</Pressable>
           </View>
           </View>

         <View style={{backgroundColor:"white", flex:1, width:wp('100%'), paddingHorizontal: userInfo.userType === "ScraperAdmin" ? wp("7") : wp("0"), borderTopLeftRadius:20, borderTopRightRadius:20}}>
        <View style={{paddingVertical:15, flexDirection:"row", paddingHorizontal: userInfo.userType === "ScraperAdmin" ? wp("0") : wp("7"), borderBottomWidth:userInfo.userType === "ScraperAdmin" ? 0 : 0.5, borderBottomColor:"lightgray", justifyContent:"space-between"}}>
        <View>
        <Text style={{fontSize:hp('3.8%'), fontWeight:"700"}}>{userInfo.userType === "ScraperAdmin" ? "Sell Requests" : "Pending Orders"}</Text>
        <Text style={{fontSize:hp('2%'), color:"gray"}}>Today</Text>
        </View>
        <Pressable onPress={() => userInfo.userType === "ScraperAdmin" ? navigation.navigate('SellRequestsScreen') : navigation.navigate('OrdersScreen')} style={{ justifyContent:"center"}}><Text style={{color:"dodgerblue"}}>View all</Text></Pressable>
        </View>
        <View style={{flex:1}}>
        {userInfo.userType === "ScraperAdmin" ? <TodaysSellRequests setModalVisible={setModalVisible}/> : <TodaysPendingOrders />}
          
       </View>

        </View>

        <SellReqDetailsModal visible={modalVisible} closeModal={onCloseModal}/>
      
    </View>

  )
}

export default HomeScreen