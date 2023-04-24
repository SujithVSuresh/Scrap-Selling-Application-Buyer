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
    SELLREQUESTS_ACCEPT_RESET,

 } from "../constants/sellRequestsConstants";

 export const sellRequestsTodayReducer = (state={todaysSellRequests:[], loading:true}, action) => {
    switch(action.type){
        case SELLREQUESTS_TODAY_REQUEST:

            return{
                ...state,
                loading:true
            }

        case SELLREQUESTS_TODAY_SUCCESS:
            return{
                loading:false,
                todaysSellRequests:action.payload
            }  
            
        case SELLREQUESTS_TODAY_FAIL:
            return{
                loading:false,
                error:action.payload
            }             
        
        default:
            return state               
    }

}

export const sellRequestsAllReducer = (state={allSellRequests:[], loading:true}, action) => {
    switch(action.type){
        case SELLREQUESTS_ALL_REQUEST:

            return{
                ...state,
                loading:true
            }

        case SELLREQUESTS_ALL_SUCCESS:
            return{
                loading:false,
                allSellRequests:action.payload
            }  
            
        case SELLREQUESTS_ALL_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }             
        
        default:
            return state               
    }

}

export const sellRequestDetailsReducer = (state={detailsSellRequest:{}, loading:true}, action) => {
    switch(action.type){
        case SELLREQUESTS_DETAILS_REQUEST:

            return{
                ...state,
                loading:true
            }

        case SELLREQUESTS_DETAILS_SUCCESS:
            return{
                loading:false,
                detailsSellRequest:action.payload
            }  
            
        case SELLREQUESTS_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload
            }             
        
        default:
            return state               
    }

}

export const sellRequestAcceptReducer = (state={sellRequest:{}, loading:true}, action) => {
    switch(action.type){
        case SELLREQUESTS_ACCEPT_REQUEST:

            return{
                ...state,
                loading:true
            }

        case SELLREQUESTS_ACCEPT_SUCCESS:
            return{
                ...state,
                loading:false,
                sellRequest:action.payload
            }  
            
        case SELLREQUESTS_ACCEPT_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            } 
            
        case SELLREQUESTS_ACCEPT_RESET:
            return{}     
        
        default:
            return state               
    }

}

