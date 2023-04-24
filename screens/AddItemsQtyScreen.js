import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AddQtyFormModal from '../modals/AddQtyFormModal';
import { ActivityIndicator } from 'react-native';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completeOrder } from '../redux/actions/ordersAction';

const AddItemsQtyScreen = ({route, navigation}) => {
  const dispatch = useDispatch()
  const completeOrderSelector = useSelector(state => state.completeOrder)
  const {loading:{orderCompleteLoading}} = completeOrderSelector

  const { items, orderId } = route.params;
  const [modalVisible, setModalVisible] = useState(false)

  const [itemQty, setItemQty] = useState([])
  const [itemForQty, setItemForQty] = useState({})

  const totalAmount = itemQty.reduce((acc, item) => acc + item.qty * item.rate, 0).toFixed(2)

  useEffect(() => {
    if(itemForQty.qty){
      setItemQty([...itemQty, itemForQty])
      setItemForQty({})
    }
  }, [itemForQty])

  const modalFunc = (itemId, itemName, itemRate) => {
    setModalVisible(true)
    console.log("id", itemId)
    setItemForQty({"id":itemId, "itemName":itemName, "rate":itemRate})
  }

  const setItemQtyFunc = (qty) => {
    setItemForQty({...itemForQty, "qty":qty})
    setModalVisible(false)

  }

  const completeOrderFunc = () => {
    
    dispatch(completeOrder(orderId, totalAmount, itemQty))
    navigation.navigate("OrdersScreen")
  }

  return (
    <View style={{flex:1, backgroundColor:"white"}}>
        <View>
          <View style={{flexDirection:"row", paddingHorizontal:10, backgroundColor:"#e7eae5", justifyContent:"space-between", alignItems:"center", height:40, width:"100%"}}>
            <Text style={{fontWeight:"bold", fontSize:hp('3')}}>Items</Text>
            <Text style={{fontWeight:"bold", fontSize:hp('3')}}>Rate</Text>
            <Text style={{fontWeight:"bold", fontSize:hp('3')}}>Qty</Text>
            <Text style={{fontWeight:"bold", fontSize:hp('3')}}>Price</Text>
            <Text style={{fontWeight:"bold", fontSize:hp('3')}}></Text>
          </View>
          {items.map((item, index) => (
          <View key={index} style={{flexDirection:"row", paddingHorizontal:10, alignItems:"center", height:38, width:"100%"}}>
            
            <View style={{flex:2, alignItems:"center"}}>
            <Text>{item.itemName}</Text>
            </View>
            <View style={{flex:2, alignItems:"center"}}>
            <Text>₹ {item.rate} / Kg</Text>
            </View>
            <View style={{flex:2, alignItems:"center"}}>
              {itemQty.map((x, index) => (
                x.id===item.id && <Text key={index}>{x.qty}</Text>
              ))}
            </View>
            <View style={{flex:2, alignItems:"center"}}>
             {itemQty.map((x, index) => (
                x.id===item.id && <Text key={index}>₹ {x.qty * item.rate}</Text>
              ))}
            </View>
            <View style={{flex:1, alignItems:"center"}}>
            <TouchableOpacity onPress={() => modalFunc(item.id, item.itemName, item.rate)}><Icon name="add-circle-outline" size={hp('4')} /></TouchableOpacity>
          </View>
          </View>
          ) )}
          

  

          <View style={{flexDirection:"row", paddingHorizontal:10, backgroundColor:"#e7eae5", justifyContent:"space-between", alignItems:"center", height:30, width:"100%"}}>
            <Text style={{fontWeight:"bold"}}>Total Amount</Text>
            <Text style={{fontWeight:"bold"}}>₹ {totalAmount}</Text>
          </View>
            
        </View>
        <AddQtyFormModal visible={modalVisible} setModalVisible={setModalVisible} item={itemForQty} setItemQtyFunc={setItemQtyFunc}/>

        <View style={{ borderRadius:0, position:"absolute", bottom:0,  width:"100%", alignItems:"center", height:hp('8')}}>
      <TouchableOpacity onPress={() => completeOrderFunc()} disabled={false} style={{backgroundColor: "dodgerblue", borderRadius:10, justifyContent:"center", alignItems:"center",  width:"90%", height:hp('7')}}>
        {orderCompleteLoading ? <ActivityIndicator /> : <Text style={{fontSize:hp('3'), fontWeight:"600", color:"white"}}>Complete order</Text>}
          
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddItemsQtyScreen