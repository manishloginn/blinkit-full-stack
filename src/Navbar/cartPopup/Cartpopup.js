import { forwardRef, useImperativeHandle, useMemo, useState } from "react"
import "./cartstyle.css"
import { SidebarProduct } from "./SidebarProduct"
import { useSelector } from "react-redux";




const Cartpopup = forwardRef((_, ref) => {

    const [show, setshow] = useState(false)

    const totalprice = useSelector((s) => s.y.totalprice.toFixed(0));

    const products = useSelector((state) => {
        const productlist = state.x.products;
        const cart = state.y.cart;
        const list = [];
        console.log("totalprice: " + totalprice)
        productlist?.forEach((product) => {
            if (cart[product.id]) {
                list.push({ ...product, quantity: cart[product.id] });
            }
        });


        return list;

    });

    console.log(products)


    // const memoizedProducts = useMemo(() => products, [products]);




    useImperativeHandle(ref, () => {
        return { setshow }
    });

    const closecart = () => {
        setshow(false)
    }

    if (!show) return null

    return (
        <div className="myCart">
            <div className="insidecart">
                <div className="header">
                    <h1>cart</h1> <span onClick={closecart} className="material-icons"> close</span>
                </div>
                <div className="middlecart">
                    <div className="middletop">
                        <div className="logo">
                            <span className="material-icons">timer</span>
                        </div>
                        <div>
                            <b>Delivery in 8 minutes</b>
                            <p>Shipment of 1 item</p>
                        </div>
                    </div>
                  
                        {
                            products.map((product, index) => {
                                return (
                                    <SidebarProduct key={index} product={product}/>
                                )
                            })
                        }
                    




                </div>

                <div className="bottomtop">
                    <div >
                        <b>Bill details</b>
                    </div >
                    <div className="btm1">
                        <p>Items total</p>
                        <p>₹{totalprice}</p>
                    </div>
                    <div className="btm1">
                        <p>Delivery charge</p>
                        <p>FREE</p>
                    </div>
                    <div className="btm1">
                        <p>Grand total</p>
                        <p>₹{totalprice}</p>
                    </div>
                </div>

                <div className="bottommm">
                    <b>Cancellation Policy</b>
                    <p>Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
                </div>
                <div className="botm">
                    <div>
                        <b>₹{totalprice}</b>
                        <p>TOTAL</p>
                    </div>
                    <div className="botmtarget">Login to Proceed
                        <span class="material-icons">arrow_forward_ios</span> </div>
                </div>


            </div>

        </div >
    )
});

export default Cartpopup