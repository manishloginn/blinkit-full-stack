import { applyMiddleware, legacy_createStore as createStore } from "redux";
import productReducer from "./Reducer";
import { thunk } from "redux-thunk";




const store = createStore(productReducer, applyMiddleware(thunk));

export default store;