
import { ORDERS_PENDING_REQUEST,
    ORDERS_PENDING_SUCCESS,
    ORDERS_PENDING_FAIL,
    ORDERS_COMPLETE_REQUEST,
    ORDERS_COMPLETE_SUCCESS,
    ORDERS_COMPLETE_FAIL,
    ORDERS_CANCEL_REQUEST,
    ORDERS_CANCEL_SUCCESS,
    ORDERS_CANCEL_FAIL,
    ORDERS_COMPLETED_REQUEST,
    ORDERS_COMPLETED_SUCCESS,
    ORDERS_COMPLETED_FAIL,
    ORDERS_PENDING_TODAY_REQUEST,
    ORDERS_PENDING_TODAY_SUCCESS,
    ORDERS_PENDING_TODAY_FAIL
 } from "../constants/ordersConstants"
 import axios from "axios"



        export const getPendingOrders = () => async (dispatch, getState) => {
            try{
                dispatch({
                    type: ORDERS_PENDING_REQUEST
                })
              
        
                const {
                    userLogin: {userInfo},
                } = getState()
        
                const config = {
                    headers:{
                        'Content-type':'application/json',
                        Authorization: `Bearer ${userInfo.token}`
                    }
                }

                

                const {data} = await axios.get(
                    `https://scrap-selling-app-server.onrender.com/api/scraper/admin/pending-orders/`,
                    config
                )

                dispatch({
                    type:ORDERS_PENDING_SUCCESS,
                    payload:data
                }) 
      
            }catch(error){
                dispatch({
                    type:ORDERS_PENDING_FAIL,
                    payload:error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
                })
            }
        }

        export const getOrdersToCompleteToday = () => async (dispatch, getState) => {
            try{
                dispatch({
                    type: ORDERS_PENDING_TODAY_REQUEST
                })
              
        
                const {
                    userLogin: {userInfo},
                } = getState()
        
                const config = {
                    headers:{
                        'Content-type':'application/json',
                        Authorization: `Bearer ${userInfo.token}`
                    }
                }

                

                const {data} = await axios.get(
                    `https://scrap-selling-app-server.onrender.com/api/scraper/staff/get-orders-to-complete-today/`,
                    config
                )

                dispatch({
                    type:ORDERS_PENDING_TODAY_SUCCESS,
                    payload:data
                }) 
      
            }catch(error){
                dispatch({
                    type:ORDERS_PENDING_TODAY_FAIL,
                    payload:error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
                })
            }
        }   
        
        export const getCompletedOrders = () => async (dispatch, getState) => {
            try{
                dispatch({
                    type: ORDERS_COMPLETED_REQUEST
                })
              
        
                const {
                    userLogin: {userInfo},
                } = getState()
        
                const config = {
                    headers:{
                        'Content-type':'application/json',
                        Authorization: `Bearer ${userInfo.token}`
                    }
                }

                

                const {data} = await axios.get(
                    `https://scrap-selling-app-server.onrender.com/api/scraper/admin/completed-orders/`,
                    config
                )

                dispatch({
                    type:ORDERS_COMPLETED_SUCCESS,
                    payload:data
                }) 
      
            }catch(error){
                dispatch({
                    type:ORDERS_COMPLETED_FAIL,
                    payload:error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
                })
            }
        }

        export const completeOrder = (id, totalPrice, orderItems) => async (dispatch, getState) => {
            
            console.log("orderItemsssssssssssssss", orderItems)
            try{
                dispatch({
                    type: ORDERS_COMPLETE_REQUEST
                })

              
                
                const {
                    userLogin: {userInfo},
                    ordersPending: {pendingOrders},
                } = getState()

                
        
                const config = {
                    headers:{
                        'Content-type':'application/json',
                        Authorization: `Bearer ${userInfo.token}`
                    }
                }
                

                const {data} = await axios.post(
                    `https://scrap-selling-app-server.onrender.com/api/scraper/admin/complete-order/${id}/`,
                    {"totalPrice":totalPrice, orderItems:orderItems},
                    config
                )
                console.log("datasaaaaaaaaaa", data)
         
                dispatch({
                    type:ORDERS_COMPLETE_SUCCESS,
                    payload:data
                }) 

                dispatch({
                     type:ORDERS_PENDING_SUCCESS,
                     payload:pendingOrders.filter((order) => order.id !== data.id)
                })
      
            }catch(error){
                dispatch({
                    type:ORDERS_COMPLETE_FAIL,
                    payload:error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
                })
            }
        } 
        
        
        export const cancelOrder = (id) => async (dispatch, getState) => {
            
            
            try{
                dispatch({
                    type: ORDERS_CANCEL_REQUEST
                })

              
                
                const {
                    userLogin: {userInfo},
                    ordersPending: {pendingOrders},
                } = getState()

                console.log("fuck")

                
        
                const config = {
                    headers:{
                        'Content-type':'application/json',
                        Authorization: `Bearer ${userInfo.token}`
                    }
                }
                

                const {data} = await axios.put(
                    `https://scrap-selling-app-server.onrender.com/api/scraper/admin/cancel-order/${id}/`,
                    {},
                    config
                )
                console.log("data", data)
         
                dispatch({
                    type:ORDERS_CANCEL_SUCCESS,
                    payload:data
                }) 

                dispatch({
                     type:ORDERS_PENDING_SUCCESS,
                     payload:pendingOrders.map((order) => {
                         if(order.id===data.id){
                             return data
                         }else{
                             return order

                         }
                        })
                })

                
      
            }catch(error){
                dispatch({
                    type:ORDERS_CANCEL_FAIL,
                    payload:error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
                })
            }
        }         
