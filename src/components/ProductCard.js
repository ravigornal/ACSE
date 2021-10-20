import React,{useState} from 'react'
import img from "../assets/images/server.svg"
import QuantityButton from './QuantityButton';
import {useDispatch} from 'react-redux';
import {addItemToCart} from "../features/cart/cartSlice";
function ProductCard({product}) {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return (
        <div className="card text-center" style={{width: "15rem"}}>
            <img className="card-img-top img" style={{padding: "10px",height:"150px"}} src={img} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">Price : $ {product.productPrice}</p>
                <QuantityButton
                    quantity={quantity}
                    setQuantity={setQuantity}
                />
                <button className="btn btn-primary" onClick={() =>dispatch(addItemToCart({product,quantity}))}>Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;
