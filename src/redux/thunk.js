import axios from "axios";
import { actions } from "./actions";

// const delay = (ms) => {
//     return new Promise((r) => setTimeout(r, ms));
// }


export async function Fetchprpoduct(dispatch)  {
    try {
        const response = await axios("https://fakestoreapi.com/products");
        dispatch({ type: actions.PRODUCT_SUCCESS, payload: response.data})
       } catch (error) {
            return error
       }
}