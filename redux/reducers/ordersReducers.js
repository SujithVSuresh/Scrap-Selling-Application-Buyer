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



export const ordersPendingReducer = (state={pendingOrders:[], loading:true}, action) => {
    switch(action.type){
        case ORDERS_PENDING_REQUEST:

            return{
                ...state,
                loading:true
            }

        case ORDERS_PENDING_SUCCESS:
            return{
                ...state,
                loading:false,
                pendingOrders:action.payload
            }  
            
        case ORDERS_PENDING_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }             
        
        default:
            return state               
    }

}

export const ordersPendingTodayReducer = (state={pendingOrders:[], loading:true}, action) => {
    switch(action.type){
        case ORDERS_PENDING_TODAY_REQUEST:

            return{
                ...state,
                loading:true
            }

        case ORDERS_PENDING_TODAY_SUCCESS:
            return{
                ...state,
                loading:false,
                pendingOrders:action.payload
            }  
            
        case ORDERS_PENDING_TODAY_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }             
        
        default:
            return state               
    }

}

export const ordersCompletedReducer = (state={completedOrders:[], loading:true}, action) => {
    switch(action.type){
        case ORDERS_COMPLETED_REQUEST:

            return{
                ...state,
                loading:true
            }

        case ORDERS_COMPLETED_SUCCESS:
            return{
                ...state,
                loading:false,
                completedOrders:action.payload
            }  
            
        case ORDERS_COMPLETED_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }             
        
        default:
            return state               
    }

}

export const completeOrderReducer = (state={order:{}, loading:true}, action) => {
    switch(action.type){
        case ORDERS_COMPLETE_REQUEST:

            return{
                ...state,
                loading:true
            }

        case ORDERS_COMPLETE_SUCCESS:
            return{
                ...state,
                loading:false,
                order:action.payload
            }  
            
        case ORDERS_COMPLETE_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }             
        
        default:
            return state               
    }

}

export const cancelOrderReducer = (state={order:{}, loading:true}, action) => {
    switch(action.type){
        case ORDERS_CANCEL_REQUEST:

            return{
                ...state,
                loading:true
            }

        case ORDERS_CANCEL_SUCCESS:
            return{
                ...state,
                loading:false,
                order:action.payload
            }  
            
        case ORDERS_CANCEL_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }             
        
        default:
            return state               
    }

}