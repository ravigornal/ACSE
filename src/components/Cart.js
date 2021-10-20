import React, {useState} from 'react';
import trashImg from "../assets/images/trash.png";
import {useSelector, useDispatch} from "react-redux";
import {getCartItems,getTotalPrice,removeItemFromCart} from "../features/cart/cartSlice";

function Cart() {
    const cartItems = useSelector(getCartItems);
    var totalPrice = useSelector(getTotalPrice);
    const [couponCode, setCoupenCode] = useState("");
    const [discount, setDiscount] = useState(0);
    const [applied, setApplied] = useState(false);
    const [msg, setMsg] = useState("");
    const dispatch = useDispatch();

    const applyPromo =(code) =>{
        setApplied(true)
        if(code == 10 && totalPrice > 5000){
            let discount = (totalPrice/100)*code;
            setDiscount(discount);
            setMsg("10% Discount applied")
            return
        }
        if(code == 15 && totalPrice > 10000){
            let discount = (totalPrice/100)*code;
            setDiscount(discount);
            setMsg("15% Discount applied")
            return
        }else{
            setDiscount(0);
            setMsg("Invalid Coupon Code")
        }
    }
    return (
        <div class="card text-white bg-info" style={{maxWidth: "21rem",marginTop: "20px"}}>
            <div class="card-header" style={{fontSize: "18px"}}><b>Cart Items</b></div>
            <div class="card-body">
                <table class="table table-sm">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems && cartItems.map((item,i) => 
                        <tr>
                            <th scope="row">{i+1}</th>
                            <td>{item.pId}</td>
                            <td>{item.pQuantity}</td>
                            <td>{item.pPrice.toFixed(2)}</td>
                            <td onClick={() => dispatch(removeItemFromCart({productId:item.pId}))}><img src={trashImg} style={{width:"20px",justifyContent:"center",cursor:"pointer"}}></img></td>
                        </tr>
                    )}
                </tbody>
                </table>
            </div>
            <div class="card-footer">
                <div class="input-group">
                    <select class="custom-select" id="inputGroupSelect04" onChange={(e) =>setCoupenCode(e.target.value)}>
                        <option selected>Select a promo code</option>
                        <option value="10">PLSD123 (10% discount above $5000 )</option>
                        <option value="15">PLSD456 (15% discount above $10000 )</option>
                    </select>
                    <div class="input-group-append">
                        <button class="btn btn-secondary" type="button" onClick={() => applyPromo(couponCode)}>Apply</button>
                    </div>
                </div>
                <div class="">Total Amount : $ {totalPrice.toFixed(2) - discount.toFixed(2)}</div>
                {applied && <div style={{fontSize:"13px"}}>{msg}</div>}
            </div>
        </div>
    )
}

export default Cart
