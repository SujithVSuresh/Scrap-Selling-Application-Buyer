import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import HomeScreen from '../screens/HomeScreen';
import SellRequestsScreen from '../screens/SellRequestsScreen';
import ManageStaffScreen from '../screens/ManageStaffScreen';
import ManageStaffDetailsScreen from '../screens/ManageStaffDetailsScreen';
import OrdersScreen from '../screens/OrdersScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import AddItemsQtyScreen from '../screens/AddItemsQtyScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import ChooseLocationOnMapScreen from '../screens/ChooseLocationOnMapScreen';
import SignupAdminDetailsScreen from '../screens/SignupAdminDetailsScreen';
import ChooseUserTypeScreen from '../screens/ChooseUserTypeScreen';
import SignupStaffScreen from '../screens/SignupStaffScreen';
import AddStaffScreen from '../screens/AddStaffScreen';
import CompletedOrderDetailsScreen from '../screens/CompletedOrderDetailsScreen';
import SellRequestDetailsScreen from '../screens/SellRequestDetailsScreen';
import { useSelector, useDispatch } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { login } from '../redux/actions/userActions';
import { USER_LOGIN_SUCCESS } from '../redux/constants/userConstants';
import * as SecureStore from 'expo-secure-store';


const StackNavigation = () => {
  const dispatch = useDispatch()

   const Stack = createNativeStackNavigator();

    const userLoginInfo = useSelector(state => state.userLogin)
    const {userInfo} = userLoginInfo


    useEffect(() => {
    const userInfoFromStorage = async ()  => {
      try {
      const storedData = await SecureStore.getItemAsync('userInfoSecureStore') ? await SecureStore.getItemAsync("userInfoSecureStore") : null
      const parsedData = JSON.parse(storedData)

      
      if (parsedData !== null){
      dispatch({type:USER_LOGIN_SUCCESS, payload:parsedData})
     }
      } catch (error) {
     console.log(error);
     }
    }
    userInfoFromStorage()
  

    }, [])
  return (
    <Stack.Navigator
    screenOptions={{
      headerShadowVisible: false,
      headerStyle: {backgroundColor:"dodgerblue"},
      headerTintColor: 'white',
      headerTitleStyle: {
             color: 'white'
           },
   
      }}>
         {Object.keys(userInfo).length === 0 ? (
           <>
           <Stack.Screen name="SigninScreen" component={SigninScreen} options={{headerShown: false, animation:'fade'}}/>
           <Stack.Screen name="SignupScreen" component={SignupScreen} options={{headerShown: false, animation:'fade'}}/>
          
           </>
         ) : (
           <>
           {userInfo.is_active===false && (
             <>
             <Stack.Screen name="ChooseUserTypeScreen" component={ChooseUserTypeScreen} options={{headerShown: true, title:'Choose User Type', animation:'fade'}}/>
             <Stack.Screen name="SignupAdminDetailsScreen" component={SignupAdminDetailsScreen} options={{headerShown: true, title:'Add Details', animation:'fade'}}/>
             <Stack.Screen name="ChooseLocationOnMapScreen" component={ChooseLocationOnMapScreen} options={{headerShown: true, title:'Select Location', animation:'fade'}}/>
             <Stack.Screen name="SignupStaffScreen" component={SignupStaffScreen} options={{headerShown: true, animation:'fade'}}/>
             </>

           )}

           <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false, animation:'fade'}}/>
           <Stack.Screen name="SellRequestsScreen" component={SellRequestsScreen} options={{headerShown: true, title:'Sell Requests', animation:'fade'}}/>
           <Stack.Screen name="SellRequestDetailsScreen" component={SellRequestDetailsScreen} options={{headerShown: false, title:'Sell Requests', animation:"fade_from_bottom"}}/>
           <Stack.Screen name="OrdersScreen" component={OrdersScreen} options={{headerShown: true, title:'Orders', animation:'fade'}}/>
           <Stack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen} options={{headerShown: true, title:'Order Details', animation:'fade'}}/>
           <Stack.Screen name="CompletedOrderDetailsScreen" component={CompletedOrderDetailsScreen} options={{headerShown: true, title:'Order Details', animation:'fade'}}/>
           <Stack.Screen name="ManageStaffScreen" component={ManageStaffScreen} options={{headerShown: true, title:'Manage Staff', animation:'fade'}}/>
           <Stack.Screen name="ManageStaffDetailsScreen" component={ManageStaffDetailsScreen} options={{headerShown: true, title:'Manage Staff', animation:'fade'}}/>
           <Stack.Screen name="AddStaffScreen" component={AddStaffScreen} options={{headerShown: true, title:'Add Staff', animation:'fade'}}/>
           <Stack.Screen name="AddItemsQtyScreen" component={AddItemsQtyScreen} options={{headerShown: true, title:'Add Quantity', animation:'fade'}}/>
           <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{headerShown: true, title:'Settings', animation:'fade'}}/>
           </>
         )}
         
     
         
       
          
         </Stack.Navigator> 

          
 
  )
}

export default StackNavigation