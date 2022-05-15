import React, {Fragment} from 'react';
import {useRouter} from "next/router";
import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    const router = useRouter()
    const addMeetupHandler = async (enteredMeetupData) => {
        //special API folder and then the file name
        //this will now send the request and it will trigger the function
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
        router.push('/')
    }
    return (
        <Fragment>
            <Head>
                <title>Add a New Meetup</title>
                <meta
                    name='description'
                    //show as a result on a search engine
                    content='Add your own meetups!'
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </Fragment>
    );
};

export default NewMeetupPage;
