import { useSelector } from "react-redux"




const Navbar = () => {

    const totalproducts = useSelector(s => s.y.product)
    const totalprice = useSelector(s => s.y.totalprice.toFixed(1))

    return (
        <div className="navbar">
            <div className="logo">
                
            </div>
            <div className="search">
                <input type="text" placeholder="Search" />
            </div>

            {
                totalprice !== "0.0" ? <div>
                <span>{totalproducts} item</span>
                <span>₹ {totalprice}</span>
            </div> : <div> mycart </div>
            }
            
        </div>
    )
}

export default Navbar