import { USER_LOGIN_REQUEST, 
USER_LOGIN_SUCCESS,
USER_LOGIN_FAIL, USER_LOGOUT,
USER_REGISTER_REQUEST, 
    USER_REGISTER_FAIL, 
    USER_REGISTER_SUCCESS,
USER_ADMIN_DETAILS_CREATOR_REQUEST,
USER_ADMIN_DETAILS_CREATOR_SUCCESS,
USER_ADMIN_DETAILS_CREATOR_FAIL,
USER_STAFF_PROFILE_CREATOR_REQUEST,
USER_STAFF_PROFILE_CREATOR_SUCCESS,
USER_STAFF_PROFILE_CREATOR_FAIL,
USER_STAFF_LIST_REQUEST,
USER_STAFF_LIST_SUCCESS,
USER_STAFF_LIST_FAIL,
USER_STAFF_DEACTIVATE_REQUEST,
USER_STAFF_DEACTIVATE_SUCCESS,
USER_STAFF_DEACTIVATE_FAIL} from "../constants/userConstants"

import axios from "axios";
import * as SecureStore from 'expo-secure-store';

export const login = (phone, password) => async (dispatch) => {
    try{
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        console.log("login")
        const {data} = await axios.post(
            'https://scrap-selling-app-server.onrender.com/api/login/',
            {'username':phone, 'password':password},
            config
        )
        console.log("userData", data)
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        }) 
        
        await SecureStore.setItemAsync("userInfoSecureStore", JSON.stringify(data));

    }catch(error){
        dispatch({
            
            type:USER_LOGIN_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}

export const logout = () => async (dispatch) => {
    await SecureStore.deleteItemAsync("userInfoSecureStore")
    dispatch({type:USER_LOGOUT})
}

export const register = (name, phoneNumber, password) => async (dispatch) => {
    try{
        dispatch({
            type: USER_REGISTER_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data} = await axios.post(
            'https://scrap-selling-app-server.onrender.com/api/register/scraper/',
            {'username':phoneNumber, 'name':name, 'password':password},
            config
        )
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        }) 

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        }) 

        await SecureStore.setItemAsync("userInfoSecureStore", JSON.stringify(data));

    }catch(error){
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}


export const adminDetailsCreator = (businessName, ownerName, phoneNumber, pincode, village, subDistrict, district,  state, latitude, longitude ) => async (dispatch, getState) => {
    try{
        dispatch({
            type: USER_ADMIN_DETAILS_CREATOR_REQUEST
        })
        console.log("ooi45")

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data} = await axios.post(
            `https://scrap-selling-app-server.onrender.com/api/scraper/admin/profile-creator/${userInfo.id}/`,
            {'businessName':businessName, 'ownerName':ownerName, 'phoneNumber':phoneNumber, 'pincode': pincode, 'village':village, 'subDistrict':subDistrict, 'district':district, 'state':state, 'latitude': latitude, 'longitude':longitude},
            config
        )
        console.log("ooi46", data)
        dispatch({
            type:USER_ADMIN_DETAILS_CREATOR_SUCCESS,
            payload:data
        }) 

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        }) 
        
        await SecureStore.setItemAsync("userInfoSecureStore", JSON.stringify(data));

    }catch(error){
        dispatch({
            type:USER_ADMIN_DETAILS_CREATOR_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
        console.log(error.message)
    }
}


export const staffProfileCreatorAction = (id) => async (dispatch, getState) => {
    try{
        dispatch({
            type: USER_STAFF_PROFILE_CREATOR_REQUEST
        })

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
            }
        }
        console.log("ooi55")
        const {data} = await axios.post(
            `https://scrap-selling-app-server.onrender.com/api/scraper/staff/add-staff/${userInfo.id}/`,
            {"id":id},
            config
        )
        console.log("ooi56")
        dispatch({
            type:USER_STAFF_PROFILE_CREATOR_SUCCESS,
            payload:data
        }) 

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        }) 
        
        await SecureStore.setItemAsync("userInfoSecureStore", JSON.stringify(data));

    }catch(error){
        dispatch({
            type:USER_STAFF_PROFILE_CREATOR_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}

export const staffListAction = () => async (dispatch, getState) => {
    try{
        dispatch({
            type: USER_STAFF_LIST_REQUEST
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
            `https://scrap-selling-app-server.onrender.com/api/scraper/admin/all-staffs/`,
            config
        )

        dispatch({
            type:USER_STAFF_LIST_SUCCESS,
            payload:data
        }) 

    }catch(error){
        dispatch({
            type:USER_STAFF_LIST_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}


export const deactivateStaffAction = (id) => async (dispatch, getState) => {
    try{
        dispatch({
            type: USER_STAFF_DEACTIVATE_REQUEST
        })
        console.log("ooi1")

        const {
            userLogin: {userInfo},
            staffList: {staffs}

        } = getState()
        console.log("ooi2:",userInfo.token)

        const config = {
            headers:{
                'Content-type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.put(
            `https://scrap-selling-app-server.onrender.com/api/scraper/admin/deactivate-staff/${id}/`,
            {},
            config
        )
        console.log("ooi3")
        dispatch({
            type:USER_STAFF_DEACTIVATE_SUCCESS,
            payload:data
        }) 

        dispatch({
            type:USER_STAFF_LIST_SUCCESS,
            payload:staffs.filter((staff) => staff.id === data.id)
        })

    }catch(error){
        dispatch({
            type:USER_STAFF_DEACTIVATE_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}