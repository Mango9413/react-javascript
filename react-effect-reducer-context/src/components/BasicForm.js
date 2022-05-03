import useInput from "../hooks/use-input";
import {useEffect, useState} from "react";

const BasicForm = () => {
    const {
        value: enteredFirstName,
        isValid: enteredFirstNameIsValid,
        hasError: firstNameInputHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName,
    } = useInput(value => value.trim() !== '')

    const [formIsValid, setFormIsValid] = useState(false)

    useEffect(()=>{
        if (enteredFirstNameIsValid){
            setFormIsValid(true)
        } else {
            setFormIsValid(false)
        }
    }, [enteredFirstNameIsValid])

    const formSubmitHandler = (event) => {
        event.preventDefault()

        if (!formIsValid) {
            return
        }

        console.log(enteredFirstName)
        resetFirstName()
    }
    const firstNameClasses = firstNameInputHasError
        ? 'form-control invalid'
        : 'form-control'

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='control-group'>
                <div className={firstNameClasses}>
                    <label htmlFor='name'>First Name</label>
                    <input
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                        value={enteredFirstName}
                        type='text' id='name'
                    />
                    {firstNameInputHasError && <p className='error-text'>Valid first name must be entered.</p>}
                </div>
                <div className='form-control'>
                    <label htmlFor='name'>Last Name</label>
                    <input type='text' id='name'/>
                </div>
            </div>
            <div className='form-control'>
                <label htmlFor='name'>E-Mail Address</label>
                <input type='text' id='name'/>
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
