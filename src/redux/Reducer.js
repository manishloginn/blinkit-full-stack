import { actions } from "./actions";

const initialState = {
    products: null
}



function productReducer(state = initialState, action) {
    switch (action.type) {
        case actions.PRODUCT_SUCCESS:
            return { ...state, products: action.payload };
        default:
            return state; // Return the current state for any other action types
    }
}



export default productReducer;