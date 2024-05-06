import { useState } from "react"

export const SidebarProduct = ({product}) => {

    const [count, setcount] = useState(1)


    const increment = () => {
        setcount(count + 1)
    }

    const decrement = () => {
        setcount(count - 1)
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
                    <p>{count}</p>
                    <button onClick={increment}>+</button>
                </div>
            </div>
            
            
        </div>
        

        </>
    )
}