import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import productReducer from "./Reducer";
import { thunk } from "redux-thunk";
import cartReducer from "../Homescreen/Component/cart/reducer";



const rootReducer = combineReducers({
    x: productReducer,
    y: cartReducer
})



const store = createStore(rootReducer, applyMiddleware(thunk));



export default store;