// import { useState } from "react"

import { useDispatch } from "react-redux"
import { cartAstions } from "../../Homescreen/Component/cart/cartaction"

export const SidebarProduct = ({product}) => {

    // const [count, setcount] = useState(1)

    const dispatch = useDispatch()


    const increment = () => {
        // setcount(count + 1)
        // diapatch({type : })
        dispatch({type: cartAstions.INC_QTY, payload : {id : product.id , price : product.price} })
    }

    const decrement = () => {
        // setcount(count - 1)
        dispatch({ type: cartAstions.DEC_QTY, payload : {id : product.id, price : product.price}})
    
    }


    return (
        <>
        <div className="middlemiddle">
            <div className="imgdiv">
                <img src={product.image} alt="image" />
            </div>
            <div className="fontdiv">
                <span>{product.title}</span>
                <p>{product.quantity}</p>
                <b>₹{product.price}</b>
            </div>
            <div>
                <div className="insidebtn">
                    <button onClick={decrement} >-</button>
                    <p>{product.quantity}</p>
                    <button onClick={increment}>+</button>
                </div>
            </div>
            
            
        </div>
        

        </>
    )
}