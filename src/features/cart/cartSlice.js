import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name:"cart",
    initialState :{
        cartItems:[],
    },
    reducers:{
        addItemToCart: (state,action) =>{
            state.cartItems.push({
                pId:action.payload.product.productId,
                pQuantity:action.payload.quantity,
                pPrice:action.payload.product.productPrice * action.payload.quantity,
            })
        },
        removeItemFromCart:(state,action) =>{
            console.log("reducer",action.payload)

            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.pId != action.payload.productId
            )
        }
    }
});

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total,cartItem) => {
        return cartItem.pPrice + total;
    },0)
}

export const getCartItems = state => state.cart.cartItems;

export const {addItemToCart, removeItemFromCart} = cartSlice.actions;

export default cartSlice.reducer