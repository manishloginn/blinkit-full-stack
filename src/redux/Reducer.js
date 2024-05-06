import { actions } from "./actions";

const initialState = {
    products: [],
    selectproduct : ""
}



function productReducer(state = initialState, action) {
    switch (action.type) {
        case actions.PRODUCT_SUCCESS:
            return { ...state, products: action.payload };
        case actions.SEARCH_PRODUCT:
            return {...state, selectproduct: action.payload};
        default:
            return state; 
    }
}



export default productReducer;