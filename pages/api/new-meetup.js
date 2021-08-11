//api routes are about returning components. this is server side code and this code will never exposed to client.
//we simply create our own API

import { MongoClient } from 'mongodb';

async function handler(req, res) {
  // req - request res- response
  //req contains header, request body, method
  if (req.method === 'POST') {
    //only POST will trigger this request
    const data = req.body; // data of incoming request

    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      'mongodb+srv://user:Tcsg-134USER@cluster0.rwrjf.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    //this code should not end up on client side.

    const db = client.db();
    //db() method to get hold of database.

    //collection are full of documents. single meetup will be single meetup. whole collection will be meetups.
    const meetupsCollection = db.collection('meetups'); //name will generate on the fly.

    console.log(meetupsCollection);

    //we insert data to database with inserOne()
    const result = await meetupsCollection.insertOne(data);
    //build in query method to add one single document to collection.
    //inserted data is an object. since data const is an object we dont need to add it as an object unlike this insertOne({title, address etc})
    console.log(result);

    //close the db connection once we are done.
    client.close();

    //res object is to sendback the response. status sets a http response. json is to prepare json data for response.
    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
