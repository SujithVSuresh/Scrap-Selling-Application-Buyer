import { USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL, 
    USER_LOGOUT,
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
USER_STAFF_DEACTIVATE_FAIL } from "../constants/userConstants";


export const userLoginReducers = (state = {userInfo:{}}, action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {...state, loading:true}

        case USER_LOGIN_SUCCESS:
            return {loading:false, userInfo: action.payload}  
            
        case USER_LOGIN_FAIL:
            return {...state, loading:false, error:action.payload}  
            
        case USER_LOGOUT:
            return {userInfo:{}}      
            
        default:
            return state   
    }

}

export const userRegisterReducers = (state = {userInfo:{}}, action) => {
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {loading:true}

        case USER_REGISTER_SUCCESS:
            return {loading:false, userInfo: action.payload}  
            
        case USER_REGISTER_FAIL:
            return {loading:false, error:action.payload}  
            
        case USER_LOGOUT:
            return {}      
            
        default:
            return state    
    }

}

export const adminDetailsCreatorReducers = (state = {userInfo:{}}, action) => {
    switch(action.type){
        case USER_ADMIN_DETAILS_CREATOR_REQUEST:
            return {...state, loading:true}

        case USER_ADMIN_DETAILS_CREATOR_SUCCESS:
            return {loading:false, userInfo: action.payload}  
            
        case USER_ADMIN_DETAILS_CREATOR_FAIL:
            return {...state, loading:false, error:action.payload}       
            
        default:
            return state    
    }

}

export const staffProfileCreatorReducers = (state = {userInfo:{}}, action) => {
    switch(action.type){
        case USER_STAFF_PROFILE_CREATOR_REQUEST:
            return {...state, loading:true}

        case USER_STAFF_PROFILE_CREATOR_SUCCESS:
            return {loading:false, userInfo: action.payload}  
            
        case USER_STAFF_PROFILE_CREATOR_FAIL:
            return {...state, loading:false, error:action.payload}       
            
        default:
            return state    
    }
}

export const staffListReducers = (state = {staffs:[]}, action) => {
    switch(action.type){
        case USER_STAFF_LIST_REQUEST:
            return {...state, loading:true}

        case USER_STAFF_LIST_SUCCESS:
            return {loading:false, staffs: action.payload}  
            
        case USER_STAFF_LIST_FAIL:
            return {...state, loading:false, error:action.payload}       
            
        default:
            return state    
    }
}

export const staffDeactivateReducers = (state = {staff:{}}, action) => {
    switch(action.type){
        case USER_STAFF_DEACTIVATE_REQUEST:
            return {...state, loading:true}

        case USER_STAFF_DEACTIVATE_SUCCESS:
            return {loading:false, staff: action.payload}  
            
        case USER_STAFF_DEACTIVATE_FAIL:
            return {...state, loading:false, error:action.payload}       
            
        default:
            return state    
    }
}