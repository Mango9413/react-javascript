//define functions which contains server-side code
// POST /api/new-meetup
import {MongoClient} from "mongodb";

import React from 'react';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://mango2022:LinG2UTi72HuN4Ip@cluster0.z3kdn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        const db = client.db()

        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne(data)

        console.log(result)
        await client.close()

        res.status(201).json({ message: 'Meetup inserted!'})
    }
};

export default handler;
