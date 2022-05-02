import { useEffect, useState } from "react";


const SimpleInput = () => {
    const [enteredName, setEnteredName] = useState('')
    // const [enteredNameIsValid, setEnteredNameIsValid] = useState(true)
    const [enteredNameTouched, setEnteredNameTouched] = useState(false)
    const [formIsValid, setFormIsValid] = useState(false)

    const enteredNameIsValid = enteredName.trim() !== ''
    const nameInputIsValid = !enteredNameIsValid && enteredNameTouched

    useEffect(()=>{
        if (enteredNameIsValid){
            setFormIsValid(true)
        } else {
            setFormIsValid(false)
        }
    }, [enteredNameIsValid])

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value)
        // if (event.target.value.trim().length > 0) {
        //     setEnteredNameIsValid(true)
        // }
    }

    const nameInputBlurHandler = () => {
        setEnteredNameTouched(true)
        // if (enteredName.trim().length === 0) {
        //     setEnteredNameIsValid(false)
        //     return
        // }
    }

    const formSubmissionHandler = event => {
        event.preventDefault()
        setEnteredNameTouched(true)

        if (!enteredNameIsValid) {
            // setEnteredNameIsValid(false)
            return
        }
        // setEnteredNameIsValid(true)

        console.log(enteredName)
        setEnteredName('')
        setEnteredNameTouched(false)
    }

    const nameInputClasses = nameInputIsValid
        ? 'form-control invalid'
        : 'form-control'

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text' id='name'
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={enteredName}
                />
                {nameInputIsValid && <p className='error-text'>Name must not be empty.</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
