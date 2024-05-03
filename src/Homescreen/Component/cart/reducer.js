// import { actions } from "../../../redux/actions";
import { cartAstions } from "./cartaction";

const initialState = {
    cart : {},
    product: 0,
    totalprice:0
}


const cartReducer = (state = initialState, action) => {
    
    switch(action.type) { 
        case cartAstions.INC_QTY: {

            let productId = action.payload.id;
            let currentcount = state.cart[productId]
            state.cart[productId] = 1 + (currentcount ? currentcount : 0);
            state.product += 1
            state.totalprice += action.payload.price
            return {...state}
        }
        
        case cartAstions.DEC_QTY: {
            let productId = action.payload.id;
            let currentcount = state.cart[productId]
            currentcount ===1 ? (delete state.cart[productId]) : (state.cart[productId]) -= 1
            state.product -= 1
            state.totalprice -= action.payload.price
            return {...state}
        }
        default: return state
    }
}


export default cartReducer;