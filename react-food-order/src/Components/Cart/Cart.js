import React, {useContext, useState} from 'react';
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import CartContext from "../../Store/cart-context";

import classes from './Cart.module.css'


const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const [didSubmit, setDidSubmit] = useState(false)

    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    }
    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1})
    }
    const orderHandler = () => {
        setIsCheckout(true)
    }

    const submitOrderHandler = async (userData) => {
        setIsSubmit(true)
        await fetch('https://fancy-foodorder-default-rtdb.firebaseio.com/', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        })
        setIsSubmit(false)
        setDidSubmit(true)
        cartCtx.clearCart()
    }

    const cartItems = <ul className={classes['cart-items']}>{
        cartCtx.items.map(item => <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}/>)
    }</ul>

    const modalButtons = <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
    </div>

    const cartModalContent = (
        <React.Fragment>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
            {!isCheckout && modalButtons}
        </React.Fragment>
    )

    const isSubmitModalContent = <p>Sending order~~~</p>
    const didSubmitModalContent = (
        <React.Fragment>
            <p>Successfully sent the order!</p>
            <button className={classes.button} onClick={props.onClose}>Close</button>
        </React.Fragment>
    )

    return (
        <Modal onClose={props.onClose}>
            {!isSubmit && !didSubmit && cartModalContent}
            {isSubmit && isSubmitModalContent}
            {!isSubmit && didSubmit && didSubmitModalContent}
        </Modal>
    );
};

export default Cart;
