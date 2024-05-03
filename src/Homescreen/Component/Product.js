import { useState } from "react"
import { cartAstions } from "./cart/cartaction"
import { useDispatch } from "react-redux"



const Product = ({ data }) => {
    const [count, setCuont] = useState(0)
    const dispatch = useDispatch()

    const increment = () => {
        setCuont(count + 1)
        dispatch({ type: cartAstions.INC_QTY, payload: { id : data.id, price : data.price } });

    }

    const decrement = () => {
        setCuont(count - 1)
        dispatch({ type: cartAstions.DEC_QTY, payload: { id : data.id, price: data.price } });

    }


    return (
        <div className="cart" key={data.id}>
            <div className="imagecare">
                <img src={data.image} alt={data.title} />
            </div>
            <div className="namecare">
                <h3 style={{}}>{data.title}</h3>
            </div>
            <div className="footercare">
                <span className="productPrice">₹{data.price}</span>
                {
                    count === 0 ? 
                    <div className="insidebtn">
                        <button onClick={increment}>ADD</button>
                    </div> :
                    <div className="insidebtntwo">
                            <button onClick={decrement}>-</button>
                            <p>{count}</p>
                            <button onClick={increment}>+</button>
                    </div>

                }


            </div>
        </div>

    )
}


export default Product