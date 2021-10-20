import React,{useState} from 'react'

function QuantityButton({quantity, setQuantity}) {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const removeQuantity = () => {
        if(quantity > 1){
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
        }
    }

    return (
        <div className="quantityButton">
             <button style={{color:"red"}} onClick={() =>removeQuantity() }>&#8722;</button>
             <span>{quantity}</span>
             <button style={{color:"green"}} onClick={() =>addQuantity() }>&#43;</button>
        </div>
    )
}

export default QuantityButton
