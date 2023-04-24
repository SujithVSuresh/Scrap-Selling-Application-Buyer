import { View, Text, TouchableHighlight, TouchableOpacity, ActivityIndicator, FlatList, RefreshControl } from 'react-native'
import React, { useEffect } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { staffListAction } from '../redux/actions/userActions';


const ManageStaffScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation() 
  const dispatch = useDispatch()

  const staffsList = useSelector(state => state.staffList)
  const {staffs, loading, error} = staffsList
  console.log(staffs)

  useEffect(() => {
    if(staffs.length===0){
      dispatch(staffListAction())
    }
    console.log("kudumbi")
    


  }, [])

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(staffListAction())
    setRefreshing(false);

};

  return (


    <View style={{flex:1, backgroundColor:"white"}}>
      {loading ? <ActivityIndicator /> : (
        <FlatList
        data={staffs}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
                         
         <TouchableHighlight  onPress={() => navigation.navigate('ManageStaffDetailsScreen', {"staffDetails":item})}>
         <View style={{backgroundColor:"white", minHeight:hp('10%'), width:"auto", flexDirection:"row", padding:hp('1.6%'), flexDirection:"row", alignItems:"center"}}>
        
              <View style={{backgroundColor:"lightblue", borderRadius:90, width:hp('7'), height:hp('7'), justifyContent:"center", alignItems:"center", marginRight:12}}><Text style={{fontSize:hp('3.8'),  fontWeight:"500"}}>S</Text></View>
           
           <View>
            <Text style={{fontSize:hp('2.8'),  fontWeight:"500"}}>{item.staff.first_name} </Text>
            <Text style={{fontSize:hp('2'),  fontWeight:"400"}}>{item.staff.is_active ? "Active" : "Not active"} - Staff </Text>
            </View>
            </View>
            </TouchableHighlight>
 
        )}
        keyExtractor={item => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />

      )}





     
     
     <TouchableOpacity onPress={() => navigation.navigate('AddStaffScreen')} style={{width:wp('46'), height:hp('8'), borderRadius:30, flexDirection:"row",  position: 'absolute', left: wp('27'),  bottom:20, justifyContent: 'center', alignItems: 'center', backgroundColor:"dodgerblue" }}>
       <Icon name={'add-sharp'} size={hp('4')} color={'white'}/> 
       <Text style={{color:"white", fontWeight:"500", marginLeft:wp('3')}}>Add Staff</Text>
    </TouchableOpacity>
  
      
    </View>
  
  )
}

export default ManageStaffScreen