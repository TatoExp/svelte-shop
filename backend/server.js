const express = require("express");
const app = express()
const mongoose = require('mongoose');
const cors = require("cors")
const server = '127.0.0.1:27017';
const database = 'AlmarSample';

mongoose.connect(`mongodb://${server}/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('MongoDB connected!!');
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
});

app.use(cors())

app.get("/api/db", (req, res) => {
    async function run() {

        try {
            const MongoClient = require("mongodb").MongoClient;
            const uri = `mongodb://${server}/${database}`;
            const mClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

            await mClient.connect()
            
            console.log("connected")
            const db = mClient.db("AlmarSample")
            const col = db.collection("sample")

            const myDoc = await col.find().sort({_id:-1}).toArray()
            res.send(myDoc)

        } finally {
            //await mClient.close()
        }
     }
    run().catch(console.error);
})

app.get("/api/db/:product", (req, res) => {
    async function run() {

        try {
            const MongoClient = require("mongodb").MongoClient;
            const uri = `mongodb://${server}/${database}`;
            const mClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

            await mClient.connect()
            
            console.log("connected")
            const db = mClient.db("AlmarSample")
            const col = db.collection("sample")
            console.log(req.params.product)

            let myName = req.params.product
            let newName = myName.slice(1)
            let firstLetter = myName.charAt(0).toUpperCase()
            newName = firstLetter + newName

            console.log(newName)
            const product = await col.find({"product": newName}).sort({_id:-1}).toArray()
            res.send(product)

        } finally {
            //await mClient.close()
        }
     }
    //res.send(req.params)
    run()
})

app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(4000, () => {
    console.log("app on 4000")
})