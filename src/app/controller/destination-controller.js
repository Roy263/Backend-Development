// All controller logic for CRUD operation will stay here

// const BookingModel = require('../model/booking-model');
const { query } = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const cache = require('../model/cachedata')

const url = process.env.MONGODB_URl;
const dbName = 'Travel';
const collectionName = 'destinations';
// Create and Save a new Booking
exports.create = (req, res) => {

    // validate request body

    // Creaate Booking

    // Save Booking in Database

};


// Retrieve and return all Booking from the database.
exports.findAll = async function (req, res) {
    // TODO from below
    queryparam=req.query
    console.log(queryparam)   
    const client = new MongoClient(url);
    if (cache.GetCache("user") != null) {
        try {
            await client.connect();
            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            const result = await collection.find(queryparam).limit(5).toArray();
            console.log(result);
            if (result.length > 0) {
                res.json(data = result, status = 200, message = "Success");
            }
            else {
                res.json(status = 200, message = "No result found");
            }

        } catch (err) {
            console.log(err);
        } finally {
            await client.close();
        }
    }
    else {
        res.json(status = 200, message = "Oops.. please Login");
    }
};

// Find a single Booking with a BookingId
exports.findOne = async (req, res) => {
    // TODO from below
    Destination_id = Number(req.params.id)
    console.log(Destination_id)
    const client = new MongoClient(url);
    if (cache.GetCache("user") != null) {
        try {
            await client.connect();
            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            const result = await collection.findOne({id:Destination_id});
            console.log(result);
            if (result) {
                res.json(data = result, status = 200, message = "Success");
            }
            else {
                res.json(status = 200, message = "Oops.. there is no travel destination with this id, we will soon come back with a new one");
            }

        } catch (err) {
            console.log(err);
        } finally {
            await client.close();
        }
    }
    else {
        res.json(status = 200, message = "Oops.. please Login");
    }

};

// Update a Booking identified by the BookingId in the request
exports.update = (req, res) => {
    // TODO from below
};

// Delete a Booking with the specified BookingId in the request
exports.delete = (req, res) => {
    // TODO from below
};