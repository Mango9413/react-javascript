import { useEffect, useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = () => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput(value => value.trim() !== '')

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput(value => value.trim().includes('@'))

    const [formIsValid, setFormIsValid] = useState(false)

    // const [enteredName, setEnteredName] = useState('')
    // // const [enteredNameIsValid, setEnteredNameIsValid] = useState(true)
    // const [enteredNameTouched, setEnteredNameTouched] = useState(false)
    // const [enteredEmail, setEnteredEmail] = useState('')
    // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

    // const enteredNameIsValid = enteredName.trim() !== ''
    // const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched

    // const enteredEmailIsValid = enteredEmail.includes('@')
    // const emailInputIsInValid = !enteredEmailIsValid && enteredEmailTouched

    useEffect(()=>{
        if (enteredNameIsValid && enteredEmailIsValid){
            setFormIsValid(true)
        } else {
            setFormIsValid(false)
        }
    }, [enteredNameIsValid, enteredEmailIsValid])

    // const nameInputChangeHandler = event => {
    //     setEnteredName(event.target.value)
    //     // if (event.target.value.trim().length > 0) {
    //     //     setEnteredNameIsValid(true)
    //     // }
    // }
    //
    // const nameInputBlurHandler = () => {
    //     setEnteredNameTouched(true)
    //     // if (enteredName.trim().length === 0) {
    //     //     setEnteredNameIsValid(false)
    //     //     return
    //     // }
    // }

    // const emailInputChangeHandler = (event) => {
    //     setEnteredEmail(event.target.value)
    // }
    //
    // const emailInputBlurHandler = () => {
    //     setEnteredEmailTouched(true)
    // }

    const formSubmissionHandler = event => {
        event.preventDefault()
        // setEnteredNameTouched(true)
        // setEnteredEmailTouched(true)

        if (!enteredNameIsValid || !enteredEmailIsValid) {
            // setEnteredNameIsValid(false)
            return
        }
        // setEnteredNameIsValid(true)

        console.log(enteredName)
        console.log(enteredEmail)
        // setEnteredName('')
        // setEnteredNameTouched(false)
        resetNameInput()
        resetEmailInput()
        // setEnteredEmail('')
        // setEnteredEmailTouched(false)
    }

    const nameInputClasses = nameInputHasError
        ? 'form-control invalid'
        : 'form-control'

    const emailInputClasses = emailInputHasError
        ? 'form-control invalid'
        : 'form-control'

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text' id='name'
                    // onChange={nameInputChangeHandler}
                    // onBlur={nameInputBlurHandler}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                />
                {nameInputHasError && <p className='error-text'>Name must not be empty.</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your Email</label>
                <input
                    type='email' id='email'
                    // onChange={emailInputChangeHandler}
                    // onBlur={emailInputBlurHandler}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailInputHasError && <p className='error-text'>Email address must be validate</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
