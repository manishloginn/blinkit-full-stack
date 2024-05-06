import { useEffect, } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Fetchprpoduct } from "../redux/thunk"
import Product from "./Component/Product"
import "./cartstyle.css"



const HomeScreen = () => {

    const dispatch = useDispatch()
    const products = useSelector(s => {

        // const selectedProduct = state.x.selectedProduct;
        // if (selectedProduct == "") {
        //     return state.x.products;
        // } else {
        //     return state.x.products?.filter(product => 
        //         product.title.indexOf(selectedProduct) !== -1
        //     );
        // }
    // if (s.x.selectproduct.value === "ALL") {
    //     return s.x.products
    // }
    // const products = useSelector(state => {
    //     // const selectedProduct = state.x.selectedProduct;
    //     // if (selectedProduct === "") {
    //     //     return state.x.products;
    //     // } else {
    //     //     return state.x.products?.filter(product => product.title.includes(selectedProduct));
    //     // }
       
    // });

    
    // return s.x.products.includes(s.x.selectproduct.value)

    return s.x.products?.filter(product => product.title.toLowerCase().includes(s.x.selectproduct.toLowerCase()))

    // return s.x.products

    // if (s.x.products.value === "All") {
    //     return products
    // }
    // return s.x.products?.filter(product => product.title.includes(s.x.selectproduct.value))
    })



    useEffect(() => {
        dispatch(Fetchprpoduct)
    }, [dispatch])

    if (products == null) {
        return <h1>Loading...</h1>
    }


    return (
        <div className="cartup">
            {
                products?.map(product => <Product data={product} key={product.id} />)
            }
        </div>
    )

}


export default HomeScreen