import { useEffect,  } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Fetchprpoduct } from "../redux/thunk"
import Product from "./Component/Product"
import "./cartstyle.css"



const HomeScreen = () => {

    const dispatch = useDispatch()
    const products = useSelector(s => {
        // console.log(s.x.products)
        return s.x.products
    })

    // console.log({products})

    useEffect(() => {
        dispatch(Fetchprpoduct)
    }, [])

    if (products==null) {
        return <h1>Loading...</h1>
    }


    return (
        <div className="cartup">
            {
                products?.map(product => <Product data={product}  key={product.id}/>)
            }
        </div>
    )
    
}


export default HomeScreen