

const Product = ({ data }) => {
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
                <div className="insidebtn">
                    <button>ADD</button>
                </div>
            </div>
        </div>

    )
}


export default Product