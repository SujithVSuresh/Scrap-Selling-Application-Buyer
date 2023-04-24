import { View, Text, TouchableHighlight, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { deactivateStaffAction } from '../redux/actions/userActions';



const ManageStaffDetailsScreen = ({route, navigation}) => {
  const { staffDetails } = route.params;
  console.log("staffDetails: ", staffDetails)

  const dispatch = useDispatch()

  const deactivateStaff = useSelector(state => state.staffDeactivate)
  const {staff, loading, error} = deactivateStaff
  console.log("ppo:", staff, error)

  const deactivateStaffFunc = (id) => {
    dispatch(deactivateStaffAction(id))
    navigation.goBack()
  }

  return (
    <View style={{flex:1, backgroundColor:"white"}}>
        <View style={{height:hp("30"), backgroundColor:"#e7eae5", alignItems:"center", justifyContent:"center"}}>
        <View style={{backgroundColor:"blue", borderRadius:90, width:hp('10'), height:hp('10'), justifyContent:"center", alignItems:"center", marginVertical:hp('1')}}><Text style={{fontSize:hp('5.8'), color:"white",  fontWeight:"500"}}>{staffDetails.staff.first_name.slice(0, 1)}</Text></View>
        <Text style={{fontSize:hp('2.8'),  fontWeight:"500"}}>{staffDetails.staff.first_name}</Text>
        <Text style={{fontSize:hp('2.5'),  fontWeight:"400", color:"gray"}}>{staffDetails.staff.username}</Text>
        <View style={{backgroundColor:"lightblue", borderRadius:30, width:hp('8'), height:hp('3'), justifyContent:"center", alignItems:"center",  marginVertical:hp('1')}}><Text style={{fontSize:hp('2.0')}}>{staffDetails.staff.is_active ? "Active" : "Not active"}</Text></View>
        </View>
        <View style={{height:hp("60")}}>
         {/* 
  <View style={{backgroundColor:"white", minHeight:hp('9%'), width:"100%", padding:hp('1.6%'), flexDirection:"row"}}>
 
       <View style={{ justifyContent:"center", alignItems:"center", flex:1}}>
       <Icon name="person-outline" size={hp('4%')} />
       </View>
     
    <View style={{flex:5, justifyContent:"center"}}>
     <Text style={{fontSize:hp('2.7'),  fontWeight:"500"}}>Nickname </Text>
     <Text style={{fontSize:hp('2.3'),  fontWeight:"400", color:"gray"}}>Sureshkumar V K</Text>
     </View>
       
     <TouchableOpacity onPress={() => console.log("bi")} style={{ alignItems:"center", backgroundColor:"white", justifyContent:"center", borderRadius:90, flex:1}}>
     <Icon name="pencil-outline" color={'dodgerblue'} size={hp('4%')} />
       </TouchableOpacity>
     



     </View>
     */}
     <View style={{minHeight:hp('9%'), width:"100%", padding:hp('1.6%'), flexDirection:"row"}}>
 
 <View style={{ justifyContent:"center", alignItems:"center", flex:1}}>
 <Icon name="trash-outline" size={hp('3.5%')} />

 </View>

<TouchableOpacity onPress={() => deactivateStaffFunc(staffDetails.staff.id)} style={{flex:6, justifyContent:"center"}}>
<Text style={{fontSize:hp('2.7'),  fontWeight:"500"}}>Deactivate account</Text>
<Text style={{fontSize:hp('2.3'),  fontWeight:"400", color:"gray"}}>Staff will no longer receive notifications</Text>
</TouchableOpacity>






</View>
{loading && <ActivityIndicator />}

    

        </View>
      
    </View>
  )
}

export default ManageStaffDetailsScreen