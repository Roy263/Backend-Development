const { MongoClient } = require('mongodb');
require('dotenv').config();

const cache=require('../model/cachedata')


const url =  process.env.MONGODB_URl
const dbName = 'Travel';
const collectionName = 'users';

exports.login = async function (req, res) {
    // TODO from below
    email=req.body.email
    console.log(email)
    const client = new MongoClient(url);
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.findOne({"email":email});
        console.log(result);
        if (result) {
            let cacheData=result
            cache.SetCache("user",cacheData)
            res.json(data = result, status = 200, message = "Success");
        }
        else {
            res.json(status = 200, message = "Oops.. there is no travel destination in your bucket, we will soon come back with a new one");
        }

    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }
};
