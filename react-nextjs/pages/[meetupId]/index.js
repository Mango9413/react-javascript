import React, {Fragment} from 'react';
import {MongoClient, ObjectId} from "mongodb";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import {mongoUrl} from "../consts";

const MeetupDetails = (props) => {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta
                    name='description'
                    //show as a result on a search engine
                    content={props.meetupData.description}
                />
            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>

    );
};

export async function getStaticPaths() {
    const client = await MongoClient.connect(mongoUrl)
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find({}, {_id:1}).toArray()

    client.close()

    return {
        //false = contains all supported meetup ID values
        //一般是设置常用的pages 防止全部的page pre-generate
        fallback: false,
        paths: meetups.map(meetup => ({
            params: {meetupId: meetup._id.toString()}
        }))
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId

    const client = await MongoClient.connect('mongodb+srv://mango2022:LinG2UTi72HuN4Ip@cluster0.z3kdn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const selectedMeetup = await meetupsCollection.findOne({_id : ObjectId(meetupId)})

    client.close()
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        }
    }
}

export default MeetupDetails;