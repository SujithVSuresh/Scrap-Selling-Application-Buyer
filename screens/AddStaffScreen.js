import { View, Text } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';


const AddStaffScreen = () => {
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  return (
    <View style={{flex:1, backgroundColor:"white", paddingHorizontal:wp('5')}}>

        <Text style={{fontWeight:"500", fontSize:hp('2.5'), marginTop:hp('3')}}><Icon name="information-circle-outline" size={hp('3%')} /> Get your staff to join your business as staff</Text>
        <Text style={{fontWeight:"500", fontSize:hp('2.5'), marginTop:hp('3')}}><Icon name="information-circle-outline" size={hp('3%')} /> Ask your staff to scan the QR code below when prompted</Text>

      <View style={{flex:1,  alignItems:"center", paddingTop:hp('9')}}>
          <QRCode
          size={200}
      value={userInfo.id.toString()}
    />
    </View>
    </View>
  )
}
 
export default AddStaffScreen