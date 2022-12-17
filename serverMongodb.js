const express = require('express');
const app = express();
const { MongoClient} = require('mongodb');

//hosting the mondo uri  -(its the location of the mongo db)
const mongoUri = "mongodb+srv://Josephy1605:aeqt03Q6xa4Gxw2H@cluster0.h0kkwov.mongodb.net/?retryWrites=true&w=majority";

//Now lets connect to mongo db

// MongoClient.connect(mongoUri,{ useNewUrlParser: true,
//     useUnifiedTopology: true }).then((client,err)=>{
//     if(err) {
//         throw(err);
//     }
//     console.log("connected to the db");
//  });

// New way - creating an instance of the connection
const client = new MongoClient(mongoUri);

//creating routes
app.get('/api/users', async(req, res) => {
    try{
        await client.connect();
        const database = client.db('myApp');
        const collection = database.collection('users');
        const query = await collection.insertOne({
            name: 'Francis',
            lastName: 'Jones'
        });
        console.log("que", query);
        res.status(200).json({awesome: 'yes'});
    } catch(err) {
        console.log("error handles", err)
    } finally {
        await client.close();
        console.log("All is done");
    }
})



const PORT = process.env.PORT || 8000;
app.listen(PORT);

//username Josephy1605
//password  aeqt03Q6xa4Gxw2H

// url - mongodb+srv://Josephy1605:<password>@cluster0.h0kkwov.mongodb.net/?retryWrites=true&w=majority