import { MongoClient } from 'mongodb'

// /api/new-meetup
// Only POST requests
async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        // const { title, image, address, description } = data;

        const client = MongoClient.connect();
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data); //instert one new docoume to this collection in mongo db
        client.close(); //close database connection with mongodb

        //send respond
        res.status(201), json({ message: 'Meetup inserted!' });
    }
}

export default handler;