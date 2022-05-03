import React, {useRef, useState} from 'react';
import classes from './Checkout.module.css'

const isEmpty = value => value.trim() === ''
const isPostal = value => value.trim().length !== 6

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        address: true,
        city: true,
        postal: true
    })


    const nameInputRef = useRef()
    const addressInputRef = useRef()
    const cityInputRef = useRef()
    const postalInputRef = useRef()

    const confirmHandler = event => {
        event.preventDefault()
        const enteredName = nameInputRef.current.value
        const enteredAddress = addressInputRef.current.value
        const enteredCity = cityInputRef.current.value
        const enteredPostal = postalInputRef.current.value

        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredAddressIsValid = !isEmpty(enteredAddress)
        const enteredCityIsValid = !isEmpty(enteredCity)
        const enteredPostalIsValid = !isPostal(enteredPostal)

        setFormInputsValidity({
            name: enteredNameIsValid,
            address: enteredAddressIsValid,
            city: enteredCityIsValid,
            postal: enteredPostalIsValid,
        })

        const formIsValid =
            enteredNameIsValid &&
            enteredAddressIsValid &&
            enteredCityIsValid &&
            enteredPostalIsValid

        if (!formIsValid){
            return
        }
        props.onConfirm({
            name: enteredName,
            address: enteredAddress,
            city: enteredCity,
            postal: enteredPostal
        })
    }
    return (
        <form onSubmit={confirmHandler}>
            <div
                className={`${classes.control} ${
                    formInputsValidity.name ? '' : classes.invalid
                }`}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id='name' ref={nameInputRef}/>
                {!formInputsValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div
                className={`${classes.control} ${
                    formInputsValidity.address ? '' : classes.invalid
                }`}>
                <label htmlFor="address">Your Address</label>
                <input type="text" id='address' ref={addressInputRef}/>
                {!formInputsValidity.address && <p>Please enter a valid address!</p>}
            </div>
            <div
                className={`${classes.control} ${
                    formInputsValidity.city ? '' : classes.invalid
                }`}>
                <label htmlFor="city">City</label>
                <input type="text" id='city' ref={cityInputRef}/>
                {!formInputsValidity.city && <p>Please enter a valid city!</p>}
            </div>
            <div
                className={`${classes.control} ${
                formInputsValidity.postal ? '' : classes.invalid
            }`}>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id='postal' ref={postalInputRef}/>
                {!formInputsValidity.postal && <p>Please enter a valid postal code!</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit} type='submit'>Confirm</button>
            </div>

        </form>
    );
};

export default Checkout;
