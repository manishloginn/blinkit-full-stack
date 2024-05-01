import { actions } from "./actions";

const initialState = {
    products : null
}



function productReducer ( state = initialState, action ) {


    if(action.type === actions.PRODUCT_SUCCESS){
        return { ...state, products : action.payload}
    }
}


export default productReducer;