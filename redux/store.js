import { createStore, combineReducers, applyMiddleware} from 'redux';
import { sellRequestsTodayReducer,
   sellRequestsAllReducer,
    sellRequestDetailsReducer,
     sellRequestAcceptReducer,
     
     } from './reducers/sellRequestsReducers';
import { ordersPendingReducer, completeOrderReducer, cancelOrderReducer, ordersCompletedReducer, ordersPendingTodayReducer } from './reducers/ordersReducers';  
import { userLoginReducers, userRegisterReducers, adminDetailsCreatorReducers, staffProfileCreatorReducers, staffListReducers, staffDeactivateReducers } from './reducers/userReducers';   
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    sellRequestsToday: sellRequestsTodayReducer,
    sellRequestsAll: sellRequestsAllReducer,
    sellRequestDetails: sellRequestDetailsReducer,
    sellRequestAccept: sellRequestAcceptReducer,
    userLogin:userLoginReducers,
    userRegister:userRegisterReducers,
    adminDetailsCreator:adminDetailsCreatorReducers,
    staffProfileCreator:staffProfileCreatorReducers,
    staffList:staffListReducers,
    staffDeactivate:staffDeactivateReducers,
    ordersPending:ordersPendingReducer,
    ordersPendingToday:ordersPendingTodayReducer,
    ordersCompleted:ordersCompletedReducer,
    completeOrder:completeOrderReducer,
    cancelOrder:cancelOrderReducer
    
  });
  
  const middleware = [thunk]
  export const store = createStore(rootReducer, applyMiddleware(...middleware));