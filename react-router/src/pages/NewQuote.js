import React, {useEffect} from 'react';
// import {useHistory} from "react-router-dom";
import {useNavigate} from "react-router-dom"

import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import {addQuote} from "../lib/api";

const NewQuote = () => {
    const {sendRequest, status} = useHttp(addQuote)
    // const history = useHistory()
    const navigate = useNavigate()

    // useEffect(()=>{
    //     if (status === 'completed'){
    //         history.push('/quotes')
    //     }
    // }, [status, history])

    useEffect(()=>{
        if (status === 'completed'){
            navigate('/quotes')
        }
    }, [status, navigate])

    const addQuoteHandler = quoteData => {
        sendRequest(quoteData)
    }
    return (
        <div>
            <QuoteForm
                isLoading={status === 'pending'}
                onAddQuote={addQuoteHandler}
            />
        </div>
    );
};

export default NewQuote;
