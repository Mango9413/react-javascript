import React, {Fragment} from 'react';
import Head from "next/head";
import {MongoClient} from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
    // const [loadedMeetups, setLoadedMeetups] = useState([])
    // useEffect(()=>{
    //     //send a http request and fetch data
    //     setLoadedMeetups(DUMMY_MEETUPS)
    // }, [])
    return (
        <Fragment>
            <Head>
                <title>React-Meetups</title>
                <meta
                    name='description'
                    //show as a result on a search engine
                    content='Browse a huge list of highly active React meetups!'
                />
            </Head>
            <MeetupList meetups={props.meetups}/>
        </Fragment>
    );
};

// //always on the server after deployment: runs for every incoming requests
// export async function getServerSideProps (context) {
//     const req = context.req
//     const res = context.res
//
//     //fetch data from API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

//nextjs look at getStaticProps, it will call it before rendering the components
//move the data fetching away from the client to the server-side or to be precise to the during the build process side
export async function getStaticProps() {
    //fetch data from an API
    const client = await MongoClient.connect('mongodb+srv://mango2022:LinG2UTi72HuN4Ip@cluster0.z3kdn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find().toArray()

    client.close()

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 10,
        //(regular update)每10s更新数据如果有新数据进来 => 不需要redeploy or rebuild after the data change
    }
}

export default HomePage;
