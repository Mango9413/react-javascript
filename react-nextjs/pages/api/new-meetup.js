//define functions which contains server-side code
// POST /api/new-meetup
import React from 'react';
import {MongoClient} from "mongodb";
import {mongoUrl} from "../consts";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect(mongoUrl)
        const db = client.db()

        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne(data)

        console.log(result)
        await client.close()

        res.status(201).json({ message: 'Meetup inserted!'})
    }
};

export default handler;
