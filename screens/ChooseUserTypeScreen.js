import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';


const ChooseUserTypeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{flex:1, backgroundColor:"white", paddingHorizontal:wp('8')}}>
      <Text style={{fontWeight:"400", fontSize:hp("3.8"), marginVertical:hp('2')}}>Set up or join a business</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignupAdminDetailsScreen', {"coordinates":{}})} style={{flexDirection:"row", minHeight:hp('12'), marginVertical:hp('2')}}>
        <View style={{flex:1}}>
          <View style={{backgroundColor:"lightblue", width:hp('9'), justifyContent:"center", alignItems:"center", height:hp('9'), borderRadius:90}}>
          <Icon name="add-outline" size={hp('5%')} color={'dodgerblue'}/>
          </View>

        </View>
        <View style={{ flex:3}}>
          <Text style={{fontWeight:"400", fontSize:hp("2.8")}}>Set up a business as owner</Text>
          <Text style={{color:"gray"}}>You'll need your business details and business address</Text>

        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignupStaffScreen')} style={{flexDirection:"row", minHeight:hp('12'), marginVertical:hp('2')}}>
        <View style={{flex:1}}>
          <View style={{backgroundColor:"lightblue", width:hp('9'), justifyContent:"center", alignItems:"center", height:hp('9'), borderRadius:90}}>
          <Icon name="add-outline" size={hp('5%')} color={'dodgerblue'}/>
          </View>

        </View>
        <View style={{ flex:3}}>
          <Text style={{fontWeight:"400", fontSize:hp("2.8"), marginBottom:hp('0.5')}}>Join a business as staff</Text>
          <Text style={{color:"gray"}}>You'll need your owner's approval to join a business</Text>

        </View>
      </TouchableOpacity>
      
    </View>
  )
}

export default ChooseUserTypeScreen
