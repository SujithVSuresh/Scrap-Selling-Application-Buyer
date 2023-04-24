import { 
    SELLREQUESTS_TODAY_REQUEST,
    SELLREQUESTS_TODAY_SUCCESS,
    SELLREQUESTS_TODAY_FAIL,
    SELLREQUESTS_ALL_REQUEST,
    SELLREQUESTS_ALL_SUCCESS,
    SELLREQUESTS_ALL_FAIL,
    SELLREQUESTS_DETAILS_REQUEST,
    SELLREQUESTS_DETAILS_SUCCESS,
    SELLREQUESTS_DETAILS_FAIL,
    SELLREQUESTS_ACCEPT_REQUEST,
    SELLREQUESTS_ACCEPT_SUCCESS,
    SELLREQUESTS_ACCEPT_FAIL,

 } from "../constants/sellRequestsConstants";

import axios from "axios"

        export const getTodaysSellRequests = () => async (dispatch, getState) => {
            try{
                dispatch({
                    type: SELLREQUESTS_TODAY_REQUEST
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
                    `https://scrap-selling-app-server.onrender.com/api/scraper/admin/todays-sell-requests/`,
                    config
                )
                dispatch({
                    type:SELLREQUESTS_TODAY_SUCCESS,
                    payload:data
                }) 
      
            }catch(error){
                dispatch({
                    type:SELLREQUESTS_TODAY_FAIL,
                    payload:error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
                })
            }
        }


        export const getAllSellRequests = () => async (dispatch, getState) => {
            try{
                dispatch({
                    type: SELLREQUESTS_ALL_REQUEST
                })
                const {
                    userLogin: {userInfo},
                    
                } = getState()
                console.log(userInfo)
        
                const config = {
                    headers:{
                        'Content-type':'application/json',
                        Authorization: `Bearer ${userInfo.token}`
                    }
                }
                const {data} = await axios.get(
                    `https://scrap-selling-app-server.onrender.com/api/scraper/admin/sell-requests/`,
                    config
                )
                dispatch({
                    type:SELLREQUESTS_ALL_SUCCESS,
                    payload:data
                }) 
            }catch(error){
                dispatch({
                    type:SELLREQUESTS_ALL_FAIL,
                    payload:error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
                })
            }
        } 
        
        export const getSellRequestDetails = (id) => async (dispatch, getState) => {
            try{
                dispatch({
                    type: SELLREQUESTS_DETAILS_REQUEST
                })
        
                //const {
                //    userLogin: {userInfo},
                //} = getState()
        
                const config = {
                    headers:{
                        'Content-type':'application/json',
                //        Authorization: `Bearer ${userInfo.token}`
                    }
                }

                const {data} = await axios.get(
                    `https://api-mocker.onrender.com/read/details/unauthenticated/ScrapSellingApp-ScraperModule/sellRequestDetails/${id}/`,
                    config
                )
  

                dispatch({
                    type:SELLREQUESTS_DETAILS_SUCCESS,
                    payload:data
                }) 

                
      
            }catch(error){
                dispatch({
                    type:SELLREQUESTS_DETAILS_FAIL,
                    payload:error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
                })
            }
        } 

        export const acceptSellRequest = (id, pickupDate) => async (dispatch, getState) => {
            try{
                console.log("sar1")
                dispatch({
                    type: SELLREQUESTS_ACCEPT_REQUEST
                })
                console.log("accepted_data")
        
                const {
                    userLogin: {userInfo},
                    sellRequestsAll: {allSellRequests},
                    sellRequestsToday: {todaysSellRequests},
                } = getState()
                console.log("sar2")
                
        
                const config = {
                    headers:{
                        'Content-type':'application/json',
                        Authorization: `Bearer ${userInfo.token}`
                    }
                }

                const {data} = await axios.post(
                    `https://scrap-selling-app-server.onrender.com/api/scraper/admin/accept-sell-request/${id}/`,
                    {"pickupDate": pickupDate},
                    config
                )

                console.log("sar3", data)
  

                dispatch({
                    type:SELLREQUESTS_ACCEPT_SUCCESS,
                    payload:data
                }) 

    
                dispatch({
                     type:SELLREQUESTS_ALL_SUCCESS,
                     payload:allSellRequests.filter((sellReq) => sellReq.id !== data.id)
                })

                dispatch({
                    type:SELLREQUESTS_TODAY_SUCCESS,
                    payload:todaysSellRequests.filter((sellReq) => sellReq.id !== data.id)
                }) 
      
            }catch(error){
                dispatch({
                    type:SELLREQUESTS_ACCEPT_FAIL,
                    payload:error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
                })
            }
        }      
        
